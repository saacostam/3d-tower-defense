import { Color, PointLight, Vector2, Vector3 } from "three";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Actor, Composite, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { BattleFieldContainer } from "../battlefield-container";
import { Tank } from "./tank";
import { Walker } from "./walker";
import { GroupMob } from "./group-mob";

export interface SpawnerArgs {
  position: Vector2;
  multiplier: number;
}

export class Spawner extends Actor {
  private static SPAWN_TIMEOUT = 3_000;
  private spawnTimeout = 0;

  private multiplier: number;

  constructor(args: SpawnerArgs) {
    const height = WORLD_CONFIG.TILE_SIZE;

    const mesh = new Composite({
      center: new Vector3(args.position.x, height / 2, args.position.y),
      parts: [
        {
          mesh: MeshUtils.createBox({
            color: new Color(COLOR_PALETTE.DARK),
            depth: WORLD_CONFIG.TILE_SIZE,
            height: height,
            width: WORLD_CONFIG.TILE_SIZE,
          }),
          offset: new Vector3(0, -WORLD_CONFIG.TILE_SIZE, 0),
        },
        {
          mesh: new PointLight(new Color(COLOR_PALETTE.RED), 5),
          offset: new Vector3(0, -WORLD_CONFIG.TILE_SIZE / 8, 0),
        },
      ],
    });

    super({ mesh });

    this.multiplier = args.multiplier;
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);

    if (!(container instanceof BattleFieldContainer)) {
      throw new Error("Spawner can only be used in a BattleFieldContainer");
    }

    const newSpawnTimeout = this.spawnTimeout + delta;
    const updates = Math.floor(newSpawnTimeout / Spawner.SPAWN_TIMEOUT);

    for (let i = 0; i < updates; i++) {
      const args = {
        pos,
        objective: container.headQuarters,
        multiplier: this.multiplier,
      };

      const rand = Math.random();
      if (Math.random() < 0.33) {
        container.addActor(new Walker(args), pos);
      } else if (rand < 0.66) {
        container.addActor(new Tank(args), pos);
      } else {
        container.addActor(new GroupMob(args), pos);
      }
    }

    this.spawnTimeout = newSpawnTimeout % Spawner.SPAWN_TIMEOUT;
  }
}
