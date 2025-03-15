import { WebGLRenderer } from "three";
import Stats from "three/addons/libs/stats.module.js";
import { Container } from "../container";
import { CANVAS_ID } from "../../dom";
import { KeyboardHandler, keyboardHandler } from "../../keyboard";

export class Game {
  public renderer: WebGLRenderer;

  public keyboardHandler: KeyboardHandler;

  public isGameOver = false;

  private lastUpdate = Date.now();
  private lastGraphics = Date.now();
  private stats = new Stats();

  public containers = new Map<string, Container>();
  public currentContainer?: Container;

  public constructor() {
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(800, 800);
    this.renderer.domElement.id = CANVAS_ID;
    document.body.appendChild(this.renderer.domElement);
    this.keyboardHandler = keyboardHandler;

    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    const onResize = () => {
      if (this.currentContainer) {
        this.currentContainer.camera.aspect =
          window.innerWidth / window.innerHeight;
        this.currentContainer.camera.updateProjectionMatrix();
      }

      this.renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    window.requestAnimationFrame(onResize);
  }

  public addContainer(key: string, container: Container) {
    if (this.containers.has(key))
      throw new Error(`A container with key "${key}" already exists`);
    this.containers.set(key, container);
    container.onStart(this);
  }
  public setContainer(key: string) {
    if (!this.containers.has(key))
      throw new Error(`A container with key "${key}" does not exist`);
    this.currentContainer = this.containers.get(key)!;
    this.currentContainer.onSwitch(this);
  }
  public start() {
    if (!this.currentContainer) throw new Error("No container selected");

    const loop = () => {
      if (this.isGameOver) return;
      if (!this.currentContainer) throw new Error("No container selected");

      this.update();
      this.graphics();

      this.renderer.render(
        this.currentContainer.scene,
        this.currentContainer.camera,
      );
      this.stats.update();

      requestAnimationFrame(loop);
    };
    loop();
  }

  public update() {
    const now = Date.now();
    const delta = sanitizeDelta(now - this.lastUpdate);
    this.lastUpdate = now;

    if (this.currentContainer) {
      this.currentContainer.update(this, delta);
    }
  }

  public graphics() {
    const now = Date.now();
    const delta = sanitizeDelta(now - this.lastGraphics);
    this.lastGraphics = now;

    if (this.currentContainer) {
      this.currentContainer.graphics(this, delta);
    }
  }
}

export function sanitizeDelta(delta: number) {
  const maxT = 1000;
  return Math.max(0, Math.min(delta, maxT));
}
