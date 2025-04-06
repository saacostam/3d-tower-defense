import { Color, Mesh, Vector2, Vector3 } from "three";
import { BattleFieldContainer } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Component, Composite, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { MouseUtils } from "../mouse";

const OUT_OF_VIEW = 2000;

export class HoverCursor extends Component {
  declare mesh: Composite<Mesh>;

  public constructor() {
    const mesh = new Composite({
      center: new Vector3(0, OUT_OF_VIEW, 0),
      parts: [
        {
          mesh: MeshUtils.createBox({
            color: new Color(COLOR_PALETTE.BLUE),
            depth: WORLD_CONFIG.TILE_SIZE,
            height: WORLD_CONFIG.TILE_SIZE / 8,
            width: WORLD_CONFIG.TILE_SIZE,
            basicMaterial: true,
          }),
          offset: new Vector3(0, 0, 0),
        },
      ],
    });

    super({ mesh: mesh });
  }

  public update(game: Game, _delta: number, container: Container): void {
    super.update(game, _delta, container);

    if (!(container instanceof BattleFieldContainer)) {
      throw new Error("Cursor can only be used in a BattleFieldContainer");
    }

    const data = MouseUtils.projectMousePosition({
      camera: container.camera,
      mousePosition: new Vector2(
        game.mouseHandler.position.x,
        game.mouseHandler.position.y,
      ),
    });

    const position = new Vector2(
      Math.floor(data.x + WORLD_CONFIG.TILE_SIZE / 2),
      Math.floor(data.y + WORLD_CONFIG.TILE_SIZE / 2),
    );

    let withinBounds = true;
    if (
      !(
        0 <= position.x &&
        position.x <= WORLD_CONFIG.WIDTH - 1 &&
        0 <= position.y &&
        position.y <= WORLD_CONFIG.HEIGHT - 1
      )
    ) {
      withinBounds = false;
    }

    this.mesh.position = new Vector3(
      position.x * WORLD_CONFIG.TILE_SIZE,
      withinBounds ? 0 : OUT_OF_VIEW,
      position.y * WORLD_CONFIG.TILE_SIZE,
    );

    if (game.mouseHandler.consumeClick()) {
      if (withinBounds) {
        container.cursor.attemptToMove({
          container,
          newPos: position,
        });
      }
    }
  }
}
