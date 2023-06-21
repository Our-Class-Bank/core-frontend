import styled from "styled-components";
import LogoutBtn from "./LogoutBtn";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";

const Wrapper = styled.div`
  background: #2f3fd4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;
const LogoWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  padding: 0px 12px;

  color: #ffffff;
`;
function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo fill="white" width="50" height="50" />
        <LogoText>우리반 은행</LogoText>
      </LogoWrapper>
      <LogoutBtn />
    </Wrapper>
  );
}
export default Header;
