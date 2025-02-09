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
      15,
      (height * BattleFieldContainer.TILE_SIZE * 15) / 8,
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
        this.actorsGrid.length - 1,
        this.actorsGrid[0].length - 1,
      );

      const newWalker = new Walker({
        pos,
        objective: new Vector2(0, 0),
      });
      this.addActor(newWalker, pos);
    }
  }
}
