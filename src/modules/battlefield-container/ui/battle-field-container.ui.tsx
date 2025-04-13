import React, { useState } from "react";
import { AddDefenseCta } from "./add-defense-cta";
import { BattleFieldContainerUiProps } from "../battle-field-container";
import { COLOR_PALETTE } from "../../colors";
import { ArrowLeftIcon } from "../../icons";
import { Button, ConfirmationModal } from "../../ui.components";

export function BattleFieldContainerUI({
  addDefense,
  messageQueue,
  defenses,
  goToLevelSelection,
  gameState,
}: BattleFieldContainerUiProps) {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  if (gameState === "over") {
    return (
      <ConfirmationModal
        header="Game Over"
        description="The enemy has overwhelmed your defenses, and your base couldn't hold. But this isn't the end—it's a chance to regroup and try again."
        btn1={{
          label: "Select a Level",
          onClick: goToLevelSelection,
        }}
        btn2={{
          label: "Restart",
          onClick: goToLevelSelection,
        }}
      />
    );
  }

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
        <ConfirmationModal
          header="Are you sure you want to exit the game?"
          description="You will lose all progress and be redirected to the level selection."
          btn1={{
            onClick: goToLevelSelection,
            label: "Confirm",
          }}
          btn2={{
            onClick: () => setIsConfirmationModalOpen(false),
            label: "Cancel",
          }}
        />
      )}
    </>
  );
}
