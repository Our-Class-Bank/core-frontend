import React from "react";
import Button from "./Button";

const BUTTON_DEFAULT_COLOR = "#A7B1C0";
const BUTTON_ACTIVE_COLOR = "#2F3FD4";

const btnProps = {
  color: BUTTON_DEFAULT_COLOR,
  backgroundcolor: "white",
  height: "42px",
  width: "94px",
  fontWeight: "600",
  margin: "8px",
};

const SmallBtn: React.FC = ({ onClick, isActive, children }) => {
  const buttonStyle = {
    ...btnProps,
    color: isActive ? BUTTON_ACTIVE_COLOR : BUTTON_DEFAULT_COLOR,
    border: isActive
      ? `2px solid ${BUTTON_ACTIVE_COLOR}`
      : `1px solid ${BUTTON_DEFAULT_COLOR}`,
  };

  return (
    <Button onClick={onClick} {...buttonStyle}>
      {children}
    </Button>
  );
};

export default SmallBtn;
