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
`;

interface ButtonProps extends StyledBtnProps {
  onClick: () => void;
  children?: React.ReactNode;
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
}) => {
  return (
    <StyledBtn
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
