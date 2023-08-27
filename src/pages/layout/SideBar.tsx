import {
  Wrapper,
  NavLink,
  NavText,
  NameBlock,
  Name,
  Text,
  NavContainer,
} from "@/style/layout/SideBarStyle.tsx";
import { ReactComponent as MyBankIcon } from "@/assets/images/MyBankIcon.svg";
import { ReactComponent as TransferIcon } from "@/assets/images/TransferIcon.svg";
import { useLocation } from "react-router-dom";

function SideBar() {
  const userName = "김은행";
  const location = useLocation();

  const visibleSideBar = () => {
    if (location.pathname === "/login") return false;
    return true;
  };

  return (
    <>
      {visibleSideBar() && (
        <Wrapper>
          <NameBlock>
            <Name>{loginedUserName}</Name>
            <Text>님</Text>
          </NameBlock>
          <NavLink to="/">
            <NavContainer>
              <MyBankIcon fill="white" />
              <NavText>내 통장</NavText>
            </NavContainer>
          </NavLink>
          <NavLink to="/transfer">
            <NavContainer>
              <TransferIcon fill="white" />
              <NavText>입출금 관리</NavText>
            </NavContainer>
          </NavLink>

          <NavLink to="/credit">
            <NavContainer>
              <CreditEvaluateIcon fill="white" />
              <NavText>신용등급 관리</NavText>
            </NavContainer>
          </NavLink>
        </Wrapper>
      )}
    </>
  );
}

export default SideBar;
