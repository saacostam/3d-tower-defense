import { Color, Mesh, MeshBasicMaterial, Vector2, Vector3 } from "three";
import { BattleFieldContainer, BoxActor } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Actor, Composite, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { SimpleGun } from "./simple-gun";
import { RocketGun } from "./rocket-gun";

export interface CursorArgs {
  pos: Vector2;
}

export class Cursor extends Actor {
  declare mesh: Composite<Mesh>;

  private pos: Vector2;
  private canPlace: boolean = false;

  private greenMaterial = new MeshBasicMaterial({
    color: new Color(COLOR_PALETTE.LIGHT_GREEN),
  });
  private redMaterial = new MeshBasicMaterial({
    color: new Color(COLOR_PALETTE.RED),
  });

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

      if (
        !(0 <= newPos.x && newPos.x < container.actorsGrid.length) ||
        !(0 <= newPos.y && newPos.y < (container.actorsGrid[0]?.length ?? 0))
      ) {
        return;
      }

      this.pos = newPos;

      container.actorsGrid[pos.x][pos.y].actors = container.actorsGrid[pos.x][
        pos.y
      ].actors.filter((actor) => actor !== this);
      container.actorsGrid[this.pos.x][this.pos.y].actors.push(this);
    }

    this.canPlace =
      container.actorsGrid[pos.x][pos.y].isWalkable &&
      container.actorsGrid[pos.x][pos.y].actors.find(
        (actor) => actor !== this,
      ) === undefined;

    if (this.canPlace) {
      let actorToBeAdded: Actor | undefined = undefined;

      if (game.keyboardHandler.wasPressed("z")) {
        actorToBeAdded = new SimpleGun({
          position: pos.clone(),
          objective: container.headQuarters,
        });
      } else if (game.keyboardHandler.wasPressed("x")) {
        actorToBeAdded = new RocketGun({
          position: pos.clone(),
          objective: container.headQuarters,
        });
      } else if (game.keyboardHandler.wasPressed("c")) {
        actorToBeAdded = new BoxActor({
          position: new Vector3(pos.x, WORLD_CONFIG.TILE_SIZE / 2, pos.y),
          size: WORLD_CONFIG.TILE_SIZE,
        });
      }

      if (actorToBeAdded !== undefined) {
        container.addActor(actorToBeAdded, pos.clone());
        container.actorsGrid[pos.x][pos.y].isWalkable = false;
      }
    }
  }

  public graphics(_: Game, delta: number, container: Container): void {
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

    if (this.canPlace) {
      this.mesh.parts.forEach(
        (part) => (part.mesh.material = this.greenMaterial),
      );
    } else {
      this.mesh.parts.forEach(
        (part) => (part.mesh.material = this.redMaterial),
      );
    }
  }
}
