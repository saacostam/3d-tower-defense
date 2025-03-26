import { Color, Mesh, PointLight, Vector2, Vector3 } from "three";
import { Actor, Composite, Container, Game } from "../../game";
import { MeshUtils } from "../../mesh";
import { COLOR_PALETTE } from "../../colors";
import { ParticleManager } from "../../particle-systems";
import { WORLD_CONFIG } from "../../config";

export interface BonfireActorArgs {
  position: Vector3;
  size: number;
}

export class BonfireActor extends Actor {
  private light: PointLight;
  private flame: Mesh;

  private static INTENSITY = 5;

  private PARTICLE_TIMEOUT = 50;
  private particleTimeout = 0;

  private position: Vector3;

  public constructor(args: BonfireActorArgs) {
    const ligth = new PointLight(
      new Color(COLOR_PALETTE.ORANGE),
      BonfireActor.INTENSITY,
    );

    const flame = MeshUtils.createTorusKnotBlob({
      radius: args.size / 8,
      color: new Color(COLOR_PALETTE.ORANGE),
      basicMaterial: true,
    });

    const mesh = new Composite({
      center: args.position,
      parts: [
        {
          mesh: MeshUtils.createBox({
            width: args.size,
            height: args.size,
            depth: args.size,
            color: new Color(COLOR_PALETTE.DARK_GREEN),
          }),
          offset: new Vector3(0, 0, 0),
        },
        {
          mesh: ligth,
          offset: new Vector3(0, args.size / 2 + args.size / 2, 0),
        },
        {
          mesh: MeshUtils.createCylinder({
            radius: args.size / 4,
            height: args.size / 16,
            color: new Color(COLOR_PALETTE.WOOD),
          }),
          offset: new Vector3(0, args.size / 2 + args.size / 8, 0),
        },
        {
          mesh: flame,
          offset: new Vector3(0, args.size / 2 + args.size / 4, 0),
        },
      ],
    });

    super({ mesh });

    this.light = ligth;
    this.flame = flame;

    this.position = args.position;
  }

  public update(
    game: Game,
    delta: number,
    container: Container,
    pos: Vector2,
  ): void {
    super.update(game, delta, container, pos);

    this.light.intensity =
      BonfireActor.INTENSITY + Math.sin(Date.now() / 200) / 2;

    this.flame.rotation.y += 0.02 * delta;
    this.flame.rotation.z = Math.sin(Date.now() / 500);
    this.flame.rotation.x = Math.sin(Date.now() / 500);

    this.particleTimeout += delta;
    const particleCount = Math.floor(
      this.particleTimeout / this.PARTICLE_TIMEOUT,
    );
    this.particleTimeout = this.particleTimeout % this.PARTICLE_TIMEOUT;

    for (let i = 0; i < particleCount; i++) {
      ParticleManager.createSingleSmokeParticle(
        container,
        this.position
          .clone()
          .add(new Vector3(0, (WORLD_CONFIG.TILE_SIZE * 2) / 3, 0)),
        {
          colors: [
            new Color(COLOR_PALETTE.ORANGE),
            new Color(COLOR_PALETTE.YELLOW),
            new Color(COLOR_PALETTE.VOID),
          ],
          size: 1,
          force: 0.2,
          gravity: -0.000005,
        },
      );
    }
  }
}
