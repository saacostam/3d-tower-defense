import { Color, Vector2, Vector3 } from "three";
import { COLOR_PALETTE } from "../../colors";
import { WORLD_CONFIG } from "../../config";
import { Component, Composite } from "../../game";
import { MeshUtils } from "../../mesh";

export interface TreeComponentArgs {
  position: Vector2;
}

export class TreeComponent extends Component {
  constructor(args: TreeComponentArgs) {
    const height = WORLD_CONFIG.TILE_SIZE * 2.5;

    const mesh = new Composite({
      center: new Vector3(
        args.position.x,
        height / 2 + (Math.random() - 0.5),
        args.position.y,
      ),
      parts: [
        {
          mesh: MeshUtils.createCylinder({
            radius: WORLD_CONFIG.TILE_SIZE / 8,
            height: height,
            color: new Color(COLOR_PALETTE.WOOD),
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createCone({
            radius: WORLD_CONFIG.TILE_SIZE / 2,
            height: height - WORLD_CONFIG.TILE_SIZE / 2,
            color: new Color(COLOR_PALETTE.DARK_GREEN),
          }),
          offset: new Vector3(0, (height * 4) / 16, 0),
        },
        {
          mesh: MeshUtils.createCone({
            radius: WORLD_CONFIG.TILE_SIZE / 2,
            height: height - (1.5 * WORLD_CONFIG.TILE_SIZE) / 2,
            color: new Color(COLOR_PALETTE.DARK_GREEN),
          }),
          offset: new Vector3(0, (height * 6) / 16, 0),
        },
        {
          mesh: MeshUtils.createCone({
            radius: WORLD_CONFIG.TILE_SIZE / 2,
            height: height - (2 * WORLD_CONFIG.TILE_SIZE) / 2,
            color: new Color(COLOR_PALETTE.WHITE),
          }),
          offset: new Vector3(0, (height * 8) / 16, 0),
        },
        {
          mesh: MeshUtils.createCone({
            radius: WORLD_CONFIG.TILE_SIZE / 2,
            height: height - (2.5 * WORLD_CONFIG.TILE_SIZE) / 2,
            color: new Color(COLOR_PALETTE.DARK_GREEN),
          }),
          offset: new Vector3(0, (height * 8) / 16, 0),
        },
      ],
    });

    super({ mesh });
  }
}
