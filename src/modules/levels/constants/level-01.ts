import { Vector2 } from "three";
import { LevelDefinition, LTT } from "../level.type";
import { WORLD_CONFIG } from "../../config";
import { LevelUtils } from "../utils";

const createHorizontalWaterStream = (y: number) => [
  ...LevelUtils.createHorizontalLine({
    x1: 0,
    x2: WORLD_CONFIG.WIDTH - 1,
    y: y,
  })
    .map((pos) => {
      return {
        type: LTT.RV,
        position: pos,
      };
    })
    .filter(({ position }) => !(4 <= position.x && position.x <= 8)),
  ...LevelUtils.createHorizontalLine({
    x1: 4,
    x2: 8,
    y: y,
  }).map((pos) => {
    return {
      type: LTT.BR,
      position: pos,
    };
  }),
];

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
    ...LevelUtils.createVerticalLine({
      y1: 8,
      y2: 12,
      x: 0,
    })
      .map((pos) => createHorizontalWaterStream(pos.y))
      .flat(),
  ],
};
