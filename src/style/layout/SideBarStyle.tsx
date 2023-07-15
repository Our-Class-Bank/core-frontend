import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 270px;
  height: 100vh;
  background: #2f3fd4;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 90%;
  height: 60px;
  color: #fff;
  text-decoration: none;
  svg {
    fill: #fff;
  }

  &:hover {
    background-color: #fff;
    border-radius: 10px 0px 0px 10px;
    svg {
      fill: #2f3fd4;
    }

    span {
      color: #2f3fd4;
    }
  }
`;
export const NavContainer = styled.span`
  width: 100%;
  margin-left: 20px;
`;
export const NavText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 27px;
  padding: 12px;
  color: #ffffff;
`;

export const NameBlock = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  color: #fff;
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 27px;

  color: #ffffff;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 200;
  font-size: 28px;
  line-height: 27px;

  color: #ffffff;
`;
