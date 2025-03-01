import { Vector2 } from "three";
import { Actor, GridCell } from "../../game";
import { Walker } from "../../mobs";
import { TBattleSide } from "../../battlefield-container";

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
  getBoundedUncheckedNeighbors: (
    x: number,
    y: number,
    grid: GridCell[][],
  ): Vector2[] => {
    const neighbors: Vector2[] = [];
    if (x > 0) neighbors.push(new Vector2(x - 1, y));
    if (x < grid.length - 1) neighbors.push(new Vector2(x + 1, y));
    if (y > 0) neighbors.push(new Vector2(x, y - 1));
    if (y < grid[0].length - 1) neighbors.push(new Vector2(x, y + 1));
    return neighbors;
  },
  getPositionHash(pos: Vector2): string {
    return `${pos.x},${pos.y}`;
  },
  findClosestEnemy: (
    grid: GridCell[][],
    origin: Vector2,
    myBattleSide: TBattleSide,
  ): {
    pos: Vector2;
    enemy: Actor;
  } | null => {
    const visited = new Set<string>();

    const queue: Vector2[] = [origin.clone()];
    visited.add(PathfindingUtils.getPositionHash(origin));
    let index = 0;

    while (index < queue.length) {
      const killSwitch = index > grid.length * grid[0].length * 2;
      if (killSwitch) return null;

      const pos = queue[index];
      index++;

      const neighbors = PathfindingUtils.getBoundedUncheckedNeighbors(
        pos.x,
        pos.y,
        grid,
      );
      for (const neighbor of neighbors) {
        if (!grid[neighbor.x][neighbor.y].isWalkable) continue;

        const enemy = grid[neighbor.x][neighbor.y].actors.find(
          (actor) =>
            actor instanceof Walker && actor.battleSide !== myBattleSide,
        );

        if (enemy) {
          return {
            pos: pos,
            enemy: enemy,
          };
        } else {
          if (!visited.has(PathfindingUtils.getPositionHash(neighbor))) {
            queue.push(neighbor);
            visited.add(PathfindingUtils.getPositionHash(neighbor));
          }
        }
      }
    }

    return null;
  },
};
