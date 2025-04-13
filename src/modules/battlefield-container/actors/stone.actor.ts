import { Color, Vector2, Vector3 } from "three";
import { COLOR_PALETTE } from "../../colors";
import { Actor, Composite } from "../../game";
import { MeshUtils } from "../../mesh";
import { ModelingUtils } from "../utils";

export interface StoneArgs {
  position: Vector3;
  size: number;
}

export class StoneActor extends Actor {
  constructor(args: StoneArgs) {
    const height = args.size * (0.25 + Math.random() * 0.25);
    const radius = args.size * (3 / 16 + (Math.random() * 1) / 16);

    const amountOfPeebles = 5 + Math.floor(Math.random() * 3);
    const createPeebleOrFungiCompositePart = () => {
      const normalizedDirection = new Vector2(
        Math.random() - 0.5,
        Math.random() - 0.5,
      ).normalize();

      const offset = new Vector3(
        (normalizedDirection.x * args.size) / 3,
        args.size / 2 + radius / 4,
        (normalizedDirection.y * args.size) / 3,
      );

      const type = Math.random() > 0.25 ? "Peeble" : "Fungi";

      return type === "Peeble"
        ? {
            mesh: MeshUtils.createDodecahedron({
              radius: radius / 2,
              color: new Color(COLOR_PALETTE.GRAY),
            }),
            offset: offset.clone(),
          }
        : {
            mesh: MeshUtils.createCone({
              radius: radius / 2,
              height: radius / 2,
              color: new Color(COLOR_PALETTE.BOX),
            }),
            offset: offset.clone(),
          };
    };

    const mesh = new Composite({
      center: args.position.clone(),
      parts: [
        ...ModelingUtils.createGrassCompositeParts({
          offset: new Vector3(0, (args.size * 3) / 2, 0),
          size: args.size,
        }),
        {
          mesh: MeshUtils.createCapsule({
            radius: radius,
            height: height,
            color: new Color(COLOR_PALETTE.GRAY),
          }),
          offset: new Vector3(0, args.size / 2 + height / 2, 0),
        },
        ...Array.from({ length: amountOfPeebles }, () =>
          createPeebleOrFungiCompositePart(),
        ),
      ],
    });

    super({ mesh });
  }
}
