import { Color, Mesh, MeshBasicMaterial, Vector2, Vector3 } from "three";
import { BattleFieldContainer, BoxActor } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Actor, Composite, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { SimpleGun } from "./simple-gun";
import { DefenseType } from "./shared-types";
import { RocketGun } from "./rocket-gun";

type UpdateCursorUIFeedbackCopy = (copy: string | null) => void;

export interface CursorArgs {
  pos: Vector2;
  updateCursorUIFeedbackCopy: UpdateCursorUIFeedbackCopy;
}

export class Cursor extends Actor {
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

  private updateCursorUIFeedbackCopy: UpdateCursorUIFeedbackCopy;

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
    this.updateCursorUIFeedbackCopy = args.updateCursorUIFeedbackCopy;
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
    if (!canPlace && feedback.isPlaceable) {
      this.updateCursorUIFeedbackCopy(
        "You cannot place defenses in enemy territory",
      );
    } else {
      this.updateCursorUIFeedbackCopy(null);
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

    container.camera.position.set(
      this.mesh.position.x + WORLD_CONFIG.TILE_SIZE * 3,
      this.mesh.position.y + WORLD_CONFIG.TILE_SIZE * 8,
      this.mesh.position.z + WORLD_CONFIG.TILE_SIZE * 12,
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

    const mouseWheelDelta = game.mouseHandler.consumeWheel();
    if (mouseWheelDelta !== 0) {
      container.camera.zoom = Math.max(
        0.8,
        Math.min(container.camera.zoom + -mouseWheelDelta * 0.0003, 1.2),
      );
      container.camera.updateProjectionMatrix();
    }
  }

  public addDefense(args: {
    container: BattleFieldContainer;
    type: DefenseType;
  }): void {
    const { container, type } = args;

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

    container.addActor(mob, this.pos.clone());
    container.actorsGrid[this.pos.x][this.pos.y].isWalkable = false;
  }

  private checkCanPlace(args: { container: BattleFieldContainer }) {
    const { container } = args;

    const { isPlaceable, isWalkable } =
      container.actorsGrid[this.pos.x][this.pos.y];
    const isNotOccupied =
      container.actorsGrid[this.pos.x][this.pos.y].actors.find(
        (actor) => actor !== this,
      ) === undefined;

    const canPlace = !isPlaceable && isWalkable && isNotOccupied;

    return {
      canPlace,
      feedback: {
        isPlaceable,
        isWalkable,
        isNotOccupied,
      },
    };
  }
}
