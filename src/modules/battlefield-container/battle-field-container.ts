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
import { Cursor, HeadQuarters } from "../player";
import { WorldBuilderUtils } from "./utils";
import { LEVELS } from "../levels";

const DEBUG = false;

export class BattleFieldContainer extends Container {
  public headQuarters: HeadQuarters;

  private static TILE_SIZE = 1;

  public constructor() {
    super({ width: WORLD_CONFIG.WIDTH, height: WORLD_CONFIG.HEIGHT });
    this.headQuarters = new HeadQuarters({
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

    const worldBuildingCommands = WorldBuilderUtils.buildLevel({
      width,
      height,
      tileSize: BattleFieldContainer.TILE_SIZE,
      level: LEVELS[0],
      headQuarters: this.headQuarters,
    });
    worldBuildingCommands.forEach((command) => {
      if (command.type === "component") {
        this.addComponent(command.component);
      } else if (command.type === "actor") {
        this.addActor(command.actor, command.position);
        if (command.static)
          this.actorsGrid[command.position.x][command.position.y].isWalkable =
            false;
      } else if (command.type === "static") {
        this.actorsGrid[command.position.x][command.position.y].isWalkable =
          false;
      } else {
        throw new Error(`Unknown command type: ${(command as any)?.type}`);
      }
    });

    const pos = new Vector2(Math.floor(width / 2), Math.floor(height / 2));
    this.addActor(new Cursor({ pos }), pos);

    this.createSceneryStars({ width, height }).forEach((star) =>
      this.addComponent(star),
    );

    this.createSceneryMountains({ width, height }).forEach((mountain) =>
      this.addComponent(mountain),
    );

    this.createSceneryTrees({ width, height }).forEach((tree) =>
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
    if (DEBUG) DebugUtils.logMobCount(this.actorsGrid);
  }

  public createSceneryStars(args: {
    width: number;
    height: number;
  }): Component[] {
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

  public createSceneryMountains(args: {
    width: number;
    height: number;
  }): Component[] {
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

  public createSceneryTrees(args: {
    width: number;
    height: number;
  }): Component[] {
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
