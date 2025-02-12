import { Vector2 } from "three";
import { GridCell } from "../../game";

export interface IdentifiedPosition {
  id: string;
  pos: Vector2;
}

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
    sources: IdentifiedPosition[],
  ): string[][] => {
    const mapping: string[][] = [];

    const DEFAULT_VALUE = Date.now().toString();
    for (let i = 0; i < grid.length; i++) {
      mapping[i] = [];
      for (let j = 0; j < grid[i].length; j++) {
        mapping[i][j] = DEFAULT_VALUE;
      }
    }

    const queue: IdentifiedPosition[] = [];
    for (const source of sources)
      queue.push({ id: source.id, pos: source.pos });

    while (queue.length > 0) {
      const { id, pos } = queue.shift()!;
      const neighbors = PathfindingUtils.getNeighbors(pos.x, pos.y, grid);
      for (const neighbor of neighbors) {
        if (mapping[neighbor.x][neighbor.y] === DEFAULT_VALUE) {
          mapping[neighbor.x][neighbor.y] = id;
          queue.push({ id, pos: neighbor });
        } else {
          const currentId = mapping[neighbor.x][neighbor.y];
          const currentDistance =
            sources
              .find((source) => source.id === currentId)
              ?.pos.distanceTo(pos) || Infinity;

          const newDistance =
            sources.find((source) => source.id === id)?.pos.distanceTo(pos) ||
            Infinity;

          if (newDistance < currentDistance) {
            mapping[neighbor.x][neighbor.y] = id;
          }
        }
      }
    }

    return mapping;
  },
};
