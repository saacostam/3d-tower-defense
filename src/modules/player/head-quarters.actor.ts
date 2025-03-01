import { Color, Mesh, PointLight, Vector2, Vector3 } from "three";
import { Actor, Composite, Container, Game } from "../game";
import { WOLRD_CONFIG } from "../config";
import { MeshUtils } from "../mesh";
import { COLOR_PALETTE } from "../colors";

export interface HeadQuartersArgs {
  position: Vector2;
}

export class HeadQuarters extends Actor {
  private gem: Mesh;
  public position: Vector2;

  constructor({ position }: HeadQuartersArgs) {
    const width = WOLRD_CONFIG.TILE_SIZE / 2;
    const height = WOLRD_CONFIG.TILE_SIZE * 2;
    const depth = WOLRD_CONFIG.TILE_SIZE / 2;

    const pos3 = new Vector3(position.x, WOLRD_CONFIG.TILE_SIZE, position.y);

    const gem = MeshUtils.createGem({
      size: height / 4,
      color: new Color(COLOR_PALETTE.LIGHT_GREEN),
      basicMaterial: true,
    });

    const mesh = new Composite({
      center: pos3,
      parts: [
        {
          mesh: MeshUtils.createBox({
            color: new Color(COLOR_PALETTE.DARK),
            depth: depth,
            height: height / 4,
            width: width,
          }),
          offset: new Vector3(0, (-height * 3) / 8, 0),
        },
        {
          mesh: gem,
          offset: new Vector3(0, (height * 2) / 8, 0),
        },
        {
          mesh: new PointLight(new Color(COLOR_PALETTE.LIGHT_GREEN), 20),
          offset: new Vector3(0, (height * 2) / 8, 0),
        },
      ],
    });

    super({ mesh });

    this.gem = gem;
    this.position = position;
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);

    this.gem.rotateX(delta / 1000);
    this.gem.rotateY(delta / 1900);
    this.gem.rotateZ(delta / 500);
  }
}
