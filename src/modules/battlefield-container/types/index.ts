import { DefenseType } from "../../player";

export enum TBattleSide {
  ALLY = "ally",
  ENEMY = "enemy",
}

export interface DefenseDefinition {
  label: string;
  type: DefenseType;
}

export type AddDefense = (defenseType: DefenseType) => void;
