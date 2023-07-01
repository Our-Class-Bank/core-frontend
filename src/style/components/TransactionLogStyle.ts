import { styled } from "styled-components";

export const TransctionLogWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogDateStick = styled.div`
  position: relative;
  width: 2px;
  height: 100%;
  margin-right: 20px;
  background-color: ${(props) => props.theme.mainGray};
`;

export const LogDatePoint = styled.div`
  position: absolute;
  right: -7px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid;
  background-color: white;
  border-color: ${(props) => props.theme.mainGray};
`;

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px 20px 10px;
  color: black;
  min-width: 300px;
`;

export const Test = styled.div<{ logType: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  font-size: 16px;
  font-weight: 600;
  color: black;

  p:last-child {
    color: ${(props) =>
      props.logType === "입금" ? props.theme.mainBlue : "black"};
  }
`;

export const TestTest = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 400;
  color: ${(props) => props.theme.fontGray};
`;
