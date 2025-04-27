import { Color, Vector2 } from "three";
import { COLOR_PALETTE } from "../../colors";
import { WORLD_CONFIG } from "../../config";
import { Component } from "../../game";
import { MeshUtils } from "../../mesh";

export interface MountainComponentArgs {
  position: Vector2;
}

export class MountainComponent extends Component {
  constructor(args: MountainComponentArgs) {
    const L = WORLD_CONFIG.TILE_SIZE / 2;
    const RANGE = WORLD_CONFIG.TILE_SIZE;

    const height = L + Math.random() * RANGE;

    const mesh = MeshUtils.createCone({
      radius: WORLD_CONFIG.TILE_SIZE * 3,
      height: height,
      color: new Color(COLOR_PALETTE.WHITE),
      texture: "/textures/snow.png",
    });

    mesh.position.set(args.position.x, height / 4, args.position.y);

    super({
      mesh,
    });
  }
}
