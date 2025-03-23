import { Color, Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WOLRD_CONFIG } from "../config";
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
      new Color(COLOR_PALETTE.LIGHT_GREEN),
      new Color(COLOR_PALETTE.GREEN),
      new Color(COLOR_PALETTE.DARK_GREEN),
    ],
    amount: 50,
    size: 0.5,
    force: 2,
  };

  constructor(args: DropArgs) {
    const radius = WOLRD_CONFIG.TILE_SIZE / 4;
    const height = WOLRD_CONFIG.TILE_SIZE / 2;

    const pos3 = new Vector3(
      args.pos.x,
      WOLRD_CONFIG.TILE_SIZE / 4,
      args.pos.y,
    );

    const composite = new Composite({
      center: pos3,
      parts: [
        {
          mesh: MeshUtils.createCylinder({
            radius: radius,
            height: height,
            color: new Color(COLOR_PALETTE.LIGHT_GREEN),
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
    });
  }
}
