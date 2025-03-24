import { Color, Mesh, Vector3 } from "three";
import { COLOR_PALETTE } from "../colors";
import { WOLRD_CONFIG } from "../config";
import { Component, Container, Game } from "../game";
import { MeshUtils } from "../mesh";

export interface BulletParticleComponentArgs {
  position: Vector3;
  color?: Color;
}

export class BulletParticleComponent extends Component {
  declare mesh: Mesh;

  private static TTL = 1000;
  private ttl = 0;

  private position: Vector3;
  private velocity: Vector3;

  constructor({ position, color }: BulletParticleComponentArgs) {
    const radius = WOLRD_CONFIG.TILE_SIZE / 72;

    const mesh = MeshUtils.createSphere({
      radius,
      color: color === undefined ? new Color(COLOR_PALETTE.WHITE) : color,
    });

    mesh.position.set(position.x, position.y, position.z);

    super({
      mesh,
    });

    this.position = position;

    this.velocity = new Vector3(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5,
    )
      .normalize()
      .multiplyScalar(WOLRD_CONFIG.TILE_SIZE * 0.00005);
  }

  public update(game: Game, delta: number, container: Container): void {
    super.update(game, delta, container);

    this.velocity.y -= 0.000005 * delta;
    this.position = this.position.add(
      this.velocity.clone().multiplyScalar(delta),
    );

    this.ttl += delta;
    if (this.ttl > BulletParticleComponent.TTL) this.kill();
  }

  public graphics(): void {
    this.mesh.position.set(this.position.x, this.position.y, this.position.z);
  }
}
