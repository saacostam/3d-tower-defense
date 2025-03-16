import { Color, Vector2, Vector3 } from "three";
import { TBattleSide } from "../battlefield-container";
import { BulletParticleComponent } from "./bullet-particle.component";
import { COLOR_PALETTE } from "../colors";
import { WOLRD_CONFIG } from "../config";
import { Component, Container, Game } from "../game";
import { MeshUtils } from "../mesh";
import { Walker } from "../mobs";

export interface BulletComponentArgs {
  battleSide: TBattleSide;
  direction: Vector2;
  position: Vector3;
}

export class BulletComponent extends Component {
  public readonly battleSide: TBattleSide;

  public position: Vector3;
  public radius: number;
  private direction: Vector2;

  private static PARTICLE_TIMEOUT = 30;
  private particleTimeout = 0;

  public constructor(args: BulletComponentArgs) {
    const radius = WOLRD_CONFIG.TILE_SIZE / 48;

    super({
      mesh: MeshUtils.createSphere({
        radius: radius,
        color: new Color(COLOR_PALETTE.WHITE),
      }),
    });

    this.battleSide = args.battleSide;
    this.direction = args.direction;
    this.position = args.position;
    this.radius = radius;
  }

  public update(game: Game, delta: number, container: Container): void {
    super.update(game, delta, container);

    const DELTA_FACTOR = 0.03;
    const deltaMove = DELTA_FACTOR * delta;

    const dir = this.direction.clone().normalize();
    const newPosition = this.position
      .clone()
      .add(new Vector3(dir.x * deltaMove, 0, dir.y * deltaMove));

    const SEGMENT_DISTANCE = WOLRD_CONFIG.TILE_SIZE / 4;
    const distance = this.position.distanceTo(newPosition);

    const nSegments = Math.max(1, Math.floor(distance / SEGMENT_DISTANCE));
    for (let i = 0; i < nSegments; i++) {
      const point = this.position
        .clone()
        .add(
          new Vector3(dir.x * SEGMENT_DISTANCE, 0, dir.y * SEGMENT_DISTANCE),
        );

      const neighboringCoords = [
        new Vector2(point.x - SEGMENT_DISTANCE, point.z - SEGMENT_DISTANCE),
        new Vector2(point.x - SEGMENT_DISTANCE, point.z),
        new Vector2(point.x - SEGMENT_DISTANCE, point.z + SEGMENT_DISTANCE),
        new Vector2(point.x, point.z - SEGMENT_DISTANCE),
        new Vector2(point.x, point.z),
        new Vector2(point.x, point.z + SEGMENT_DISTANCE),
        new Vector2(point.x + SEGMENT_DISTANCE, point.z - SEGMENT_DISTANCE),
        new Vector2(point.x + SEGMENT_DISTANCE, point.z),
        new Vector2(point.x + SEGMENT_DISTANCE, point.z + SEGMENT_DISTANCE),
      ].map((v) => new Vector2(Math.floor(v.x), Math.floor(v.y)));

      for (const coords of neighboringCoords) {
        const cell = container.actorsGrid[coords.x]?.[coords.y];
        if (!cell) continue;

        for (const actor of cell.actors) {
          if (actor instanceof Walker && actor.battleSide !== this.battleSide) {
            const distance = actor.pos.distanceTo(
              new Vector2(this.position.x, this.position.z),
            );

            const hasCollided = distance < this.radius + actor.radius;
            if (hasCollided) {
              actor.kill();
              break;
            }
          }
        }
      }
    }

    this.position.set(newPosition.x, this.position.y, newPosition.z);

    const width = container.actorsGrid.length;
    const height = container.actorsGrid[0]?.length ?? 0;

    const inBounds =
      0 <= this.position.x &&
      this.position.x < width &&
      0 <= this.position.z &&
      this.position.z < height;

    if (!inBounds) this.kill();

    // Particles
    this.particleTimeout += delta;
    if (this.particleTimeout > BulletComponent.PARTICLE_TIMEOUT) {
      container.addComponent(
        new BulletParticleComponent({ position: this.position.clone() }),
      );
      this.particleTimeout =
        this.particleTimeout % BulletComponent.PARTICLE_TIMEOUT;
    }
  }

  public graphics(): void {
    this.mesh.position.set(this.position.x, this.position.y, this.position.z);
  }
}
