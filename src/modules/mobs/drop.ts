import { Color, Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Composite, Container, Game } from "../game";
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
          mesh: MeshUtils.createGem({
            size: radius,
            color: new Color(COLOR_PALETTE.METAL),
          }),
          offset: new Vector3(0, height / 3, 0),
        },
        {
          mesh: MeshUtils.createTorus({
            radius: radius,
            color: new Color(COLOR_PALETTE.BLUE),
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
      health: 3,
      objective: args.objective,
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
      const multiplier = index % 2 ? -1 : 1;

      part.mesh.rotation.y += (delta / 200) * multiplier;

      if (index === 2) {
        part.mesh.rotation.x += (delta / 100) * multiplier;
        part.mesh.rotation.z += (delta / 50) * multiplier;
      }
    });
  }
}
