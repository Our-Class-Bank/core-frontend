import {
  Wrapper,
  NavLink,
  NavText,
  NameBlock,
  Name,
  Text,
  NavContainer,
} from "@/style/layout/SideBarStyle.tsx";
import { ReactComponent as CreditEvaluateIcon } from "@/assets/images/CreditEvaluateIcon.svg";
import { ReactComponent as MyBankIcon } from "@/assets/images/MyBankIcon.svg";
import { ReactComponent as TransferIcon } from "@/assets/images/TransferIcon.svg";
import { useLocation } from "react-router-dom";
import { MyInfoDataType } from "../home/Home";
import { useQuery } from "@tanstack/react-query";
import { getMyInfo } from "@/apis/authApi";
import { parseJwt } from "@/utils/parseJwt";

function SideBar() {
  const location = useLocation();
  const { data: myInfoData } = useQuery<MyInfoDataType>(["myInfo"], getMyInfo);

  const visibleSideBar = () => {
    if (location.pathname === "/login") return false;
    if (location.pathname === "/reset-password") return false;
    return true;
  };

  const savedAccessToken = localStorage.getItem("accessToken");
  const userRoles = savedAccessToken && parseJwt(savedAccessToken).roles;

  return (
    <>
      {visibleSideBar() && (
        <Wrapper>
          <NameBlock>
            <Name>{myInfoData?.data.user.name}</Name>
            <Text>님</Text>
          </NameBlock>
          <NavLink to="/">
            <NavContainer>
              <MyBankIcon fill="white" />
              <NavText>내 통장</NavText>
            </NavContainer>
          </NavLink>
          {userRoles.includes("ROLE_BANKER") && (
            <NavLink to="/transfer">
              <NavContainer>
                <TransferIcon fill="white" />
                <NavText>입출금 관리</NavText>
              </NavContainer>
            </NavLink>
          )}
          {userRoles.includes("ROLE_CREDIT_EVALUATOR") && (
            <NavLink to="/credit">
              <NavContainer>
                <CreditEvaluateIcon fill="white" />
                <NavText>신용등급 관리</NavText>
              </NavContainer>
            </NavLink>
          )}
        </Wrapper>
      )}
    </>
  );
}

export default SideBar;
