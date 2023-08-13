import React, { useEffect } from "react";
import Button from "./Button";

const BUTTON_DEFAULT_COLOR = "#B4B4B4";
const BUTTON_VALID_COLOR = "#2F3FD4";
const BUTTON_WHITE_COLOR = "#ffffff";

const btnDefault = {
  height: "38px",
  width: "90px",
  fontWeight: "600",
  margin: "5px",
};

const FormHandleBtn: React.FC = (props) => {
  const { onClick, children, buttonType, form, isFormValid } = props;
  useEffect(() => console.log(isFormValid), [isFormValid]);

  const buttonStyle = {
    ...btnDefault,
    backgroundColor: isFormValid ? BUTTON_VALID_COLOR : BUTTON_WHITE_COLOR,
    color: isFormValid ? BUTTON_WHITE_COLOR : BUTTON_DEFAULT_COLOR,
    border: isFormValid
      ? `2px solid ${BUTTON_VALID_COLOR}`
      : `1px solid ${BUTTON_DEFAULT_COLOR}`,
  };

  return (
    <Button
      form={form}
      onClick={onClick}
      buttonType={buttonType ? buttonType : "button"}
      value={children}
      {...buttonStyle}
    >
      {children}
    </Button>
  );
};

export default FormHandleBtn;
