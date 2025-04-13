import { Vector2 } from "three";
import { TBattleSide } from "../../battlefield-container";
import { Actor, GridCell } from "../../game";
import { Mob, Spawner } from "../../mobs";
import { HeadQuarters } from "../../player";
import { AStarFinder } from "astar-typescript";

export type V2 = number[];

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
    const neighbors: Vector2[] = [
      new Vector2(x + 1, y + 1),
      new Vector2(x + 1, y),
      new Vector2(x + 1, y - 1),

      new Vector2(x, y + 1),
      new Vector2(x, y - 1),

      new Vector2(x - 1, y + 1),
      new Vector2(x - 1, y),
      new Vector2(x - 1, y - 1),
    ];

    return neighbors.filter((neighbor) => {
      const { x, y } = neighbor;
      return 0 <= x && x < grid.length && 0 <= y && y < (grid[0]?.length ?? 0);
    });
  },
  getPositionHash(pos: Vector2): string {
    return `${pos.x},${pos.y}`;
  },
  findClosestEnemy: (args: {
    grid: GridCell[][];
    origin: Vector2;
    myBattleSide: TBattleSide;
    range: number;
    objective: Vector2;
  }): {
    pos: Vector2;
    enemy: Actor;
  } | null => {
    const { grid, origin, myBattleSide, range: _range, objective } = args;

    const range = Math.max(1, _range);

    const visited = new Set<string>();

    const queue: Vector2[] = [origin.clone()];
    visited.add(PathfindingUtils.getPositionHash(origin));
    let index = 0;

    const possibleEnemies: {
      pos: Vector2;
      enemy: Actor;
    }[] = [];

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
          (actor) => actor instanceof Mob && actor.battleSide !== myBattleSide,
        );

        if (enemy) {
          possibleEnemies.push({ pos: pos, enemy });
        } else {
          if (
            !visited.has(PathfindingUtils.getPositionHash(neighbor)) &&
            neighbor.distanceTo(origin) <= range
          ) {
            queue.push(neighbor);
            visited.add(PathfindingUtils.getPositionHash(neighbor));
          }
        }
      }
    }

    if (possibleEnemies.length === 0) return null;

    // Find the closest to objective
    let closest = possibleEnemies[0];
    possibleEnemies.forEach((enemy) => {
      if (enemy.pos.distanceTo(objective) < closest.pos.distanceTo(objective)) {
        closest = enemy;
      }
    });

    return closest;
  },
  checkIfSpawnersCanWalkToHeadquarters: (
    grid: GridCell[][],
    spawners: Spawner[],
    headQuarters: HeadQuarters,
    positionToCheck?: Vector2,
  ) => {
    const paths: V2[][] = [];

    let canWalk = true;
    for (const spawner of spawners) {
      const simpleGrid = PathfindingUtils.createSimpleGrid(grid);

      if (positionToCheck) simpleGrid[positionToCheck.y][positionToCheck.x] = 1;

      const pathFinder = new AStarFinder({
        grid: {
          matrix: simpleGrid,
        },
        diagonalAllowed: true,
      });

      const path = pathFinder.findPath(spawner.position, headQuarters.position);

      if (path.length === 0) {
        canWalk = false;
      }

      paths.push(path);
    }

    return {
      canWalk,
      paths,
    };
  },
};
