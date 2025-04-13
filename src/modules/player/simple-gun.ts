import { Color, Mesh, Vector2, Vector3 } from "three";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Composite, Container, Game } from "../game";
import { Gun } from "./gun";
import { HeadQuarters } from "./head-quarters.actor";
import { MeshUtils } from "../mesh";

export interface SimpleGunArgs {
  position: Vector2;
  objective: HeadQuarters;
}

export class SimpleGun extends Gun {
  private gem: Mesh;

  public constructor(args: SimpleGunArgs) {
    const pos3 = new Vector3(
      args.position.x,
      (WORLD_CONFIG.TILE_SIZE * 3) / 4,
      args.position.y,
    );

    const gem = MeshUtils.createGem({
      size: WORLD_CONFIG.TILE_SIZE / 4,
      color: new Color(COLOR_PALETTE.WHITE),
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
            color: new Color(COLOR_PALETTE.WHITE),
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createSphere({
            radius: (WORLD_CONFIG.TILE_SIZE * 2) / 5,
            color: new Color(COLOR_PALETTE.WHITE),
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
        sizeFactor: 1,
        speedFactor: 1,
        damage: 1,
        trailSizeFactor: 1,
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
