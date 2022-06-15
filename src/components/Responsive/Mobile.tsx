import React from "react";
import s from "./responsive.module.scss";

interface IMobileProps {
  children: JSX.Element;
}

function Mobile({ children }: IMobileProps): JSX.Element | null {
  return React.cloneElement(children, {
    className: `${s.mobileShow} ${children.props.className}`,
  });
}

export default Mobile;
