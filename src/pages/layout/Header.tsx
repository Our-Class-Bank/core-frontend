import styled from "styled-components";
import logoIcon from "../../assets/images/whiteLogo.png";
import LogoutBtn from "./LogoutBtn";

const Wrapper = styled.div`
  background: #2f3fd4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;
const Logo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 9px;
`;
const LogoText = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;

  color: #ffffff;
`;
function Header() {
  return (
    <Wrapper>
      <Logo>
        <LogoIcon src={logoIcon} alt="classBank" />
        <LogoText>우리반 은행</LogoText>
      </Logo>
      <LogoutBtn />
    </Wrapper>
  );
}
export default Header;
