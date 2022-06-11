import React from "react";
import s from "./responsive.module.scss";

interface IDesktopProps {
  children: JSX.Element;
}

function Desktop({ children }: IDesktopProps): JSX.Element {
  return React.cloneElement(children, {
    className: `${s.desktopShow} ${children.props.className}`,
  });
}

export default Desktop;
