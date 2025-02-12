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

    const sourcePositions = new Map<string, IdentifiedPosition>();
    for (const source of sources) {
      sourcePositions.set(source.id, source);
    }

    for (let i = 0; i < grid.length; i++) {
      mapping[i] = Array(grid[i].length).fill(null);
    }

    const queue: IdentifiedPosition[] = [...sources];
    let index = 0;

    while (index < queue.length) {
      const { id, pos } = queue[index++];

      const neighbors = PathfindingUtils.getNeighbors(pos.x, pos.y, grid);
      for (const neighbor of neighbors) {
        if (mapping[neighbor.x][neighbor.y] === null) {
          mapping[neighbor.x][neighbor.y] = id;
          queue.push({ id, pos: neighbor });
        } else {
          const currentId = mapping[neighbor.x][neighbor.y];

          const currentDistance =
            sourcePositions.get(currentId)?.pos.distanceTo(pos) || Infinity;
          const newDistance =
            sourcePositions.get(id)?.pos.distanceTo(pos) || Infinity;

          if (newDistance < currentDistance) {
            mapping[neighbor.x][neighbor.y] = id;
          }
        }
      }
    }

    return mapping;
  },
};
