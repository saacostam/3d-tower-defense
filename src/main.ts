import "./style.css";

import { BattleFieldContainer } from "./modules/battlefield-container";
import { Game } from "./modules/game";
import { ContainerKey } from "./modules/config";

const game = new Game();

game.addContainer(
  ContainerKey.BATTLEFIELD_CONTAINER,
  new BattleFieldContainer(),
);
game.setContainer(ContainerKey.BATTLEFIELD_CONTAINER);

game.start();
