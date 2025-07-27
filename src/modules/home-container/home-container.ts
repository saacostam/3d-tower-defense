import { BackgroundSong } from "../audio-manager";
import { ContainerKey, WORLD_CONFIG } from "../config";
import { Container, Game } from "../game";
import { HomeContainerUI } from "./ui";

export interface HomeContainerUiProps {
  goToNext: () => void;
}

export class HomeContainer extends Container {
  constructor() {
    super({
      width: WORLD_CONFIG.WIDTH,
      height: WORLD_CONFIG.HEIGHT,
    });
  }

  public onSwitch(_game: Game): void {
    _game.audioManager.playBackground(BackgroundSong.HOME);
  }

  public Render = HomeContainerUI;

  public provideProps(game: Game): HomeContainerUiProps {
    return {
      goToNext: () => game.setContainer(ContainerKey.LEVEL_SELECTION_CONTAINER),
    };
  }
}
