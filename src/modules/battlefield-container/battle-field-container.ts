import { AxesHelper, Color, Vector2 } from "three";
import { Container, Game } from "../game";
import { WorldBuilderUtils } from "./utils";
import { COLOR_PALETTE } from "../colors";
import { Walker } from "../mobs";

export class BattleFieldContainer extends Container {
  private static SPAWN_TIMEOUT = 1500;
  private spawnTimeout = 0;

  private static TILE_SIZE = 1;

  public constructor() {
    super({ width: 20, height: 20 });
  }

  public onStart() {
    const width = this.actorsGrid.length;
    const height = this.actorsGrid[0]?.length ?? 0;

    const worldComponents = WorldBuilderUtils.buildWorldComponents({
      width,
      height,
      tileSize: BattleFieldContainer.TILE_SIZE,
    });

    worldComponents.forEach((component) => this.addComponent(component));

    this.scene.background = new Color(COLOR_PALETTE.BLUE);

    this.scene.add(new AxesHelper(width));

    this.camera.position.set(
      (width * BattleFieldContainer.TILE_SIZE) / 2,
      8,
      height * BattleFieldContainer.TILE_SIZE * 1.5,
    );

    this.camera.lookAt(
      (width * BattleFieldContainer.TILE_SIZE) / 2,
      0,
      (height * BattleFieldContainer.TILE_SIZE) / 2,
    );
  }

  public update(game: Game, delta: number): void {
    super.update(game, delta);

    const newSpawnTimeout = this.spawnTimeout + delta;
    const updates = Math.floor(
      newSpawnTimeout / BattleFieldContainer.SPAWN_TIMEOUT,
    );
    this.spawnTimeout = newSpawnTimeout % BattleFieldContainer.SPAWN_TIMEOUT;

    for (let i = 0; i < updates; i++) {
      const pos = new Vector2(
        Math.floor(Math.random() * this.actorsGrid.length),
        Math.floor(Math.random() * this.actorsGrid[0].length),
      );

      const newWalker = new Walker({
        pos,
      });
      this.addActor(newWalker, pos);
    }
  }
}
