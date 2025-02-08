import { Container } from "../container";

export class Game {
  private lastUpdate = Date.now();
  private lastGraphics = Date.now();

  public containers = new Map<string, Container>();
  public currentConteiner?: Container;

  public constructor() {}
  public addContainer(key: string, container: Container) {
    if (this.containers.has(key))
      throw new Error(`A container with key "${key}" already exists`);
    this.containers.set(key, container);
    container.onStart(this);
  }
  public setContainer(key: string) {
    if (!this.containers.has(key))
      throw new Error(`A container with key "${key}" does not exist`);
    this.currentConteiner = this.containers.get(key)!;
    this.currentConteiner.onSwitch(this);
  }
  public start() {}

  public update() {
    const delta = this.lastUpdate - Date.now();
    this.lastUpdate = Date.now();

    if (this.currentConteiner) {
      this.currentConteiner.update(this, delta);
    }
  }

  public graphics() {
    const delta = this.lastGraphics - Date.now();
    this.lastGraphics = Date.now();

    if (this.currentConteiner) {
      this.currentConteiner.graphics(this, delta);
    }
  }
}
