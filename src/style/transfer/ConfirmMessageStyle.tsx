import React from "react";
import { styled, useTheme } from "styled-components";
import { ReactComponent as Plus } from "@/assets/images/Plus.svg";
import { ReactComponent as Minus } from "@/assets/images/Minus.svg";
import Button from "../common/Button";
import { SubmitData } from "@/components/transfer/TransferForm";

interface ConfirmBtnProps {
  children: React.ReactNode;
  onClick: (data: SubmitData) => void;
  buttonType: "submit" | "reset" | "button";
  form: string;
}

export const BigText = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
export const Text = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
export const TypeText = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.mainBlue};
`;

export const PlusIcon = styled(Plus)`
  width: 35px;
  height: 35px;
  padding-right: 4px;
  path {
    fill: ${(props) => props.theme.mainBlue};
  }
`;

export const MinusIcon = styled(Minus)`
  width: 35px;
  height: 35px;
  padding-right: 4px;
  path {
    fill: ${(props) => props.theme.mainBlue};
  }
`;

export const TypeWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const Line = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ConfirmBtn: React.FC<ConfirmBtnProps> = ({
  children,
  onClick,
  buttonType,
}) => {
  const theme = useTheme() ?? { mainBlue: "#000000" };
  return (
    <Button
      onClick={onClick}
      buttonType={buttonType}
      border={`2px solid ${theme.mainBlue}`}
      color={theme.mainBlue}
      backgroundcolor="#fff"
      height="60px"
      width="230px"
      fontWeight="600"
      margin="5px"
    >
      {children}
    </Button>
  );
};
