import { Color, Vector3 } from "three";
import { Composite } from "../../game";
import { MeshUtils } from "../../mesh";
import { WORLD_CONFIG } from "../../config";
import { COLOR_PALETTE } from "../../colors";

export const ModelingUtils = {
  createTreeComposite: (args: {
    position: Vector3;
    height: number;
  }): Composite => {
    const { height } = args;

    const mesh = new Composite({
      center: args.position,
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

    return mesh;
  },
};
