import { Color } from "three";

export interface CreateExplosionArgs {
  amount?: number;
  force?: number;
  size?: number;
  colors: Color | Color[];
}

export interface CreateSmokeArgs {
  colors: Color | Color[];
  force: number;
  size: number;
  gravity: number;
}
