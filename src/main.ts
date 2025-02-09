import "./style.css";

import { Game } from "./modules/game";
import { BattleFieldContainer } from "./modules/battlefield-container";

const game = new Game();

game.addContainer("BF", new BattleFieldContainer());
game.setContainer("BF");

game.start();
