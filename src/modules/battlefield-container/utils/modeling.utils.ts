import { Color, Object3D, Vector3 } from "three";
import { WORLD_CONFIG } from "../../config";
import { COLOR_PALETTE } from "../../colors";
import { Composite, CompositePart } from "../../game";
import { MeshUtils } from "../../mesh";

export const BattleFieldContainerModelingUtils = {
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
            texture: "./textures/wood.png",
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createCone({
            radius: WORLD_CONFIG.TILE_SIZE / 2,
            height: height - WORLD_CONFIG.TILE_SIZE / 2,
            color: new Color(COLOR_PALETTE.DARK_GREEN),
            texture: "./textures/leaf.png",
          }),
          offset: new Vector3(0, (height * 4) / 16, 0),
        },
        {
          mesh: MeshUtils.createCone({
            radius: WORLD_CONFIG.TILE_SIZE / 2,
            height: height - (1.5 * WORLD_CONFIG.TILE_SIZE) / 2,
            color: new Color(COLOR_PALETTE.DARK_GREEN),
            texture: "./textures/leaf.png",
          }),
          offset: new Vector3(0, (height * 6) / 16, 0),
        },
        {
          mesh: MeshUtils.createCone({
            radius: WORLD_CONFIG.TILE_SIZE / 2,
            height: height - (2 * WORLD_CONFIG.TILE_SIZE) / 2,
            color: new Color(COLOR_PALETTE.WHITE),
            texture: "./textures/snow.png",
          }),
          offset: new Vector3(0, (height * 8) / 16, 0),
        },
        {
          mesh: MeshUtils.createCone({
            radius: WORLD_CONFIG.TILE_SIZE / 2,
            height: height - (2.5 * WORLD_CONFIG.TILE_SIZE) / 2,
            color: new Color(COLOR_PALETTE.DARK_GREEN),
            texture: "./textures/leaf.png",
          }),
          offset: new Vector3(0, (height * 8) / 16, 0),
        },
      ],
    });

    return mesh;
  },
  createGrassCompositeParts: (args: {
    offset: Vector3;
    size: number;
  }): CompositePart<Object3D>[] => {
    return [
      {
        mesh: MeshUtils.createBox({
          width: args.size,
          height: args.size / 4,
          depth: args.size,
          color: new Color(COLOR_PALETTE.DARK_GREEN),
          texture: "./textures/grass.png",
        }),
        offset: new Vector3(
          args.offset.x,
          args.offset.y - (args.size * 9) / 8,
          args.offset.z,
        ),
      },
      {
        mesh: MeshUtils.createBox({
          width: args.size,
          height: (args.size * 3) / 4,
          depth: args.size,
          color: new Color(COLOR_PALETTE.DIRT),
        }),
        offset: new Vector3(
          args.offset.x,
          args.offset.y - (args.size * 13) / 8,
          args.offset.z,
        ),
      },
    ];
  },
};
