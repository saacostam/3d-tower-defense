import { Vector2 } from "three";
import { GridCell } from "../game";
import { PathfindingUtils } from "./utils";
import { SimpleGun } from "../player";

export class CronDistance {
  private static singleton: CronDistance;

  public static distance: string[][] = [[]];

  constructor() {
    if (CronDistance.singleton) return CronDistance.singleton;
    CronDistance.singleton = this;
  }

  update(grid: GridCell[][]) {
    const sources: Vector2[] = [];

    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        if (grid[x][y].actors.find((actor) => actor instanceof SimpleGun)) {
          sources.push(new Vector2(x, y));
        }
      }
    }

    CronDistance.distance = PathfindingUtils.runMultiSourceBFS(grid, []);
  }
}
