import { Vector2 } from "three";

export enum LTT {
  BR = "Bridge",
  BF = "Bonfire",
  BSH = "Bush",
  GRS = "Grass",
  HQ = "HeadQuarters",
  RV = "River",
  SPW = "Spawner",
  STN = "Stone",
  TR = "Tree",
  WTR = "Water",
}

export interface LevelDefinition {
  name: string;
  difficultyMultiplier: number;
  tiles: {
    type: LTT;
    position: Vector2;
  }[];
  zones:
    | {
        type: "disabled";
      }
    | {
        type: "enabled";
        line: number;
      };
}
