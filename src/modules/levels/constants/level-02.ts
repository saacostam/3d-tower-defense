import { Vector2 } from "three";
import { WORLD_CONFIG } from "../../config";
import { LevelDefinition, LTT } from "../level.type";

export const LEVEL_2: LevelDefinition = {
  name: "In Progress",
  difficultyMultiplier: 1,
  tiles: [
    {
      type: LTT.HQ,
      position: new Vector2(Math.floor(WORLD_CONFIG.WIDTH / 2), 1),
    },
    {
      type: LTT.SPW,
      position: new Vector2(1, 18),
    },
    {
      type: LTT.SPW,
      position: new Vector2(11, 18),
    },
  ],
};
