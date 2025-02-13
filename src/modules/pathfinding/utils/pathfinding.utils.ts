import { Vector2 } from "three";
import { GridCell } from "../../game";

export const PathfindingUtils = {
  createSimpleGrid: (grid: GridCell[][]): number[][] => {
    const simpleGrid: number[][] = [];
    for (let x = 0; x < grid.length; x++) {
      const row: number[] = [];
      for (let y = 0; y < grid[x].length; y++) {
        row.push(grid[x][y].isWalkable ? 0 : 1);
      }
      simpleGrid.push(row);
    }

    const numRows = simpleGrid.length;
    const numCols = simpleGrid[0]?.length ?? 0;

    const transposedGrid = Array.from({ length: numCols }, (_, colIndex) =>
      Array.from(
        { length: numRows },
        (_, rowIndex) => simpleGrid[rowIndex][colIndex],
      ),
    );

    return transposedGrid;
  },
  getNeighbors: (x: number, y: number, grid: GridCell[][]): Vector2[] => {
    const neighbors: Vector2[] = [];
    if (x > 0) neighbors.push(new Vector2(x - 1, y));
    if (x < grid.length - 1) neighbors.push(new Vector2(x + 1, y));
    if (y > 0) neighbors.push(new Vector2(x, y - 1));
    if (y < grid[0].length - 1) neighbors.push(new Vector2(x, y + 1));
    return neighbors;
  },
  runMultiSourceBFS: (
    grid: GridCell[][],
    sources: Vector2[],
  ): (Vector2 | null)[][] => {
    const mapping: (Vector2 | null)[][] = [];

    for (let i = 0; i < grid.length; i++) {
      mapping[i] = Array(grid[i].length).fill(null);
    }

    for (const source of sources) {
      mapping[source.x][source.y] = source.clone();
    }

    const queue: { pos: Vector2; closest: Vector2 }[] = sources.map(
      (source) => ({ pos: source, closest: source }),
    );
    let index = 0;

    while (
      index < queue.length &&
      queue.length <= grid.length * grid[0].length * 2
    ) {
      const { pos, closest } = queue[index++];

      const neighbors = PathfindingUtils.getNeighbors(pos.x, pos.y, grid);
      for (const neighbor of neighbors) {
        const currClosest = mapping[neighbor.x][neighbor.y];

        if (currClosest === null) {
          mapping[neighbor.x][neighbor.y] = closest.clone();
          queue.push({ pos: neighbor, closest });
        } else {
          if (closest.distanceTo(pos) < currClosest.distanceTo(pos)) {
            mapping[neighbor.x][neighbor.y] = closest.clone();
            queue.push({ pos: neighbor, closest });
          }
        }
      }
    }

    return mapping;
  },
};
