import { PerspectiveCamera, Scene, Vector2 } from "three";
import { Actor } from "../actor";
import { Component } from "../component";
import { Composite } from "../composite";
import { GridCell } from "./container.types";
import { ContainerUtils } from "./container.utils";
import { DebugUtils } from "../../debug";
import { Game } from "../game";

const DEBUG = false;

export interface ContainerArgs {
  width: number;
  height: number;
  camera?: PerspectiveCamera;
  scene?: Scene;
}

export class Container<ContainerUiProps = any> {
  public actorsGrid: GridCell[][];
  public components: Component[] = [];

  public camera: PerspectiveCamera;
  public scene: Scene;

  private width: number;
  private height: number;

  public isContainerOver = false;

  public Render: React.FC<ContainerUiProps> = () => null;

  public static createActorsGrid(width: number, height: number) {
    return ContainerUtils.createGrid(width, height);
  }

  public constructor(args: ContainerArgs) {
    this.actorsGrid = Container.createActorsGrid(args.width, args.height);

    this.camera = args.camera ?? new PerspectiveCamera();
    this.scene = args.scene ?? new Scene();

    this.width = args.width;
    this.height = args.height;
  }

  public onStart(_game: Game) {}
  public onSwitch(_game: Game) {
    this.isContainerOver = false;
  }

  public addActor(actor: Actor, pos: Vector2) {
    if (
      !(0 <= pos.x && pos.x < this.actorsGrid.length) &&
      !(0 <= pos.y && pos.y < this.actorsGrid[0].length)
    )
      throw new Error(`Position ${pos.x},${pos.y} is out of bounds`);

    this.actorsGrid[pos.x][pos.y].actors.push(actor);

    if (actor.mesh instanceof Composite)
      actor.mesh.parts.forEach((part) => this.scene.add(part.mesh));
    else this.scene.add(actor.mesh);

    actor.afterSpawn(this, pos);

    if (DEBUG) DebugUtils.logMobCount(this.actorsGrid);
  }

  public addComponent(component: Component) {
    this.components.push(component);

    if (component.mesh instanceof Composite)
      component.mesh.parts.forEach((part) => this.scene.add(part.mesh));
    else this.scene.add(component.mesh);
  }

  public update(game: Game, delta: number) {
    if (this.isContainerOver) return;

    // Update actors
    this.actorsGrid.forEach((row, x) => {
      row.forEach((cell, y) => {
        const position = new Vector2(x, y);
        cell.actors.forEach((actor) =>
          actor.update(game, delta, this, position.clone()),
        );
      });
    });

    // Update components
    this.components.forEach((component) => component.update(game, delta, this));

    // Remove dead actors
    this.actorsGrid.map((row, x) =>
      row.map((cell, y) => {
        const position = new Vector2(x, y);

        const dead: Actor[] = cell.actors.filter((actor) => !actor.isAlive);

        dead.forEach((actor) => {
          actor.beforeDeath(game, this, position);
          if (actor.mesh instanceof Composite)
            actor.mesh.parts.forEach((part) => this.scene.remove(part.mesh));
          else this.scene.remove(actor.mesh);
        });

        const alive: Actor[] = cell.actors.filter((actor) => actor.isAlive);
        cell.actors = alive;
      }),
    );

    // Remove dead components
    const aliveComponents: Component[] = [];
    const deadComponents: Component[] = [];

    for (let i = 0; i < this.components.length; i++) {
      const component = this.components[i];
      if (component.isAlive) aliveComponents.push(component);
      else deadComponents.push(component);
    }

    deadComponents.forEach((component) => {
      if (component.mesh instanceof Composite)
        component.mesh.parts.forEach((part) => this.scene.remove(part.mesh));
      else this.scene.remove(component.mesh);
    });
    this.components = aliveComponents;
  }

  public graphics(game: Game, delta: number) {
    // Update graphics for actors
    this.actorsGrid.forEach((row, x) => {
      row.forEach((cell, y) => {
        const position = new Vector2(x, y);
        cell.actors.forEach((actor) =>
          actor.graphics(game, delta, this, position.clone()),
        );
      });
    });

    // Update graphics for components
    this.components.forEach((component) =>
      component.graphics(game, delta, this),
    );
  }

  public provideProps(_game: Game): ContainerUiProps {
    return {} as ContainerUiProps;
  }

  public reset() {
    this.scene.clear();
    this.actorsGrid = Container.createActorsGrid(this.width, this.height);
  }
}
