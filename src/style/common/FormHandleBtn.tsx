import React, { useEffect } from "react";
import styled from "styled-components";

import { CreditFormData } from "@/pages/credit/CreditForm";

interface StyledBtnProps {
  border: string;
  color: string;
  backgroundcolor: string;
  height: string;
  width: string;
  fontWeight: string;
  margin: string;
}

const StyledBtn = styled.button<StyledBtnProps>`
  border-radius: 10px;
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface FormHandleBtnProps {
  onClick: (data: CreditFormData) => void;
  children: React.ReactNode;
  buttonType?: "button" | "reset" | "submit";
  form?: string;
  isFormValid: boolean;
}

const BUTTON_DEFAULT_COLOR = "#B4B4B4";
const BUTTON_VALID_COLOR = "#2F3FD4";
const BUTTON_WHITE_COLOR = "#ffffff";

const btnDefault = {
  height: "38px",
  width: "90px",
  fontWeight: "600",
  margin: "5px",
};

const FormHandleBtn: React.FC<FormHandleBtnProps> = ({
  onClick,
  children,
  isFormValid,
}) => {
  useEffect(() => console.log(isFormValid), [isFormValid]);

  const buttonStyle = {
    ...btnDefault,
    backgroundcolor: isFormValid ? BUTTON_VALID_COLOR : BUTTON_WHITE_COLOR,
    color: isFormValid ? BUTTON_WHITE_COLOR : BUTTON_DEFAULT_COLOR,
    border: isFormValid
      ? `2px solid ${BUTTON_VALID_COLOR}`
      : `1px solid ${BUTTON_DEFAULT_COLOR}`,
  };

  return (
    <StyledBtn
      form="creditForm"
      onClick={onClick}
      buttonType="submit"
      {...buttonStyle}
    >
      {children}
    </StyledBtn>
  );
};

export default FormHandleBtn;
