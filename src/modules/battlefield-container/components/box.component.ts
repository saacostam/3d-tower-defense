import { Color, Vector3 } from "three";
import { Component, Composite } from "../../game";
import { MeshUtils } from "../../mesh";
import { COLOR_PALETTE } from "../../colors";

export interface BoxComponentArgs {
  position: Vector3;
  size: number;
}

export class BoxComponent extends Component {
  constructor(args: BoxComponentArgs) {
    const composite = new Composite({
      center: args.position,
      parts: [
        {
          mesh: MeshUtils.createCube({
            size: args.size,
            color: new Color(COLOR_PALETTE.BOX),
          }),
          offset: new Vector3(0, 0, 0),
        },
      ],
    });

    super({
      mesh: composite,
    });
  }
}
