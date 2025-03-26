import { Vector2 } from "three";

export const LevelUtils = {
  createHorizontalLine(args: { x1: number; x2: number; y: number }): Vector2[] {
    const { x1, x2, y } = args;
    const line: Vector2[] = [];
    for (let x = x1; x <= x2; x++) line.push(new Vector2(x, y));
    return line;
  },
  createVerticalLine(args: { y1: number; y2: number; x: number }): Vector2[] {
    const { y1, y2, x } = args;
    const line: Vector2[] = [];
    for (let y = y1; y <= y2; y++) line.push(new Vector2(x, y));
    return line;
  },
};
