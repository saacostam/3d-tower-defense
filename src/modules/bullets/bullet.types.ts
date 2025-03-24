import { Color } from "three";

export interface BulletConfig {
  sizeFactor: number;
  speedFactor: number;
  damage: number;
  color?: Color;
}
