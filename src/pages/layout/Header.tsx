import LogoutBtn from "./LogoutBtn";
import { ReactComponent as Logo } from "@/assets/images/Logo.svg";
import { Wrapper, LogoWrapper, LogoText } from "@/style/layout/HeaderStyle";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const visibleHeader = () => {
    if (location.pathname === "/login") return false;
    if (location.pathname === "/reset-password") return false;
    return true;
  };

  return (
    <>
      {visibleHeader() && (
        <Wrapper>
          <LogoWrapper>
            <Logo fill="#2f3fd4" width="50" height="50" />
            <LogoText>우리반 은행</LogoText>
          </LogoWrapper>
          <LogoutBtn />
        </Wrapper>
      )}
    </>
  );
}
export default Header;
