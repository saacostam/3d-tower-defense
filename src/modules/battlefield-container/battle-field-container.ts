import { AxesHelper, Color } from "three";
import { Container, Game } from "../game";
import { WorldBuilderUtils } from "./utils";
import { COLOR_PALETTE } from "../colors";

export class BattleFieldContainer extends Container {
  private static TILE_SIZE = 1;

  public constructor() {
    super({ width: 20, height: 20 });
  }

  public onStart() {
    const width = this.actorsGrid.length;
    const height = this.actorsGrid[0]?.length ?? 0;

    const worldComponents = WorldBuilderUtils.buildWorldComponents({
      width,
      height,
      tileSize: BattleFieldContainer.TILE_SIZE,
    });

    worldComponents.forEach((component) => this.addComponent(component));

    this.scene.background = new Color(COLOR_PALETTE.BLUE);

    this.scene.add(new AxesHelper(width));

    this.camera.position.set(
      (width * BattleFieldContainer.TILE_SIZE) / 2,
      2,
      height * BattleFieldContainer.TILE_SIZE * 1.5,
    );
  }

  public update(game: Game, delta: number): void {
    super.update(game, delta);
    this.camera.position.z += 0.002 * delta;
    this.camera.position.x += 0.0005 * delta;

    this.camera.lookAt(
      (this.actorsGrid.length * BattleFieldContainer.TILE_SIZE) / 2,
      0,
      (this.actorsGrid.length * BattleFieldContainer.TILE_SIZE) / 2,
    );
  }
}
