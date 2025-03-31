import { Color, Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Composite, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { Mob } from "./mob";
import { HeadQuarters } from "../player";
import { CreateExplosionArgs } from "../particle-systems";

export interface TankArgs {
  pos: Vector2;
  objective: HeadQuarters;
  multiplier: number;
}

export class Tank extends Mob {
  public DEATH_EXPLOSION_CONFIG: CreateExplosionArgs = {
    colors: [new Color(COLOR_PALETTE.YELLOW), new Color(COLOR_PALETTE.DARK)],
    amount: 60,
    size: 0.8,
    force: 3,
  };

  public SPEED = 0.7;

  constructor(args: TankArgs) {
    const radius = WORLD_CONFIG.TILE_SIZE / 3;
    const height = WORLD_CONFIG.TILE_SIZE;

    const pos3 = new Vector3(args.pos.x, height / 2, args.pos.y);

    const composite = new Composite({
      center: pos3,
      parts: [
        {
          mesh: MeshUtils.createTorusKnotBlob({
            radius: radius,
            color: new Color(COLOR_PALETTE.YELLOW),
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createTorusKnotBlob({
            radius: (radius * 2) / 3,
            color: new Color(COLOR_PALETTE.ORANGE),
          }),
          offset: new Vector3(0, 0, 0),
        },
      ],
    });

    super({
      mesh: composite,
      battleSide: TBattleSide.ENEMY,
      pos: args.pos,
      radius: radius,
      health: 10,
      objective: args.objective,
      multiplier: args.multiplier,
    });
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);

    this.mesh.parts.forEach((part, index) => {
      const variation = index % 2 ? -1 : 1;

      part.mesh.rotation.y += (delta / 100) * variation;

      if (index === 1) {
        part.mesh.rotation.x += (delta / 200) * variation;
        part.mesh.rotation.z += (delta / 100) * variation;
      }
    });
  }
}
