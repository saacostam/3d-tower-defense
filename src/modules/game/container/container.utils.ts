import { GridCell } from "./container.types";

export const ContainerUtils = {
  createGrid(width: number, height: number): GridCell[][] {
    const grid: GridCell[][] = [];

    for (let x = 0; x < width; x++) {
      grid[x] = [];
      for (let y = 0; y < height; y++) {
        const gridCell: GridCell = { actors: [] };
        grid[x][y] = gridCell;
      }
    }

    return grid;
  },
};
