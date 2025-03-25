import { Vector2 } from "three";
import { LevelDefinition, LTT } from "../level.type";
import { WORLD_CONFIG } from "../../config";

export const LEVEL_1: LevelDefinition = {
  name: "Learning the Basics",
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
