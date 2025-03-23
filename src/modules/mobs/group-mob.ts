import { Color, Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WOLRD_CONFIG } from "../config";
import { Drop } from "./drop";
import { Composite, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { Mob } from "./mob";
import { HeadQuarters } from "../player";
import { CreateExplosionArgs } from "../particle-systems";

export interface GroupMobArgs {
  pos: Vector2;
  objective: HeadQuarters;
}

export class GroupMob extends Mob {
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

  constructor(args: GroupMobArgs) {
    const radius = WOLRD_CONFIG.TILE_SIZE / 3;
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
      health: 5,
      objective: args.objective,
    });
  }

  public beforeDeath(game: Game, container: Container, pos: Vector2): void {
    super.beforeDeath(game, container, pos);
    container.addActor(
      new Drop({
        pos: pos,
        objective: this.objective,
      }),
      pos,
    );
  }
}
