import React from "react";
import { createPortal } from "react-dom";

interface IPortal {
  children: React.ReactNode;
  show: boolean;
}

const Portal = ({ children, show }: IPortal) => {
  return !!show
    ? createPortal(children, document.getElementById("portal") as HTMLElement)
    : null;
};

export default Portal;
