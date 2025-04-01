import { Color, Vector3 } from "three";
import { Component, Composite } from "../../game";
import { MeshUtils } from "../../mesh";
import { WORLD_CONFIG } from "../../config";
import { COLOR_PALETTE } from "../../colors";

export interface PlacementZoneDivisionComponentArgs {
  linePosition: number;
  height: number;
  width: number;
}

export class PlacementZoneDivisionComponent extends Component {
  constructor(args: PlacementZoneDivisionComponentArgs) {
    const { linePosition, height, width } = args;

    const origin = new Vector3(
      width / 2 - WORLD_CONFIG.TILE_SIZE / 2,
      0,
      linePosition - WORLD_CONFIG.TILE_SIZE / 2,
    );

    const subSegmentHeight = height - origin.z - WORLD_CONFIG.TILE_SIZE / 2;

    const mesh = new Composite({
      center: origin,
      parts: [
        {
          mesh: MeshUtils.createBox({
            width: width,
            height: WORLD_CONFIG.TILE_SIZE / 16,
            depth: WORLD_CONFIG.TILE_SIZE / 16,
            color: new Color(COLOR_PALETTE.PINK),
            transparent: {
              value: 0.5,
            },
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createBox({
            width: width,
            height: WORLD_CONFIG.TILE_SIZE / 16,
            depth: WORLD_CONFIG.TILE_SIZE / 16,
            color: new Color(COLOR_PALETTE.PINK),
            transparent: {
              value: 0.5,
            },
          }),
          offset: new Vector3(0, 0, subSegmentHeight),
        },
        {
          mesh: MeshUtils.createBox({
            width: WORLD_CONFIG.TILE_SIZE / 16,
            height: WORLD_CONFIG.TILE_SIZE / 16,
            depth: subSegmentHeight,
            color: new Color(COLOR_PALETTE.PINK),
            transparent: {
              value: 0.5,
            },
          }),
          offset: new Vector3(-width / 2, 0, subSegmentHeight / 2),
        },
        {
          mesh: MeshUtils.createBox({
            width: WORLD_CONFIG.TILE_SIZE / 16,
            height: WORLD_CONFIG.TILE_SIZE / 16,
            depth: subSegmentHeight,
            color: new Color(COLOR_PALETTE.PINK),
            transparent: {
              value: 0.5,
            },
          }),
          offset: new Vector3(width / 2, 0, subSegmentHeight / 2),
        },
        {
          mesh: MeshUtils.createBox({
            width: width,
            height: WORLD_CONFIG.TILE_SIZE / 16,
            depth: subSegmentHeight,
            basicMaterial: true,
            color: new Color(COLOR_PALETTE.PINK),
            transparent: {
              value: 0.1,
            },
          }),
          offset: new Vector3(
            0,
            0,
            (height - origin.z) / 2 - WORLD_CONFIG.TILE_SIZE / 4,
          ),
        },
      ],
    });

    super({ mesh });
  }
}
