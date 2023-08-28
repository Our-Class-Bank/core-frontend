import { styled } from "styled-components";

export const TransctionListWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  grid-row: 1;
`;

export const TransctionLogWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px 10px 50px;
  color: black;
  min-width: 300px;
  gap: 4px;
`;

export const Test = styled.div<{ $logType: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  font-size: 16px;
  font-weight: 600;
  color: black;

  p:last-child {
    color: ${(props) =>
      props.$logType === "EXPANSE" ? props.theme.mainBlue : "black"};
  }
`;

export const TestTest = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${(props) => props.theme.fontGray};
`;

export const LogDateStick = styled.div`
  position: absolute;
  left: 7px;
  width: 2px;
  height: calc(100% - 26px);
  margin-top: 16px;
  background-color: ${(props) => props.theme.mainGray};
`;

export const DateRow = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 10px 0;
`;

export const DatePoint = styled.div`
  right: -7px;
  width: 16px;
  height: 16px;
  z-index: 1;
  margin-right: 12px;
  border-radius: 50%;
  border: 3px solid;
  background-color: white;
  border-color: ${(props) => props.theme.mainGray};
`;

export const DateText = styled.div`
  height: 16px;
  line-height: 16px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.fontGray};
`;
