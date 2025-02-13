import { Color, Mesh, Vector3 } from "three";
import { COLOR_PALETTE } from "../colors";
import { WOLRD_CONFIG } from "../config";
import { Component, Container, Game } from "../game";
import { MeshUtils } from "../mesh";

export interface BulletParticleComponentArgs {
  position: Vector3;
}

export class BulletParticleComponent extends Component {
  declare mesh: Mesh;

  private static TTL = 1000;
  private ttl = 0;

  private position: Vector3;
  private velocity: Vector3;

  constructor({ position }: BulletParticleComponentArgs) {
    const radius = WOLRD_CONFIG.TILE_SIZE / 64;

    const random = Math.random();
    const mesh = MeshUtils.createSphere({
      radius,
      color:
        random < 0.33
          ? new Color(COLOR_PALETTE.ORANGE)
          : random < 0.66
            ? new Color(COLOR_PALETTE.YELLOW)
            : new Color(COLOR_PALETTE.RED),
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
      .multiplyScalar(0.00005);
  }

  public update(game: Game, delta: number, container: Container): void {
    super.update(game, delta, container);

    this.velocity.y -= 0.000001 * delta;
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
