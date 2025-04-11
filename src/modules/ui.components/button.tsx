import React, { PropsWithChildren } from "react";
import { COLOR_PALETTE } from "../colors";
import clsx from "clsx";

export interface ButtonProps {
  className?: string;
  onClick: () => void;
  type: "primary" | "secondary";
  variation?: "square" | "padded" | "none";
}

export function Button({
  children,
  className,
  onClick,
  type,
  variation = "none",
}: PropsWithChildren<ButtonProps>) {
  const color =
    type === "primary" ? COLOR_PALETTE.DARK_GREEN : COLOR_PALETTE.DARK_BLUE;

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      style={{
        backgroundColor: color,
      }}
      className={clsx(
        "border-none text-center inline-block cursor-pointer rounded-lg text-base select-none z-50 fill-white no-underline",
        variation === "none"
          ? "py-3 px-8"
          : variation === "padded"
            ? "px-4 py-8"
            : "p-4",
        className,
      )}
    >
      {children}
    </button>
  );
}
