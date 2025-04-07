import { Color, Mesh, Vector3 } from "three";
import { COLOR_PALETTE } from "../colors";
import { WORLD_CONFIG } from "../config";
import { Component, Container, Game } from "../game";
import { MeshUtils } from "../mesh";

export interface BulletParticleComponentArgs {
  position: Vector3;
  sizeFactor: number;
  color?: Color;
}

export class BulletParticleComponent extends Component {
  declare mesh: Mesh;

  private static TOTAL_LIFE_TIME = 1000;
  private lifeTime = 0;

  private position: Vector3;
  private velocity: Vector3;

  constructor({ position, color, sizeFactor }: BulletParticleComponentArgs) {
    const radius = (WORLD_CONFIG.TILE_SIZE / 72) * sizeFactor;

    const mesh = MeshUtils.createSphere({
      radius,
      color: color === undefined ? new Color(COLOR_PALETTE.WHITE) : color,
      basicMaterial: true,
    });

    mesh.position.set(position.x, position.y, position.z);

    super({
      mesh,
    });

    this.position = position;

    // Velocity defines the direction of the particle
    this.velocity = new Vector3(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5,
    )
      .normalize()
      .multiplyScalar(WORLD_CONFIG.TILE_SIZE * 0.00005);
  }

  public update(game: Game, delta: number, container: Container): void {
    super.update(game, delta, container);

    this.velocity.y -= 0.000005 * delta; // Gravity

    this.position = this.position.add(
      this.velocity.clone().multiplyScalar(delta),
    );

    this.lifeTime += delta;
    if (this.lifeTime > BulletParticleComponent.TOTAL_LIFE_TIME) this.kill();
  }

  public graphics(): void {
    this.mesh.position.set(this.position.x, this.position.y, this.position.z);
  }
}
