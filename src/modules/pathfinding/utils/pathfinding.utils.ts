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
    return simpleGrid;
  },
};
