import React from "react";
import { AddDefense, DefenseDefinition } from "../types";
import { Button } from "../../ui.components";
import { PRICE_CONFIG } from "../../player";

export interface AddDefenseCtaProps {
  addDefense: AddDefense;
  defense: DefenseDefinition;
}

export function AddDefenseCta({ addDefense, defense }: AddDefenseCtaProps) {
  const price = PRICE_CONFIG[defense.type];

  return (
    <Button
      onClick={() => addDefense(defense.type)}
      type="secondary"
      className="w-20 h-20 !flex items-center justify-center relative flex-col"
      variation="padded"
    >
      <div className="!text-2xl">{defense.label}</div>
      <div className="divider mt-1 mb-0" />
      <div>
        <span className="text-xs">🪙</span> {price}
      </div>
      <kbd className="kbd text-sm absolute -top-1 -right-2">{defense.kbd}</kbd>
    </Button>
  );
}
