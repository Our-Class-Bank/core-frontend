import { styled } from "styled-components";
import BigBtn from "@/style/common/BigBtn";
import { ReactComponent as PlusSvg } from "@/assets/images/Plus.svg";
import { ReactComponent as MinusSvg } from "@/assets/images/Minus.svg";

export const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  border: 1px solid #dfecff;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 15px 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  h3 {
    font-weight: 600;
    margin-right: 25px;
  }
  span {
    font-size: 18px;
    font-weight: 400;
    margin-left: 5px;
  }
`;

export const Input = styled.input`
  background-color: #ebeaea;
  border: none;
  border-radius: 10px;
  height: 38px;
  width: ${({ width }) => width};
  font-size: 16px;
  font-weight: 600;
  padding: 0 12px;
  outline: none;

  &:focus {
    border: 2px solid #2f3fd4;
    background-color: #ffffff;
  }
`;

export const NextBtn = styled(BigBtn)``;

export const PlusIcon = styled(PlusSvg)`
  width: 20px;
  height: 20px;
`;
export const MinusIcon = styled(MinusSvg)`
  width: 20px;
  height: 20px;
`;
