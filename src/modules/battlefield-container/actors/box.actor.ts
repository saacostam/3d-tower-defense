import { Color, Vector3 } from "three";
import { COLOR_PALETTE } from "../../colors";
import { Actor, Composite } from "../../game";
import { MeshUtils } from "../../mesh";

export interface BoxActorArgs {
  position: Vector3;
  size: number;
}

export class BoxActor extends Actor {
  constructor(args: BoxActorArgs) {
    const composite = new Composite({
      center: args.position,
      parts: [
        {
          mesh: MeshUtils.createBox({
            width: args.size,
            height: args.size / 4,
            depth: args.size,
            color: new Color(COLOR_PALETTE.DARK),
          }),
          offset: new Vector3(0, (-args.size * 3) / 8, 0),
        },
        {
          mesh: MeshUtils.createBox({
            width: (args.size * 4) / 5,
            height: args.size / 2,
            depth: (args.size * 4) / 5,
            color: new Color(COLOR_PALETTE.WHITE),
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: MeshUtils.createBox({
            width: args.size,
            height: args.size / 4,
            depth: args.size,
            color: new Color(COLOR_PALETTE.DARK),
          }),
          offset: new Vector3(0, (args.size * 3) / 8, 0),
        },
      ],
    });

    super({
      mesh: composite,
    });
  }
}
