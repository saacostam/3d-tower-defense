import { Color, Mesh, MeshBasicMaterial, Vector2, Vector3 } from "three";
import {
  AddMessageCommand,
  BattleFieldContainer,
  BoxActor,
} from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Actor, Composite, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { PathfindingUtils } from "../pathfinding";
import { SimpleGun } from "./simple-gun";
import { DefenseType } from "./shared-types";
import { RocketGun } from "./rocket-gun";
import { PRICE_CONFIG } from "./gun.config";

export type NotifyPathChangeEvent = () => void;

export interface CursorArgs {
  pos: Vector2;
  addMessage: AddMessageCommand;
  notifyPathChangeEvent: NotifyPathChangeEvent;
}

export class Cursor extends Actor {
  private life: number;

  declare mesh: Composite<Mesh>;

  private pos: Vector2;

  private greenMaterial = new MeshBasicMaterial({
    color: new Color(COLOR_PALETTE.LIGHT_GREEN),
  });
  private redMaterial = new MeshBasicMaterial({
    color: new Color(COLOR_PALETTE.RED),
  });

  private RENDER_TIMEOUT = 50;
  private renderTimeout = 0;

  private addMessage: AddMessageCommand;
  private notifyPathChangeEvent: NotifyPathChangeEvent;

  constructor(args: CursorArgs) {
    const createLine = (type: "horizontal" | "vertical") => {
      return MeshUtils.createBox({
        width:
          type === "horizontal"
            ? WORLD_CONFIG.TILE_SIZE
            : WORLD_CONFIG.TILE_SIZE / 16,
        height: WORLD_CONFIG.TILE_SIZE / 16,
        depth:
          type === "vertical"
            ? WORLD_CONFIG.TILE_SIZE
            : WORLD_CONFIG.TILE_SIZE / 16,
        color: new Color(COLOR_PALETTE.RED),
      });
    };

    const pos3 = new Vector3(
      args.pos.x,
      WORLD_CONFIG.TILE_SIZE / 16,
      args.pos.y,
    );

    const mesh = new Composite({
      center: pos3,
      parts: [
        {
          mesh: createLine("vertical"),
          offset: new Vector3((WORLD_CONFIG.TILE_SIZE * 15) / 32, 0, 0),
        },
        {
          mesh: createLine("vertical"),
          offset: new Vector3(-(WORLD_CONFIG.TILE_SIZE * 15) / 32, 0, 0),
        },
        {
          mesh: createLine("horizontal"),
          offset: new Vector3(0, 0, (WORLD_CONFIG.TILE_SIZE * 15) / 32),
        },
        {
          mesh: createLine("horizontal"),
          offset: new Vector3(0, 0, -(WORLD_CONFIG.TILE_SIZE * 15) / 32),
        },
      ],
    });

    super({ mesh });

    this.pos = args.pos;
    this.addMessage = args.addMessage;
    this.notifyPathChangeEvent = args.notifyPathChangeEvent;

    this.life = 0;
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);

    if (!(container instanceof BattleFieldContainer)) {
      throw new Error("Cursor can only be used in a BattleFieldContainer");
    }

    this.life += delta;

    let DELTA_Y = 0;
    if (game.keyboardHandler.wasPressed("ArrowUp")) DELTA_Y = -1;
    else if (game.keyboardHandler.wasPressed("ArrowDown")) DELTA_Y = 1;

    let DELTA_X = 0;
    if (game.keyboardHandler.wasPressed("ArrowLeft")) DELTA_X = -1;
    else if (game.keyboardHandler.wasPressed("ArrowRight")) DELTA_X = 1;

    if (DELTA_X !== 0 || DELTA_Y !== 0) {
      const newPos = pos.clone().add(new Vector2(DELTA_X, DELTA_Y));
      this.attemptToMove({
        container,
        newPos,
        currentPos: pos,
      });
    }

    const { canPlace, feedback } = this.checkCanPlace({
      container,
    });
    if (!canPlace) {
      if (feedback.isPlaceable) {
        this.addMessage(
          "Enemy territory is off-limits! Try again on our side.",
          {
            id: "enemy-territory",
          },
        );
      }

      if (feedback.itBlocksAvailablePath) {
        this.addMessage(
          "The enemies need a way through — you can't block every path!",
          {
            id: "only-available-path",
          },
        );
      }
    }

    if (game.keyboardHandler.wasPressed("z")) {
      this.addDefense({
        container,
        type: "simple",
      });
    } else if (game.keyboardHandler.wasPressed("x")) {
      this.addDefense({
        container,
        type: "rocket",
      });
    } else if (game.keyboardHandler.wasPressed("c")) {
      this.addDefense({
        container,
        type: "box",
      });
    }
  }

  public attemptToMove(args: {
    container: BattleFieldContainer;
    newPos: Vector2;
    currentPos?: Vector2;
  }) {
    const { container, newPos, currentPos: _currentPos } = args;
    const currentPos = _currentPos ?? this.pos;

    if (
      !(0 <= newPos.x && newPos.x < container.actorsGrid.length) ||
      !(0 <= newPos.y && newPos.y < (container.actorsGrid[0]?.length ?? 0))
    ) {
      return;
    }

    this.pos = newPos;

    container.actorsGrid[currentPos.x][currentPos.y].actors =
      container.actorsGrid[currentPos.x][currentPos.y].actors.filter(
        (actor) => actor !== this,
      );
    container.actorsGrid[this.pos.x][this.pos.y].actors.push(this);
  }

  public graphics(game: Game, delta: number, container: Container): void {
    if (!(container instanceof BattleFieldContainer)) {
      throw new Error("Cursor can only be used in a BattleFieldContainer");
    }

    const DRAG = 0.005;
    const factor = 1 - Math.exp(-DRAG * delta);

    this.mesh.position = new Vector3(
      this.mesh.position.x + (this.pos.x - this.mesh.position.x) * factor,
      this.mesh.position.y,
      this.mesh.position.z + (this.pos.y - this.mesh.position.z) * factor,
    );

    const cameraPosition = this.getCameraPosition();
    container.camera.position.set(
      cameraPosition.x,
      cameraPosition.y,
      cameraPosition.z,
    );

    container.camera.lookAt(this.mesh.position);

    const { canPlace } = this.checkCanPlace({
      container,
    });

    if (canPlace) {
      this.mesh.parts.forEach(
        (part) => (part.mesh.material = this.greenMaterial),
      );
    } else {
      this.mesh.parts.forEach(
        (part) => (part.mesh.material = this.redMaterial),
      );
    }

    this.renderTimeout += delta;
    if (this.renderTimeout > this.RENDER_TIMEOUT) game.triggerRender();
    this.renderTimeout = this.renderTimeout % this.RENDER_TIMEOUT;

    const ZOOM_MIN = 0.8;
    const ZOOM_MAX = 1.2;
    const ZOOM_DRAG = 0.0003;

    const mouseWheelDelta = game.mouseHandler.consumeWheel();
    if (mouseWheelDelta !== 0) {
      container.camera.zoom = Math.max(
        ZOOM_MIN,
        Math.min(
          container.camera.zoom + -mouseWheelDelta * ZOOM_DRAG,
          ZOOM_MAX,
        ),
      );
      container.camera.updateProjectionMatrix();
    }
  }

  public addDefense(args: {
    container: BattleFieldContainer;
    type: DefenseType;
  }): void {
    const { container, type } = args;

    const price = PRICE_CONFIG[type];
    if (container.coins < price) {
      container.messageQueue.addMessage("Not enough coins!");
      return;
    }

    const { canPlace } = this.checkCanPlace({
      container,
    });
    if (!canPlace) return;

    let mob: Actor;
    switch (type) {
      case "simple":
        mob = new SimpleGun({
          position: this.pos.clone(),
          objective: container.headQuarters,
        });
        break;
      case "rocket":
        mob = new RocketGun({
          position: this.pos.clone(),
          objective: container.headQuarters,
        });
        break;
      case "box":
        mob = new BoxActor({
          position: new Vector3(
            this.pos.x,
            WORLD_CONFIG.TILE_SIZE / 2,
            this.pos.y,
          ),
          size: WORLD_CONFIG.TILE_SIZE,
        });
        break;
    }

    container.coins -= price;
    container.addActor(mob, this.pos.clone());
    container.actorsGrid[this.pos.x][this.pos.y].isWalkable = false;

    this.notifyPathChangeEvent();
  }

  private checkCanPlace(args: { container: BattleFieldContainer }) {
    const { container } = args;

    const { isPlaceable, isWalkable } =
      container.actorsGrid[this.pos.x][this.pos.y];
    const isNotOccupied =
      container.actorsGrid[this.pos.x][this.pos.y].actors.find(
        (actor) => actor !== this,
      ) === undefined;

    const { canWalk } = PathfindingUtils.checkIfSpawnersCanWalkToHeadquarters(
      container.actorsGrid,
      container.spawners,
      container.headQuarters,
      this.pos.clone(),
    );
    const itBlocksAvailablePath = !canWalk;

    const canPlace =
      !isPlaceable && isWalkable && isNotOccupied && !itBlocksAvailablePath;

    return {
      canPlace,
      feedback: {
        isPlaceable,
        isWalkable,
        isNotOccupied,
        itBlocksAvailablePath,
      },
    };
  }

  private getCameraPosition() {
    const TOTAL_PAN_TIME = 2000;

    const _PAN_DELTA = 1 - Math.min(1, this.life / TOTAL_PAN_TIME);
    const PAN_DELTA = _PAN_DELTA * _PAN_DELTA;

    return new Vector3(
      this.mesh.position.x + WORLD_CONFIG.TILE_SIZE * 3 + PAN_DELTA * 6,
      this.mesh.position.y + WORLD_CONFIG.TILE_SIZE * 8 - PAN_DELTA * 2,
      this.mesh.position.z + WORLD_CONFIG.TILE_SIZE * 12 + PAN_DELTA * 24,
    );
  }
}
