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
import { ReactComponent as CreditEvaluateIcon } from "@/assets/images/CreditEvaluateIcon.svg";
import UserContext from "@/store/UserContext";
import { useContext } from "react";

function SideBar() {
  const loginedUserName = useContext(UserContext).name;
  console.log(loginedUserName);

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
              <CreditEvaluateIcon />
              <NavText>신용등급 관리</NavText>
            </NavContainer>
          </NavLink>
        </Wrapper>
      )}
    </>
  );
}

export default SideBar;
