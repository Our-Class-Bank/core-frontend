import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 270px;
  height: 100vh;
  background: #2f3fd4;
  position: fixed;
  padding-top: 100px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0px 30px;
  width: 100%;
  height: 60px;
  color: #fff;
  text-decoration: none;
  margin: 10px 0px;

  &:hover {
    background-color: #1f2cb6;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 195px;
  height: 60px;
  color: #fff;
`;

export const Name = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 27px;

  color: #ffffff;
`;

export const Text = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 200;
  font-size: 28px;
  line-height: 27px;

  color: #ffffff;
`;
