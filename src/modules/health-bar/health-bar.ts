import { Sprite, SpriteMaterial, TextureLoader, Vector3 } from "three";
import { Container } from "../game";

export interface HealthBarArgs {
  position: Vector3;
  offset: Vector3;
  fullHealth: number;
  currentHealth?: number;
}

export class HealthBar {
  private currentHealth: number;
  private fullHealth: number;
  private offset: Vector3;

  private red: Sprite;
  private green: Sprite;

  constructor(args: HealthBarArgs) {
    this.currentHealth = args.currentHealth ?? args.fullHealth;
    this.fullHealth = args.fullHealth;
    this.offset = args.offset;

    this.red = new Sprite(
      new SpriteMaterial({
        map: new TextureLoader().load("./textures/red.png"),
      }),
    );
    this.green = new Sprite(
      new SpriteMaterial({
        map: new TextureLoader().load("./textures/green.png"),
      }),
    );

    this.update(this.currentHealth, args.position);
  }

  public end(container: Container) {
    container.scene.remove(this.red);
    container.scene.remove(this.green);
  }

  public start(container: Container) {
    container.scene.add(this.red);
    container.scene.add(this.green);
  }

  public update(currentHealth: number, pos: Vector3): void {
    this.currentHealth = currentHealth;

    const w = 1;
    const size = 0.2;

    this.red.scale.set(w, size, size);
    this.red.position.set(
      pos.x + this.offset.x,
      pos.y + this.offset.y,
      pos.z + this.offset.z,
    );

    this.green.scale.set(
      w * Math.max(this.currentHealth / this.fullHealth, 0),
      size,
      size,
    );
    this.green.position.set(
      pos.x + this.offset.x,
      pos.y + this.offset.y,
      pos.z + this.offset.z,
    );
  }
}
