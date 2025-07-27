import React, { useEffect, useState } from "react";
import { PropsWithChildren } from "react";
import { COLOR_PALETTE } from "../../colors";
import { Game } from "../../game";
import { SoundIcon } from "../../icons";

export interface AudioControlsProps {
  game: Game | null;
}

export function AudioControls({
  children,
  game,
}: PropsWithChildren<AudioControlsProps>) {
  const [volume, setVolume] = useState(game?.audioManager.getVolume());
  useEffect(() => {
    setVolume(game?.audioManager.getVolume());
  }, [game]);

  const updateVolume = (_newVolume: number) => {
    if (!game) return;

    const newVolume = Math.max(0, Math.min(_newVolume, 1));

    game.audioManager.setVolume(newVolume);
    setVolume(game.audioManager.getVolume());
  };

  return (
    <div className="relative h-full w-full">
      {children}
      {volume !== undefined && game && (
        <div className="absolute bottom-4 right-1/2 transform translate-x-1/2">
          <div
            className="tooltip"
            data-tip="Functional once the Audio Context is active."
          >
            <div className="flex flex-row items-center gap-2">
              <SoundIcon />
              <input
                type="range"
                min={0}
                max={1}
                step={0.1}
                value={volume}
                onChange={(e) => updateVolume(parseFloat(e.target.value))}
                className="h-full appearance-none rounded-lg"
                style={{
                  backgroundColor: COLOR_PALETTE.DARK_BLUE,
                }}
                onClick={(e) => e.stopPropagation()}
              />
              <span>{(volume * 100).toFixed(0).padStart(2)}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
