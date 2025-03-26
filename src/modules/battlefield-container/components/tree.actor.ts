import { Vector2, Vector3 } from "three";
import { WORLD_CONFIG } from "../../config";
import { Component } from "../../game";
import { ModelingUtils } from "../utils";

export interface TreeComponentArgs {
  position: Vector2;
}

export class TreeComponent extends Component {
  constructor(args: TreeComponentArgs) {
    const height = WORLD_CONFIG.TILE_SIZE * 2.5;

    const mesh = ModelingUtils.createTreeComposite({
      position: new Vector3(
        args.position.x,
        height / 2 + (Math.random() - 0.5),
        args.position.y,
      ),
      height,
    });

    super({ mesh });
  }
}
