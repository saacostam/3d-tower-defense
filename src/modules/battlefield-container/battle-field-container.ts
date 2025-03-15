import { AxesHelper, Color, HemisphereLight, Vector2 } from "three";
import { COLOR_PALETTE } from "../colors";
import { Container, Game } from "../game";
import { Walker } from "../mobs";
import { Cursor, HeadQuarters } from "../player";
import { WorldBuilderUtils } from "./utils";

export class BattleFieldContainer extends Container {
  private static SPAWN_TIMEOUT = 3000;
  private spawnTimeout = 0;
  private headQuarters: HeadQuarters;

  private static TILE_SIZE = 1;

  public constructor() {
    super({ width: 8, height: 8 });
    this.headQuarters = new HeadQuarters({
      position: new Vector2(1, 1),
      health: 100,
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
        3,
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
      const pos = new Vector2(
        this.actorsGrid.length - 1,
        this.actorsGrid[0].length - 1,
      );

      const newWalker = new Walker({
        pos,
        objective: this.headQuarters,
      });
      this.addActor(newWalker, pos);
    }
  }
}
