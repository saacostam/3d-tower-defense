import { Color, Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
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
  public SPEED: number = 0.9;

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
    const radius = WORLD_CONFIG.TILE_SIZE / 4;
    const height = WORLD_CONFIG.TILE_SIZE;

    const pos3 = new Vector3(
      args.pos.x,
      WORLD_CONFIG.TILE_SIZE / 2,
      args.pos.y,
    );

    const composite = new Composite({
      center: pos3,
      parts: [
        {
          mesh: MeshUtils.createGem({
            size: radius,
            color: new Color(COLOR_PALETTE.METAL),
          }),
          offset: new Vector3(0, height / 3, 0),
        },
        {
          mesh: MeshUtils.createTorus({
            radius: radius,
            color: new Color(COLOR_PALETTE.LIGHT_GREEN),
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createSphere({
            radius: radius / 2,
            color: new Color(COLOR_PALETTE.DARK),
          }),
          offset: new Vector3(0, -height / 3, 0),
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

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);

    this.mesh.parts.forEach((part, index) => {
      const multiplier = index % 2 ? -1 : 1;

      part.mesh.rotation.y += (delta / 200) * multiplier;

      if (index === 2) {
        part.mesh.rotation.x += (delta / 100) * multiplier;
        part.mesh.rotation.z += (delta / 50) * multiplier;
      }
    });
  }
}
