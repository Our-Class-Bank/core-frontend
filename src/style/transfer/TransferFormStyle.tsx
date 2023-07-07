import { styled } from "styled-components";
import BigBtn from "@/style/common/BigBtn";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 580px;
  border-radius: 10px;
  border: 1px solid #dfecff;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 300px;
  padding: 22px 25px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
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
  height: 42px;
  width: ${({ width }) => width};
  font-size: 16px;
  font-weight: 600;
  padding: 0 12px;
  outline: none;

  &:focus {
    border: 2px solid #2f3fd4;
  }
`;

export const NextBtn = styled(BigBtn)``;
