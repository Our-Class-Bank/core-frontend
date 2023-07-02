import React, { forwardRef } from "react";
import styled from "styled-components";

interface StyledBtnProps {
  border: string;
  color: string;
  backgroundcolor: string;
  height: string;
  width: string;
  fontWeight: string;
  margin: string;
  type: string;
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
`;

interface ButtonProps extends StyledBtnProps {
  onClick: () => void;
  children?: React.ReactNode;
  value: string;
}

const Button: React.FC<ButtonProps> = ({
  border,
  color,
  backgroundcolor,
  height,
  width,
  fontWeight,
  margin,
  onClick,
  children,
  value,
  type,
}) => {
  return (
    <StyledBtn
      type={type}
      value={value}
      border={border}
      color={color}
      backgroundcolor={backgroundcolor}
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
