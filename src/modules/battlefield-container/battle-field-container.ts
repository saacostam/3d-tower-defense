import { AxesHelper, Color, HemisphereLight, Vector2, Vector3 } from "three";
import { COLOR_PALETTE } from "../colors";
import {
  MountainComponent,
  StarComponent,
  TreeComponent,
  WaterComponent,
} from "./components";
import { WORLD_CONFIG } from "../config";
import { DebugUtils } from "../debug";
import { Component, Container, Game } from "../game";
import { GroupMob, Tank, Walker } from "../mobs";
import { Cursor, HeadQuarters } from "../player";
import { WorldBuilderUtils } from "./utils";

const DEBUG = false;

export class BattleFieldContainer extends Container {
  private static SPAWN_TIMEOUT = 2_000;
  private spawnTimeout = 0;
  public headQuarters: HeadQuarters;

  private static TILE_SIZE = 1;

  public constructor() {
    super({ width: 15, height: 20 });
    this.headQuarters = new HeadQuarters({
      position: new Vector2(Math.floor(this.actorsGrid.length / 2), 1),
      health: 30,
    });
  }

  public onStart() {
    const width = this.actorsGrid.length;
    const height = this.actorsGrid[0]?.length ?? 0;

    this.scene.background = new Color(COLOR_PALETTE.VOID);

    this.scene.add(
      new HemisphereLight(
        new Color(COLOR_PALETTE.WHITE),
        new Color(COLOR_PALETTE.DARK_GREEN),
        1,
      ),
    );

    const worldComponents = WorldBuilderUtils.buildWorldComponents({
      width,
      height,
      tileSize: BattleFieldContainer.TILE_SIZE,
    });
    worldComponents.forEach((component) => this.addComponent(component));

    const pos = new Vector2(Math.floor(width / 2), Math.floor(height / 2));
    this.addActor(new Cursor({ pos }), pos);
    this.addActor(this.headQuarters, this.headQuarters.position);

    this.createStars({ width, height }).forEach((star) =>
      this.addComponent(star),
    );

    this.createMountains({ width, height }).forEach((mountain) =>
      this.addComponent(mountain),
    );

    this.createTrees({ width, height }).forEach((tree) =>
      this.addComponent(tree),
    );

    const water = new WaterComponent({
      width: width * 1.6,
      height: height * 1.6,
      position: new Vector3(width / 2, -WORLD_CONFIG.TILE_SIZE / 2, height / 2),
    });
    this.addComponent(water);

    // DEBUG
    const axesHelper = new AxesHelper(Math.max(width, height));
    this.scene.add(axesHelper);
  }

  public update(game: Game, delta: number): void {
    super.update(game, delta);

    const newSpawnTimeout = this.spawnTimeout + delta;
    const updates = Math.floor(
      newSpawnTimeout / BattleFieldContainer.SPAWN_TIMEOUT,
    );
    this.spawnTimeout = newSpawnTimeout % BattleFieldContainer.SPAWN_TIMEOUT;

    for (let i = 0; i < updates; i++) {
      const x = Math.floor(Math.random() * this.actorsGrid.length);
      const pos = new Vector2(x, this.actorsGrid[x].length - 1);

      const args = {
        pos,
        objective: this.headQuarters,
      };

      const rand = Math.random();
      if (Math.random() < 0.33) {
        this.addActor(new Walker(args), pos);
      } else if (rand < 0.66) {
        this.addActor(new Tank(args), pos);
      } else {
        this.addActor(new GroupMob(args), pos);
      }
    }

    if (DEBUG) DebugUtils.logMobCount(this.actorsGrid);
  }

  public createStars(args: { width: number; height: number }): Component[] {
    const { width, height } = args;

    const AMOUNT_OF_STARS = 200;

    const stars: Component[] = [];
    const centroid = new Vector3(width / 2, 0, height / 2);

    for (let i = 0; i < AMOUNT_OF_STARS; i++) {
      const L = 4;
      const R = 8;
      const distance =
        WORLD_CONFIG.TILE_SIZE * 8 * (L + Math.floor(Math.random() * (R - L)));

      const direction = new Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5,
      ).normalize();

      const pos = new Vector3(
        centroid.x + direction.x * distance,
        centroid.z + direction.z * distance,
        centroid.y + direction.y * distance,
      );

      stars.push(new StarComponent({ position: pos }));
    }

    return stars;
  }

  public createMountains(args: { width: number; height: number }): Component[] {
    const { width: _width, height: _height } = args;

    const mountains: Component[] = [];

    const width = _width * 1.5;
    const height = _height * 1.5;

    for (let i = 0; i < width; i++) {
      const mountain = new MountainComponent({
        position: new Vector2(i - width / 8, (-height * 3) / 16),
      });
      mountains.push(mountain);
    }

    for (let i = 0; i < width; i++) {
      const mountain = new MountainComponent({
        position: new Vector2(i - width / 8, (height * 7) / 8),
      });
      mountains.push(mountain);
    }

    for (let i = 0; i < height; i++) {
      const mountain = new MountainComponent({
        position: new Vector2((-width * 2) / 8, i - height / 8),
      });
      mountains.push(mountain);
    }

    for (let i = 0; i < height; i++) {
      const mountain = new MountainComponent({
        position: new Vector2((width * 7) / 8, i - height / 16),
      });
      mountains.push(mountain);
    }

    return mountains;
  }

  public createTrees(args: { width: number; height: number }): Component[] {
    const { width: _width, height: _height } = args;

    const trees: Component[] = [];

    const width = _width * 1.5;
    const height = _height * 1.5;

    for (let i = 0; i < width; i++) {
      const tree = new TreeComponent({
        position: new Vector2(
          i - width / 8,
          (-height * 3) / 16 + (Math.random() - 0.5) * WORLD_CONFIG.TILE_SIZE,
        ),
      });
      trees.push(tree);
    }

    for (let i = 0; i < width; i++) {
      const tree = new TreeComponent({
        position: new Vector2(
          i - width / 8,
          (height * 7) / 8 + (Math.random() - 0.5) * WORLD_CONFIG.TILE_SIZE,
        ),
      });
      trees.push(tree);
    }

    for (let i = 0; i < height; i++) {
      const tree = new TreeComponent({
        position: new Vector2(
          (-width * 2) / 8 + (Math.random() - 0.5) * WORLD_CONFIG.TILE_SIZE,
          i - height / 8,
        ),
      });
      trees.push(tree);
    }

    for (let i = 0; i < height; i++) {
      const tree = new TreeComponent({
        position: new Vector2(
          (width * 7) / 8 + (Math.random() - 0.5) * WORLD_CONFIG.TILE_SIZE,
          i - height / 16,
        ),
      });
      trees.push(tree);
    }

    return trees;
  }
}
