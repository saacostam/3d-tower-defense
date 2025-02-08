import { Scene } from "../scene";

export class Game {
  private lastUpdate = Date.now();
  private lastGraphics = Date.now();

  public scenes = new Map<string, Scene>();
  public currentScene?: Scene;

  public constructor() {}
  public addScene(key: string, scene: Scene) {
    if (this.scenes.has(key))
      throw new Error(`A scene with key "${key}" already exists`);
    this.scenes.set(key, scene);
    scene.onStart(this);
  }
  public setScene(key: string) {
    if (!this.scenes.has(key))
      throw new Error(`Scene "${key}" does not exist.`);
    this.currentScene = this.scenes.get(key)!;
    this.currentScene.onSwitch(this);
  }
  public start() {}

  public update() {
    const delta = this.lastUpdate - Date.now();
    this.lastUpdate = Date.now();

    if (this.currentScene) {
      this.currentScene.update(this, delta);
    }
  }

  public graphics() {
    const delta = this.lastGraphics - Date.now();
    this.lastGraphics = Date.now();

    if (this.currentScene) {
      this.currentScene.graphics(this, delta);
    }
  }
}
