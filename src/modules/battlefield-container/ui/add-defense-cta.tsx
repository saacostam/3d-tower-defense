import React from "react";
import { AddDefense, DefenseDefinition } from "../types";
import { Button } from "../../ui.components";

export interface AddDefenseCtaProps {
  addDefense: AddDefense;
  defense: DefenseDefinition;
}

export function AddDefenseCta({ addDefense, defense }: AddDefenseCtaProps) {
  return (
    <Button
      onClick={() => addDefense(defense.type)}
      type="secondary"
      className="w-20 h-20 !text-3xl !flex items-center justify-center relative"
      variation="padded"
    >
      {defense.label}
      <kbd className="kbd text-sm absolute -top-1 -right-2">{defense.kbd}</kbd>
    </Button>
  );
}
