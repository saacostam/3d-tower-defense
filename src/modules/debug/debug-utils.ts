import { GridCell } from "../game";

export const DebugUtils = {
  logMobCount: (actorsGrid: GridCell[][]) => {
    let mobCount = 0;
    let dropCount = 0;

    for (let x = 0; x < actorsGrid.length; x++) {
      for (let y = 0; y < actorsGrid[x].length; y++) {
        const cell = actorsGrid[x][y];
        for (let i = 0; i < cell.actors.length; i++) {
          const actor = cell.actors[i];
          if (actor.constructor.name === "GroupMob") mobCount++;
          else if (actor.constructor.name === "Drop") dropCount++;
        }
      }
    }

    console.debug({
      mobCount,
      dropCount,
    });
  },
};
