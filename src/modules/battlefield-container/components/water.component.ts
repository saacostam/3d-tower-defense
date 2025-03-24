import { Color, Vector3 } from "three";
import { Component, Composite } from "../../game";
import { MeshUtils } from "../../mesh";
import { WORLD_CONFIG } from "../../config";
import { COLOR_PALETTE } from "../../colors";

export interface WaterComponentArgs {
  position: Vector3;
  width: number;
  height: number;
}

export class WaterComponent extends Component {
  constructor(args: WaterComponentArgs) {
    const mesh = new Composite({
      center: args.position,
      parts: [
        {
          mesh: MeshUtils.createBox({
            width: args.width,
            height: WORLD_CONFIG.TILE_SIZE * 0.8,
            depth: args.height,
            color: new Color(COLOR_PALETTE.BLUE),
            transparent: {
              value: 0.5,
            },
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createBox({
            width: args.width,
            height: WORLD_CONFIG.TILE_SIZE,
            depth: args.height,
            color: new Color(COLOR_PALETTE.DIRT),
          }),
          offset: new Vector3(0, -WORLD_CONFIG.TILE_SIZE * 0.8, 0),
        },
      ],
    });

    mesh.position.set(args.position.x, args.position.y, args.position.z);

    super({
      mesh,
    });
  }
}
