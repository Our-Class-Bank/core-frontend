import { ReactComponent as MyBankIcon } from "@/assets/images/MyBankIcon.svg";
import { ReactComponent as TransferIcon } from "@/assets/images/TransferIcon.svg";
import { ReactComponent as WorkListIcon } from "@/assets/images/WorkListIcon.svg";
import {
  Wrapper,
  NavLink,
  NavText,
  NameBlock,
  Name,
  Text,
} from "@/style/layout/SideBarStyle.tsx";
function SideBar() {
  const userName = "김은행";
  return (
    <Wrapper>
      <NameBlock>
        <Name>{userName}</Name>
        <Text>님</Text>
      </NameBlock>
      <NavLink to="/">
        <MyBankIcon fill="white" />
        <NavText>내 통장</NavText>
      </NavLink>
      <NavLink to="/transfer">
        <TransferIcon fill="white" />
        <NavText>입출금</NavText>
      </NavLink>
      <NavLink to="/work-list">
        <WorkListIcon fill="white" />
        <NavText>관리내역</NavText>
      </NavLink>
    </Wrapper>
  );
}

export default SideBar;
