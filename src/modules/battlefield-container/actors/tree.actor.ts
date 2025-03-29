import { Color, Vector3 } from "three";
import { COLOR_PALETTE } from "../../colors";
import { WORLD_CONFIG } from "../../config";
import { Actor } from "../../game";
import { MeshUtils } from "../../mesh";
import { ModelingUtils } from "../utils";

export interface TreeActorArgs {
  position: Vector3;
  size: number;
}

export class TreeActor extends Actor {
  constructor(args: TreeActorArgs) {
    const height = WORLD_CONFIG.TILE_SIZE * 2;

    const mesh = ModelingUtils.createTreeComposite({
      position: args.position.clone().add(new Vector3(0, height * 0.75, 0)),
      height: height,
    });

    mesh.parts = [
      ...mesh.parts,
      {
        mesh: MeshUtils.createBox({
          width: args.size,
          height: args.size / 4,
          depth: args.size,
          color: new Color(COLOR_PALETTE.DARK_GREEN),
        }),
        offset: new Vector3(0, -(args.size * 9) / 8, 0),
      },
      {
        mesh: MeshUtils.createBox({
          width: args.size,
          height: (args.size * 3) / 4,
          depth: args.size,
          color: new Color(COLOR_PALETTE.DIRT),
        }),
        offset: new Vector3(0, -(args.size * 12) / 8, 0),
      },
    ];

    super({ mesh });
  }
}
