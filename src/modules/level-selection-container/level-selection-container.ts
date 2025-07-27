import { BackgroundSong } from "../audio-manager";
import { BattleFieldContainer } from "../battlefield-container";
import { ContainerKey, WORLD_CONFIG } from "../config";
import { Container, Game } from "../game";
import { LevelDefinition, LEVELS } from "../levels";
import { LevelSelectionContainerUI } from "./ui";

export interface LevelSelectionContainerUiProps {
  levels: LevelDefinition[];
  goToLevel: (levelNumber: number) => void;
  goToHome: () => void;
}

export class LevelSelectionContainer extends Container {
  constructor() {
    super({
      width: WORLD_CONFIG.WIDTH,
      height: WORLD_CONFIG.HEIGHT,
    });
  }

  public Render = LevelSelectionContainerUI;

  public onSwitch(_game: Game): void {
    _game.audioManager.playBackground(BackgroundSong.HOME);
  }

  public provideProps(game: Game): LevelSelectionContainerUiProps {
    return {
      levels: LEVELS,
      goToLevel: (level: number) => {
        game.setContainer(ContainerKey.BATTLEFIELD_CONTAINER);
        if (!(game.currentContainer instanceof BattleFieldContainer))
          throw new Error("Something went wrong whilst switching containers");
        game.currentContainer.setLevel(level);
      },
      goToHome: () => game.setContainer(ContainerKey.HOME_CONTAINER),
    };
  }
}
