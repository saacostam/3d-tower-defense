import { Color, Vector3 } from "three";
import { WORLD_CONFIG } from "../config";
import { Component, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { COLOR_PALETTE } from "../colors";

export interface ParticleArgs {
  position: Vector3;
  color?: Color;
  force?: number;
  size?: number;
}

export class Particle extends Component {
  private static TTL = 800;
  private ttl = 0;

  private velocity: Vector3;

  constructor(args: ParticleArgs) {
    const size = args?.size ?? 1;
    const DEFUALT_SIZE = WORLD_CONFIG.TILE_SIZE / 32;
    const mesh = MeshUtils.createSphere({
      radius: DEFUALT_SIZE * size,
      color: args?.color ?? new Color(COLOR_PALETTE.LIGHT_GREEN),
      basicMaterial: true,
    });

    super({
      mesh,
    });

    this.mesh.position.set(args.position.x, args.position.y, args.position.z);

    const force = args?.force ?? 1;
    const DEFAULT_FORCE = 0.002;
    this.velocity = new Vector3(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5,
    )
      .normalize()
      .multiplyScalar(force * DEFAULT_FORCE);
  }

  public update(game: Game, delta: number, container: Container): void {
    super.update(game, delta, container);

    this.velocity.y -= 0.00001 * delta;
    this.mesh.position.add(this.velocity.clone().multiplyScalar(delta));

    this.ttl += delta;
    if (this.ttl > Particle.TTL) this.kill();
  }
}
