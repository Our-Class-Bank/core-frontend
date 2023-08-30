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

interface ButtonProps extends StyledBtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  form?: string;
  buttonType: "submit" | "reset" | "button";
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
  buttonType,
  form,
}) => {
  return (
    <StyledBtn
      form={form}
      type={buttonType}
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
