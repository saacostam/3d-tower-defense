import "./style.css";

import { BattleFieldContainer } from "./modules/battlefield-container";
import { Game } from "./modules/game";

const game = new Game();

game.addContainer("BF", new BattleFieldContainer());
game.setContainer("BF");

game.start();
