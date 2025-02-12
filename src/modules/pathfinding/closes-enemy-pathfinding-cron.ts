import { Vector2 } from "three";
import { GridCell } from "../game";
import { Walker } from "../mobs";
import { SimpleGun } from "../player";
import { PathfindingUtils } from "./utils";

export class ClosestEnemyPathfindingCron {
  public static map: Map<Vector2, Vector2> = new Map();

  update(grid: GridCell[][]) {
    const sources: Vector2[] = [];

    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        if (grid[x][y].actors.find((actor) => actor instanceof SimpleGun)) {
          sources.push(new Vector2(x, y));
        }
      }
    }

    const mapPositionToClosesSource = PathfindingUtils.runMultiSourceBFS(
      grid,
      sources,
    );

    const mapSourceToClosestEnemy: Map<Vector2, Vector2> = new Map();

    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        const enemy = grid[x][y].actors.find(
          (actor) => actor instanceof Walker,
        );
        if (enemy === undefined) continue;

        const currentClosestSource = mapPositionToClosesSource[x][y];
        const currentDistance = currentClosestSource.distanceTo(enemy.pos);

        const prevClosestEnemy =
          mapSourceToClosestEnemy.get(currentClosestSource);
        const prevDistance = prevClosestEnemy
          ? currentClosestSource.distanceTo(prevClosestEnemy)
          : Infinity;

        if (prevDistance > currentDistance) {
          mapSourceToClosestEnemy.set(currentClosestSource, new Vector2(x, y));
        }
      }
    }

    ClosestEnemyPathfindingCron.map = mapSourceToClosestEnemy;
  }
}
