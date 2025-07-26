import React, { useState } from "react";
import { AddDefenseCta } from "./add-defense-cta";
import { BattleFieldContainerUiProps } from "../battle-field-container";
import { COLOR_PALETTE } from "../../colors";
import { ArrowLeftIcon, PlayIcon } from "../../icons";
import { Button } from "../../ui.components";

export function BattleFieldContainerUI({
  addDefense,
  messageQueue,
  defenses,
  goToLevelSelection,
  isPaused,
  startGame,
}: BattleFieldContainerUiProps) {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  return (
    <>
      {!isConfirmationModalOpen && (
        <>
          <div
            className="block absolute bottom-2.5 right-2.5 rounded-xl p-2 opacity-90"
            style={{
              backgroundColor: COLOR_PALETTE.DARK_GREEN,
            }}
          >
            <h1 className="block text-center text-2xl font-bold">
              🛡️ 3D Tower Defense
            </h1>
            <a
              className="block text-end link"
              href="https://github.com/saacostam"
              target="_blank"
            >
              by saacostam
            </a>
          </div>
          <Button
            className="absolute top-2.5 left-2.5"
            onClick={() => setIsConfirmationModalOpen(true)}
            type="secondary"
            variation="square"
          >
            <ArrowLeftIcon />
          </Button>
          <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2">
            {messageQueue.map((message) => (
              <div
                className="rounded-xl text-center text-sm p-2 opacity-90 mb-2.5 select-none"
                key={message}
                style={{
                  backgroundColor: COLOR_PALETTE.RED,
                }}
              >
                {message}
              </div>
            ))}
          </div>
          <div className="absolute bottom-2.5 left-2.5 flex gap-2.5">
            {defenses.map((defense) => (
              <AddDefenseCta
                addDefense={addDefense}
                defense={defense}
                key={defense.type}
              />
            ))}
          </div>
        </>
      )}
      {isConfirmationModalOpen && (
        <div
          className="min-w-24 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-8"
          style={{
            backgroundColor: COLOR_PALETTE.VOID,
          }}
        >
          <h2 className="text-2xl font-bold">
            Are you sure you want to exit the game?
          </h2>
          <p className="mt-4 mb-8">
            You will lose all progress and be redirected to the level selection.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={goToLevelSelection} type="secondary">
              Confirm
            </Button>
            <Button
              onClick={() => setIsConfirmationModalOpen(false)}
              type="primary"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
      {isPaused && (
        <div
          className="min-w-24 rounded-xl absolute top-1/12 left-1/2 transform -translate-x-1/2 -translate-y-1/12 text-center p-4 border border-white"
          style={{
            backgroundColor: COLOR_PALETTE.VOID,
          }}
        >
          <h2 className="text-2xl font-bold">Get Ready for Battle</h2>
          <p className="mt-2 mb-2">
            Spend your coins wisely — place your towers,<br />
            then click play to start the attack!
          </p>
          <Button onClick={startGame} type="primary" className="mx-auto">
            <PlayIcon />
          </Button>
        </div>
      )}
    </>
  );
}
