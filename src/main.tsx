import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDom from "react-dom/client";
import "./style.css";

import { BattleFieldContainer } from "./modules/battlefield-container";
import { ContainerKey } from "./modules/config";
import { Game } from "./modules/game";
import { HomeContainer } from "./modules/home-container";
import { LevelSelectionContainer } from "./modules/level-selection-container";

// React Integration
const App = () => {
  const [_, setRender] = useState(false);
  const triggerRender = useCallback(() => setRender((v) => !v), []);

  const game = useRef<Game | null>(null);

  useEffect(() => {
    if (game.current) return;

    game.current = new Game({ triggerRender });

    game.current.addContainer(ContainerKey.HOME_CONTAINER, new HomeContainer());
    game.current.addContainer(
      ContainerKey.LEVEL_SELECTION_CONTAINER,
      new LevelSelectionContainer(),
    );
    game.current.addContainer(
      ContainerKey.BATTLEFIELD_CONTAINER,
      new BattleFieldContainer(),
    );

    game.current.setContainer(ContainerKey.HOME_CONTAINER);
    game.current.start();

    triggerRender();
  }, [triggerRender]);

  return (
    game.current?.currentContainer && (
      <game.current.currentContainer.Render
        {...game.current.currentContainer.provideProps(game.current)}
      />
    )
  );
};

const root = ReactDom.createRoot(document.getElementById("root")!);
root.render(<App />);

document.addEventListener("keydown", (e) => e.preventDefault());
