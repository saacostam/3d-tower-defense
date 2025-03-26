import { Color, Vector3 } from "three";
import { Component, Composite } from "../../game";
import { MeshUtils } from "../../mesh";
import { COLOR_PALETTE } from "../../colors";

export interface BridgeComponentArgs {
  position: Vector3;
  size: number;
}

export class BridgeComponent extends Component {
  constructor(args: BridgeComponentArgs) {
    const platformColor = new Color(COLOR_PALETTE.DARK);
    const beamsColor = new Color(COLOR_PALETTE.WHITE);

    const mesh = new Composite({
      center: args.position,
      parts: [
        {
          mesh: MeshUtils.createBox({
            width: args.size,
            height: args.size / 8,
            depth: args.size,
            color: platformColor.clone(),
          }),
          offset: new Vector3(0, (args.size * 7) / 16, 0),
        },
        {
          mesh: MeshUtils.createBox({
            width: args.size / 8,
            height: args.size * 1.1,
            depth: args.size / 8,
            color: beamsColor.clone(),
          }),
          offset: new Vector3(args.size / 2, 0, args.size / 2),
        },
        {
          mesh: MeshUtils.createBox({
            width: args.size / 8,
            height: args.size * 1.1,
            depth: args.size / 8,
            color: beamsColor.clone(),
          }),
          offset: new Vector3(-args.size / 2, 0, args.size / 2),
        },
        {
          mesh: MeshUtils.createBox({
            width: args.size / 8,
            height: args.size * 1.1,
            depth: args.size / 8,
            color: beamsColor.clone(),
          }),
          offset: new Vector3(args.size / 2, 0, -args.size / 2),
        },
        {
          mesh: MeshUtils.createBox({
            width: args.size / 8,
            height: args.size * 1.1,
            depth: args.size / 8,
            color: beamsColor.clone(),
          }),
          offset: new Vector3(-args.size / 2, 0, -args.size / 2),
        },
      ],
    });

    super({ mesh });
  }
}
