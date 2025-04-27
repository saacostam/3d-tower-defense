import { Color, Vector3 } from "three";
import { COLOR_PALETTE } from "../../colors";
import { Actor, Composite } from "../../game";
import { MeshUtils } from "../../mesh";
import { BattleFieldContainerModelingUtils } from "../utils";

export interface BushActorArgs {
  position: Vector3;
  size: number;
}

export class BushActor extends Actor {
  constructor(args: BushActorArgs) {
    const mainBushRadius = args.size / 2;
    const mainBushVerticalOffset = args.size;

    const randomAngle = Math.random() * Math.PI * 2;

    const amountOfAppendages = 3 + Math.floor(Math.random() * 3);
    const createBushAppendage = (i: number) => {
      const radius = args.size / 4;
      const angle = i * ((Math.PI * 2) / amountOfAppendages) + randomAngle;

      const normalizedDirection = new Vector3(
        Math.cos(angle),
        Math.random() - 0.5,
        Math.sin(angle),
      ).normalize();

      const delta = mainBushRadius - radius / 2;

      const offset = normalizedDirection.multiplyScalar(delta);

      return {
        mesh: MeshUtils.createDodecahedron({
          radius: radius,
          color: new Color(COLOR_PALETTE.DARK_GREEN),
          texture: "./textures/leaf.png",
        }),
        offset: offset.clone().add(new Vector3(0, mainBushVerticalOffset, 0)),
      };
    };

    const mesh = new Composite({
      center: args.position,
      parts: [
        ...BattleFieldContainerModelingUtils.createGrassCompositeParts({
          offset: new Vector3(0, (args.size * 3) / 2, 0),
          size: args.size,
        }),
        {
          mesh: MeshUtils.createTorusKnotBlob({
            radius: mainBushRadius / 3,
            color: new Color(COLOR_PALETTE.WOOD),
          }),
          offset: new Vector3(0, mainBushVerticalOffset / 2, 0),
        },
        {
          mesh: MeshUtils.createDodecahedron({
            radius: mainBushRadius,
            color: new Color(COLOR_PALETTE.DARK_GREEN),
            texture: "./textures/leaf.png",
          }),
          offset: new Vector3(0, mainBushVerticalOffset, 0),
        },
        ...Array.from({ length: amountOfAppendages }, (_, index) =>
          createBushAppendage(index),
        ),
      ],
    });

    super({ mesh });
  }
}
