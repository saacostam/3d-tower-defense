import { Actor } from "../actor";

export interface GridCell {
  actors: Actor[];
  isWalkable: boolean;
  isPlaceable: boolean;
}
