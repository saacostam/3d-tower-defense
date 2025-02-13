import { Color, HemisphereLight, Vector2 } from "three";
import { COLOR_PALETTE } from "../colors";
import { Container, Game } from "../game";
import { Walker } from "../mobs";
import { Cursor } from "../player";
import { WorldBuilderUtils } from "./utils";
import { ClosestEnemyPathfindingCron } from "../pathfinding";

export class BattleFieldContainer extends Container {
  private static SPAWN_TIMEOUT = 3000;
  private spawnTimeout = 0;

  private static TILE_SIZE = 1;

  public closestEnemyPathfindingCron: ClosestEnemyPathfindingCron =
    new ClosestEnemyPathfindingCron();

  private static PATHFINDING_TIMEOUT = 250;
  private pathfindingTimeout = 0;

  public constructor() {
    super({ width: 10, height: 10 });
  }

  public onStart() {
    const width = this.actorsGrid.length;
    const height = this.actorsGrid[0]?.length ?? 0;

    this.scene.background = new Color(COLOR_PALETTE.BLUE);

    this.scene.add(
      new HemisphereLight(
        new Color(COLOR_PALETTE.WHITE),
        new Color(COLOR_PALETTE.DARK_GREEN),
        6,
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

    const newPathfindingTimeout = this.pathfindingTimeout + delta;
    this.pathfindingTimeout =
      newPathfindingTimeout % BattleFieldContainer.PATHFINDING_TIMEOUT;

    if (newPathfindingTimeout > BattleFieldContainer.PATHFINDING_TIMEOUT) {
      this.closestEnemyPathfindingCron.update(this.actorsGrid);
    }
  }
}
