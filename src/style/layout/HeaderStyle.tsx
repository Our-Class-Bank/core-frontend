import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
  display: flex;
  position: fixed;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  z-index: 1;
`;

export const LogoWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  padding: 0px 12px;
  line-height: 60px;
  color: #2f3fd4;
`;
