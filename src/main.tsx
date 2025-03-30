import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";

import { BattleFieldContainer } from "./modules/battlefield-container";
import { Game } from "./modules/game";
import { ContainerKey } from "./modules/config";

// Game Initialization
const game = new Game();

game.addContainer(
  ContainerKey.BATTLEFIELD_CONTAINER,
  new BattleFieldContainer(),
);
game.setContainer(ContainerKey.BATTLEFIELD_CONTAINER);

game.start();

// React Integration
const App = () => {
  return (
    <div style={{ position: "absolute", left: 0, bottom: 0 }}>
      <h3>Lorem Ipsum Dolor</h3>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root")!);
root.render(<App />);
