import { Vector2 } from "three";
import { GridCell } from "../game";
import { Walker } from "../mobs";
import { SimpleGun } from "../player";
import { PathfindingUtils } from "./utils";

export class ClosestEnemyPathfindingCron {
  public map: Map<String, Vector2> = new Map();

  update(grid: GridCell[][]) {
    const sources: Vector2[] = [];

    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        if (grid[x][y].actors.find((actor) => actor instanceof SimpleGun)) {
          sources.push(new Vector2(x, y));
        }
      }
    }

    const mapPositionToClosestSource = PathfindingUtils.runMultiSourceBFS(
      grid,
      sources,
    );

    const mapSourceToClosestEnemy: Map<String, Vector2> = new Map();

    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        const enemy = grid[x][y].actors.find(
          (actor) => actor instanceof Walker,
        );
        if (enemy === undefined) continue;

        const currentClosestSource = mapPositionToClosestSource[x][y];
        const currentDistance = currentClosestSource
          ? currentClosestSource.distanceTo(enemy.pos)
          : 0;

        const prevClosestEnemy = currentClosestSource
          ? mapSourceToClosestEnemy.get(
              currentClosestSource.toArray().join("."),
            )
          : null;
        const prevDistance =
          prevClosestEnemy && currentClosestSource
            ? currentClosestSource.distanceTo(prevClosestEnemy)
            : Infinity;

        if (prevDistance > currentDistance && currentClosestSource) {
          mapSourceToClosestEnemy.set(
            currentClosestSource.toArray().join("."),
            new Vector2(x, y),
          );
        }
      }
    }

    this.map = mapSourceToClosestEnemy;
  }
}
