import { Color, Vector2, Vector3 } from "three";
import { Actor, Composite, Container, Game } from "../game";
import { WOLRD_CONFIG } from "../config";
import { MeshUtils } from "../mesh";
import { COLOR_PALETTE } from "../colors";

export interface WalkerArgs {
  pos: Vector2;
  objective: Vector2;
}

export class Walker extends Actor {
  private pos: Vector2;
  private objective: Vector2;

  constructor(args: WalkerArgs) {
    const radius = WOLRD_CONFIG.TILE_SIZE / 4;
    const height = WOLRD_CONFIG.TILE_SIZE;

    const pos3 = new Vector3(
      args.pos.x,
      WOLRD_CONFIG.TILE_SIZE / 2,
      args.pos.y,
    );

    const composite = new Composite({
      center: pos3,
      parts: [
        {
          mesh: MeshUtils.createCylinder({
            radius: radius,
            height: height,
            color: new Color(COLOR_PALETTE.DARK),
          }),
          offset: new Vector3(0, 0, 0),
        },
      ],
    });

    super({
      mesh: composite,
    });

    this.pos = args.pos;
    this.objective = args.objective;
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);
  }
}
