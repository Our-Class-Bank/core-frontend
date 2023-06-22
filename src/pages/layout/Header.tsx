import LogoutBtn from "./LogoutBtn";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import {
  Wrapper,
  LogoWrapper,
  LogoText,
} from "../../../src/style/layout/HeaderStyle";
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
