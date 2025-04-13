import { Vector3 } from "three";
import { WORLD_CONFIG } from "../../config";
import { Actor } from "../../game";
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
      ...ModelingUtils.createGrassCompositeParts({
        offset: new Vector3(),
        size: args.size,
      }),
    ];

    super({ mesh });
  }
}
