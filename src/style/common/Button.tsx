import React from "react";
import styled from "styled-components";

interface StyledBtnProps {
  border: string;
  color: string;
  backgroundcolor: string;
  height: string;
  width: string;
  fontWeight: string;
  margin: string;
  buttonType: string;
}

const StyledBtn = styled.button<StyledBtnProps>`
  border-radius: 10px;
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
`;

interface ButtonProps extends StyledBtnProps {
  onClick: () => void;
  children?: React.ReactNode;
  value: string;
}

const Button: React.FC<ButtonProps> = ({
  border,
  color,
  backgroundColor,
  height,
  width,
  fontWeight,
  margin,
  onClick,
  children,
  value,
  buttonType,
  form,
}) => {
  return (
    <StyledBtn
      form={form}
      type={buttonType}
      value={value}
      border={border}
      color={color}
      backgroundColor={backgroundColor}
      height={height}
      width={width}
      fontWeight={fontWeight}
      margin={margin}
      onClick={onClick}
    >
      {children}
    </StyledBtn>
  );
};
export default Button;
