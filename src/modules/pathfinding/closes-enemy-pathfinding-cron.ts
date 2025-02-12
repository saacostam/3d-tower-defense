import { Vector2 } from "three";
import { GridCell } from "../game";
import { PathfindingUtils } from "./utils";
import { SimpleGun } from "../player";

export class ClosestEnemyPathfindingCron {
  public static distance: string[][] = [[]];

  update(grid: GridCell[][]) {
    const sources: Vector2[] = [];

    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        if (grid[x][y].actors.find((actor) => actor instanceof SimpleGun)) {
          sources.push(new Vector2(x, y));
        }
      }
    }

    ClosestEnemyPathfindingCron.distance = PathfindingUtils.runMultiSourceBFS(
      grid,
      [],
    );
  }
}
