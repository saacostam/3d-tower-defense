import { Color, Vector2, Vector3 } from "three";
import { Actor, Composite, Container, Game } from "../game";
import { WOLRD_CONFIG } from "../config";
import { MeshUtils } from "../mesh";
import { COLOR_PALETTE } from "../colors";

export interface CursorArgs {
  pos: Vector2;
}

export class Cursor extends Actor {
  declare mesh: Composite;

  private pos: Vector2;

  constructor(args: CursorArgs) {
    const createLine = (type: "horizontal" | "vertical") => {
      return MeshUtils.createBox({
        width:
          type === "horizontal"
            ? WOLRD_CONFIG.TILE_SIZE
            : WOLRD_CONFIG.TILE_SIZE / 16,
        height: WOLRD_CONFIG.TILE_SIZE / 8,
        depth:
          type === "vertical"
            ? WOLRD_CONFIG.TILE_SIZE
            : WOLRD_CONFIG.TILE_SIZE / 16,
        color: new Color(COLOR_PALETTE.RED),
      });
    };

    const pos3 = new Vector3(
      args.pos.x,
      WOLRD_CONFIG.TILE_SIZE / 16,
      args.pos.y,
    );

    const mesh = new Composite({
      center: pos3,
      parts: [
        {
          mesh: createLine("vertical"),
          offset: new Vector3((WOLRD_CONFIG.TILE_SIZE * 15) / 32, 0, 0),
        },
        {
          mesh: createLine("vertical"),
          offset: new Vector3(-(WOLRD_CONFIG.TILE_SIZE * 15) / 32, 0, 0),
        },
        {
          mesh: createLine("horizontal"),
          offset: new Vector3(0, 0, (WOLRD_CONFIG.TILE_SIZE * 15) / 32),
        },
        {
          mesh: createLine("horizontal"),
          offset: new Vector3(0, 0, -(WOLRD_CONFIG.TILE_SIZE * 15) / 32),
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

    let DELTA: Vector2 | null = null;
    if (game.keyboardHandler.wasPressed("ArrowUp")) DELTA = new Vector2(0, -1);
    else if (game.keyboardHandler.wasPressed("ArrowDown"))
      DELTA = new Vector2(0, 1);
    else if (game.keyboardHandler.wasPressed("ArrowLeft"))
      DELTA = new Vector2(-1, 0);
    else if (game.keyboardHandler.wasPressed("ArrowRight"))
      DELTA = new Vector2(1, 0);

    if (DELTA) {
      const newPos = pos.clone().add(DELTA);

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
  }

  public graphics(_: Game, delta: number, container: Container): void {
    const DRAG = 0.01;
    const factor = 1 - Math.exp(-DRAG * delta);

    this.mesh.position = new Vector3(
      this.mesh.position.x + (this.pos.x - this.mesh.position.x) * factor,
      this.mesh.position.y,
      this.mesh.position.z + (this.pos.y - this.mesh.position.z) * factor,
    );

    container.camera.position.set(
      this.mesh.position.x,
      this.mesh.position.y + WOLRD_CONFIG.TILE_SIZE * 10,
      this.mesh.position.z + WOLRD_CONFIG.TILE_SIZE * 8,
    );

    container.camera.lookAt(this.mesh.position);
  }
}
