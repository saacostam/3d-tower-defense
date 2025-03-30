import { ContainerKey, WORLD_CONFIG } from "../config";
import { Container, Game } from "../game";
import { LevelDefinition, LEVELS } from "../levels";
import { LevelSelectionContainerUI } from "./ui";

export interface LevelSelectionContainerUiProps {
  levels: LevelDefinition[];
  goToLevel: (levelNumber: number) => void;
}

export class LevelSelectionContainer extends Container {
  constructor() {
    super({
      width: WORLD_CONFIG.WIDTH,
      height: WORLD_CONFIG.HEIGHT,
    });
  }

  public Render = LevelSelectionContainerUI;

  public provideProps(game: Game): LevelSelectionContainerUiProps {
    return {
      levels: LEVELS,
      goToLevel: () => game.setContainer(ContainerKey.BATTLEFIELD_CONTAINER),
    };
  }
}
