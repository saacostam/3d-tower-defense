import React, { ReactNode } from "react";
import { PropsWithChildren } from "react";
import { COLOR_PALETTE } from "../colors";
import { Button } from "./button";

export function Modal({ children }: PropsWithChildren) {
  return (
    <div
      className="max-w-[532px] min-w-24 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-8"
      style={{
        backgroundColor: COLOR_PALETTE.VOID,
      }}
    >
      {children}
    </div>
  );
}

export function ConfirmationModal(props: {
  header: ReactNode;
  description: ReactNode;
  btn1: {
    label: ReactNode;
    onClick: () => void;
  };
  btn2: {
    label: ReactNode;
    onClick: () => void;
  };
}) {
  return (
    <Modal>
      <h2 className="text-2xl font-bold">{props.header}</h2>
      <p className="mt-4 mb-8">{props.description}</p>
      <div className="grid grid-cols-2 gap-4">
        <Button onClick={props.btn1.onClick} type="secondary">
          {props.btn1.label}
        </Button>
        <Button onClick={props.btn2.onClick} type="primary">
          {props.btn2.label}
        </Button>
      </div>
    </Modal>
  );
}
