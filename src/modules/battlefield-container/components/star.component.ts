import { Color, Vector3 } from "three";
import { Component } from "../../game";
import { MeshUtils } from "../../mesh";
import { WORLD_CONFIG } from "../../config";
import { COLOR_PALETTE } from "../../colors";

export interface StarComponentArgs {
  position: Vector3;
}

export class StarComponent extends Component {
  constructor(args: StarComponentArgs) {
    const mesh = MeshUtils.createSphere({
      radius: WORLD_CONFIG.TILE_SIZE / 32,
      color: new Color(COLOR_PALETTE.WHITE),
      basicMaterial: true,
    });

    mesh.position.set(args.position.x, args.position.y, args.position.z);
    super({ mesh });
  }
}
