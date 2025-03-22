import { Color, Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WOLRD_CONFIG } from "../config";
import { Composite } from "../game";
import { MeshUtils } from "../mesh";
import { HeadQuarters } from "../player";
import { Mob } from "./mob";

export interface WalkerArgs {
  pos: Vector2;
  objective: HeadQuarters;
}

export class Walker extends Mob {
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
            color: new Color(COLOR_PALETTE.RED),
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
