import styled from "styled-components";
import { Link } from "react-router-dom";
import whiteMoneyIcon from "../../assets/images/whiteMoney.png";
import whiteArrowIcon from "../../assets/images/whiteArrow.png";
import whiteWorkListIcon from "../../assets/images/whiteWorkList.png";

const Wrapper = styled.div`
  width: 270px;
  height: 100vh;
  background: #2f3fd4;
`;

const NavLink = styled(Link)`
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

const NavText = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 27px;
  padding: 5px;

  color: #ffffff;
`;

const NavIcon = styled.img`
  width: 50px;
  height: 50px;
  padding: 5px;
`;

const NameBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 195px;
  height: 60px;
  color: #fff;
`;
const Name = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 27px;

  color: #ffffff;
`;
const Text = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 200;
  font-size: 28px;
  line-height: 27px;

  color: #ffffff;
`;
function SideBar() {
  const userName = "김은행";
  return (
    <Wrapper>
      <NameBlock>
        <Name>{userName}</Name>
        <Text>님</Text>
      </NameBlock>
      <NavLink to="/">
        <NavIcon src={whiteMoneyIcon} alt="money" />
        <NavText>내 통장</NavText>
      </NavLink>
      <NavLink to="/transfer">
        <NavIcon src={whiteArrowIcon} alt="arrow" />
        <NavText>입출금</NavText>
      </NavLink>
      <NavLink to="/work-list">
        <NavIcon src={whiteWorkListIcon} alt="money" />
        <NavText>관리내역</NavText>
      </NavLink>
    </Wrapper>
  );
}

export default SideBar;
