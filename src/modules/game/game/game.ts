import { WebGLRenderer } from "three";
import Stats from "three/addons/libs/stats.module.js";
import { Container } from "../container";
import { DomUtils } from "../../dom";
import { KeyboardHandler, keyboardHandler } from "../../keyboard";
import { mouseHandler, MouseHandler } from "../../mouse";

const DEBUG = false;

export class Game {
  public renderer: WebGLRenderer;

  public keyboardHandler: KeyboardHandler;
  public mouseHandler: MouseHandler;

  public isGameOver = false;

  private lastUpdate = Date.now();
  private lastGraphics = Date.now();
  private stats = new Stats();

  public containers = new Map<string, Container>();
  public currentContainer?: Container;

  public triggerRender: () => void;

  public constructor(args: { triggerRender: () => void }) {
    this.renderer = new WebGLRenderer({
      canvas: DomUtils.getCanvas(),
    });
    this.renderer.setSize(800, 800);
    document.body.appendChild(this.renderer.domElement);
    this.keyboardHandler = keyboardHandler;
    this.mouseHandler = mouseHandler;

    this.stats = new Stats();
    if (DEBUG) document.body.appendChild(this.stats.dom);

    window.addEventListener("resize", this.onResize);
    window.requestAnimationFrame(this.onResize);

    this.triggerRender = args.triggerRender;
  }

  private onResize = () => {
    if (this.currentContainer) {
      this.currentContainer.camera.aspect =
        window.innerWidth / window.innerHeight;
      this.currentContainer.camera.updateProjectionMatrix();
    }

    this.renderer.setSize(window.innerWidth * 2, window.innerHeight * 2);
    this.renderer.domElement.style.width = `${window.innerWidth}px`;
    this.renderer.domElement.style.height = `${window.innerHeight}px`;
  };

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
    this.triggerRender();
    this.onResize();
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
