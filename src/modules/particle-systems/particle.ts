import {
  Color,
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
  Vector3,
} from "three";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Component, Container, Game } from "../game";
import { MeshUtils } from "../mesh";

export interface ParticleArgs {
  position: Vector3;
  color?: Color;
  force?: number;
  size?: number;
  gravity?: number;
  shouldFadeout?: boolean;
}

export class Particle extends Component {
  declare public mesh: Mesh<SphereGeometry, MeshStandardMaterial>;

  private static TTL = 800;
  private ttl = 0;

  private velocity: Vector3;
  private gravity: number;
  private shouldFadeout: boolean;

  constructor(args: ParticleArgs) {
    const size = args?.size ?? 1;
    const DEFAULT_SIZE = WORLD_CONFIG.TILE_SIZE / 32;
    const mesh = MeshUtils.createSphere({
      radius: DEFAULT_SIZE * size,
      color: args?.color ?? new Color(COLOR_PALETTE.LIGHT_GREEN),
      basicMaterial: true,
      transparent: {
        value: 1,
      },
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

    this.gravity = args?.gravity ?? 0.00001;
    this.shouldFadeout = !!args.shouldFadeout;
  }

  public update(game: Game, delta: number, container: Container): void {
    super.update(game, delta, container);

    this.velocity.y -= this.gravity * delta;
    this.mesh.position.add(this.velocity.clone().multiplyScalar(delta));

    this.ttl += delta;
    if (this.shouldFadeout)
      this.mesh.material.opacity = 1 - this.ttl / Particle.TTL;
    if (this.ttl > Particle.TTL) this.kill();
  }
}
