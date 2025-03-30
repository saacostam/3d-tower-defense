import { Color, Vector3 } from "three";
import { COLOR_PALETTE } from "../../colors";
import { Component, Composite, CompositePart } from "../../game";
import { MeshUtils } from "../../mesh";

export interface GrassComponentArgs {
  position: Vector3;
  size: number;
  color?: Color;
}

export class GrassComponent extends Component {
  constructor(args: GrassComponentArgs) {
    const createPlant = (): CompositePart[] => {
      const amount = Math.floor(Math.random() * 2) + 2;

      const cones = Array.from({ length: amount }, () =>
        MeshUtils.createCone({
          radius: args.size / 32,
          height: args.size / 4,
          color: new Color(COLOR_PALETTE.GREEN),
        }),
      );

      const ROTATION_LIMIT = 2;
      cones.forEach((cone) =>
        cone.rotateOnAxis(
          new Vector3(1, 0, 0),
          -Math.PI / (2 * ROTATION_LIMIT) +
            (Math.random() * Math.PI) / ROTATION_LIMIT,
        ),
      );

      const x = -args.size / 2 + Math.random() * args.size;
      const z = -args.size / 2 + Math.random() * args.size;

      return cones.map((cone) => ({
        mesh: cone,
        offset: new Vector3(x, (args.size * 19) / 32, z),
      }));
    };

    const createFlower = () => {
      const cone = MeshUtils.createCone({
        radius: args.size / 32,
        height: args.size / 2,
        color: new Color(COLOR_PALETTE.GREEN),
      });

      const core = MeshUtils.createSphere({
        radius: args.size / 32,
        color:
          Math.random() < 0.5
            ? new Color(COLOR_PALETTE.PINK)
            : new Color(COLOR_PALETTE.RED),
      });

      const x = -args.size / 2 + Math.random() * args.size;
      const z = -args.size / 2 + Math.random() * args.size;

      return [
        {
          mesh: cone,
          offset: new Vector3(x, (args.size * 10) / 16, z),
        },
        {
          mesh: core,
          offset: new Vector3(x, (args.size * 13) / 16, z),
        },
      ];
    };

    super({
      mesh: new Composite({
        center: args.position,
        parts: [
          {
            mesh: MeshUtils.createBox({
              width: args.size,
              height: args.size / 4,
              depth: args.size,
              color: args.color ?? new Color(COLOR_PALETTE.DARK_GREEN),
            }),
            offset: new Vector3(0, (args.size * 3) / 8, 0),
          },
          {
            mesh: MeshUtils.createBox({
              width: args.size,
              height: (args.size * 3) / 4,
              depth: args.size,
              color: new Color(COLOR_PALETTE.DIRT),
            }),
            offset: new Vector3(0, -args.size / 8, 0),
          },
          ...createPlant(),
          ...createPlant(),
          ...(Math.random() < 0.4 ? createFlower() : []),
        ],
      }),
    });
  }
}
