import React from "react";
import Button from "./Button";

interface FormBtnProps {
  onClick: (data: any) => void;
  children: React.ReactNode;
  isCurrent: boolean;
  buttonType?: "button" | "reset" | "submit";
}

const BUTTON_DEFAULT_COLOR = "#A7B1C0";
const BUTTON_ACTIVE_COLOR = "#2F3FD4";

const btnDefault = {
  color: BUTTON_DEFAULT_COLOR,
  backgroundcolor: "white",
  height: "38px",
  width: "90px",
  fontWeight: "600",
  margin: "5px",
};

const FormBtn: React.FC<FormBtnProps> = ({
  onClick,
  children,
  isCurrent,
  buttonType,
}) => {
  const buttonStyle = {
    ...btnDefault,
    color: isCurrent ? BUTTON_ACTIVE_COLOR : BUTTON_DEFAULT_COLOR,
    border: isCurrent
      ? `2px solid ${BUTTON_ACTIVE_COLOR}`
      : `1px solid ${BUTTON_DEFAULT_COLOR}`,
  };

  return (
    <Button
      onClick={onClick}
      buttonType={buttonType ? buttonType : "button"}
      {...buttonStyle}
    >
      {children}
    </Button>
  );
};

export default FormBtn;
