import { Color } from "three";

export interface CreateExplosionArgs {
  amount?: number;
  force?: number;
  size?: number;
  colors: Color | Color[];
}
