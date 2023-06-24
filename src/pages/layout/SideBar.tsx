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
import { ReactComponent as WorkListIcon } from "@/assets/images/WorkListIcon.svg";
function SideBar() {
  const userName = "김은행";
  return (
    <Wrapper>
      <NameBlock>
        <Name>{userName}</Name>
        <Text>님</Text>
      </NameBlock>
      <NavLink to="/">
        <NavContainer>
          <MyBankIcon />
          <NavText>내 통장</NavText>
        </NavContainer>
      </NavLink>
      <NavLink to="/transfer">
        <NavContainer>
          <TransferIcon />
          <NavText>입출금</NavText>
        </NavContainer>
      </NavLink>
      <NavLink to="/work-list">
        <NavContainer>
          <WorkListIcon />
          <NavText>관리내역</NavText>
        </NavContainer>
      </NavLink>
    </Wrapper>
  );
}

export default SideBar;
