import { Color, Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Composite } from "../game";
import { MeshUtils } from "../mesh";
import { HeadQuarters } from "../player";
import { Mob } from "./mob";
import { CreateExplosionArgs } from "../particle-systems";

export interface DropArgs {
  pos: Vector2;
  objective: HeadQuarters;
}

export class Drop extends Mob {
  public DEATH_EXPLOSION_CONFIG: CreateExplosionArgs = {
    colors: [
      new Color(COLOR_PALETTE.BLUE),
      new Color(COLOR_PALETTE.DARK_GREEN),
    ],
    amount: 50,
    size: 0.5,
    force: 2,
  };

  public SPEED: number = 1.5;

  constructor(args: DropArgs) {
    const radius = WORLD_CONFIG.TILE_SIZE / 5;
    const height = WORLD_CONFIG.TILE_SIZE * 0.75;

    const pos3 = new Vector3(args.pos.x, height / 2, args.pos.y);

    const composite = new Composite({
      center: pos3,
      parts: [
        {
          mesh: MeshUtils.createCylinder({
            radius: radius,
            height: height,
            color: new Color(COLOR_PALETTE.BLUE),
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
      health: 3,
      objective: args.objective,
    });
  }
}
