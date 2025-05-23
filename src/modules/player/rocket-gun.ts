import { Color, Mesh, Vector2, Vector3 } from "three";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Composite, Container, Game } from "../game";
import { Gun } from "./gun";
import { HeadQuarters } from "./head-quarters.actor";
import { MeshUtils } from "../mesh";

export interface RocketGunArgs {
  position: Vector2;
  objective: HeadQuarters;
}

export class RocketGun extends Gun {
  private gem: Mesh;

  public SHOOT_TIMEOUT: number = 2000;

  public constructor(args: RocketGunArgs) {
    const pos3 = new Vector3(
      args.position.x,
      (WORLD_CONFIG.TILE_SIZE * 3) / 4,
      args.position.y,
    );

    const gem = MeshUtils.createGem({
      size: WORLD_CONFIG.TILE_SIZE / 4,
      color: new Color(COLOR_PALETTE.YELLOW),
    });

    const mesh = new Composite({
      center: pos3,
      parts: [
        {
          mesh: MeshUtils.createCone({
            radius: (WORLD_CONFIG.TILE_SIZE * 2) / 5,
            height:
              (WORLD_CONFIG.TILE_SIZE * 3) / 2 - WORLD_CONFIG.TILE_SIZE / 16,
            color: new Color(COLOR_PALETTE.DARK),
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createSphere({
            radius: WORLD_CONFIG.TILE_SIZE / 4,
            color: new Color(COLOR_PALETTE.RED),
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createSphere({
            radius: (WORLD_CONFIG.TILE_SIZE * 2) / 5,
            color: new Color(COLOR_PALETTE.RED),
          }),
          offset: new Vector3(0, -WORLD_CONFIG.TILE_SIZE / 2, 0),
        },
        {
          mesh: gem,
          offset: new Vector3(0, WORLD_CONFIG.TILE_SIZE, 0),
        },
      ],
    });

    super({
      mesh,
      position: args.position,
      bulletConfig: {
        sizeFactor: 4,
        speedFactor: 0.15,
        damage: 2,
        color: new Color(COLOR_PALETTE.YELLOW),
        trailSizeFactor: 1.2,
      },
      objective: args.objective,
    });

    this.gem = gem;
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);
    this.gem.rotateY((delta * this.shootTimeout) / this.SHOOT_TIMEOUT / 50);
  }
}
