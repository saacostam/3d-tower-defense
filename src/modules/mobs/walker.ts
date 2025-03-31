import { Color, Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Composite, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { Mob } from "./mob";
import { HeadQuarters } from "../player";

export interface WalkerArgs {
  pos: Vector2;
  objective: HeadQuarters;
  multiplier: number;
}

export class Walker extends Mob {
  constructor(args: WalkerArgs) {
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
            color: new Color(COLOR_PALETTE.WHITE),
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createSphere({
            radius: radius,
            color: new Color(COLOR_PALETTE.DARK),
          }),
          offset: new Vector3(0, -height / 3, 0),
        },
        {
          mesh: MeshUtils.createSphere({
            radius: radius,
            color: new Color(COLOR_PALETTE.RED),
          }),
          offset: new Vector3(0, height / 3, 0),
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

      part.mesh.rotation.y += (delta / 500) * variation;
      part.mesh.rotation.z += (delta / 200) * variation;
      part.mesh.rotation.x += (delta / 100) * variation;
    });
  }
}
