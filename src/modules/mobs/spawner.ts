import { Color, PointLight, Vector2, Vector3 } from "three";
import { BattleFieldContainer } from "../battlefield-container";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Actor, Composite, Container, Game } from "../game";
import { GroupMob } from "./group-mob";
import { ProgressBar } from "../indicators";
import { MeshUtils } from "../mesh";
import { Tank } from "./tank";
import { Walker } from "./walker";
import { SoundEffect } from "../audio-manager";

export interface SpawnerArgs {
  position: Vector2;
  multiplier: number;
}

const INITIAL_TIMEOUT = 3_000;

export class Spawner extends Actor {
  private life: number;

  private static SPAWN_TIMEOUT = INITIAL_TIMEOUT;
  private spawnTimeout = 0;

  private multiplier: number;

  public position: Vector2;

  private progressBar: ProgressBar;

  private static LIGHT_INTENSITY: number = 15;
  private light: PointLight;
  private theoricalLightIntensity: number = Spawner.LIGHT_INTENSITY;

  constructor(args: SpawnerArgs) {
    const height = WORLD_CONFIG.TILE_SIZE;

    const light = new PointLight(
      new Color(COLOR_PALETTE.RED),
      Spawner.LIGHT_INTENSITY,
    );

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
          mesh: light,
          offset: new Vector3(0, -WORLD_CONFIG.TILE_SIZE / 8, 0),
        },
      ],
    });

    super({ mesh });

    this.multiplier = args.multiplier;
    this.position = args.position;

    this.progressBar = new ProgressBar({
      total: Spawner.SPAWN_TIMEOUT,
      value: this.spawnTimeout,
      position: this.mesh.position,
      offset: new Vector3(0, -WORLD_CONFIG.TILE_SIZE / 4, 0),
      heightFactor: 0.5,
      widthFactor: 0.6,
    });

    this.light = light;

    this.life = 0;
  }

  public afterSpawn(container: Container, pos: Vector2): void {
    super.afterSpawn(container, pos);
    this.progressBar.start(container);
  }

  public beforeDeath(game: Game, container: Container, pos: Vector2): void {
    super.beforeDeath(game, container, pos);
    this.progressBar.end(container);
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

    if (container.isPaused) return;

    this.life += delta;

    const newSpawnTimeout = this.spawnTimeout + delta;

    const CURRENT_TOTAL_TIMEOUT = Math.max(
      500,
      Spawner.SPAWN_TIMEOUT - this.life / 50,
    );
    const updates = Math.floor(newSpawnTimeout / CURRENT_TOTAL_TIMEOUT);

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

      game.audioManager.playEffect(SoundEffect.SPAWN);
    }

    this.spawnTimeout = newSpawnTimeout % CURRENT_TOTAL_TIMEOUT;

    this.theoricalLightIntensity =
      (this.spawnTimeout / CURRENT_TOTAL_TIMEOUT) * Spawner.LIGHT_INTENSITY;
    this.progressBar.update(this.spawnTimeout, this.mesh.position.clone());
  }

  public graphics(
    _game: Game,
    delta: number,
    _container: Container,
    _pos: Vector2,
  ): void {
    super.graphics(_game, delta, _container, _pos);

    const DRAG = 0.005;
    const factor = 1 - Math.exp(-DRAG * delta);

    this.light.intensity =
      this.light.intensity +
      (this.theoricalLightIntensity - this.light.intensity) * factor;
  }
}
