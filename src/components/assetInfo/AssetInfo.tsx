import { styled } from "styled-components";
import CardItem from "../infoCard/CardItem";
import Account from "@/assets/images/MyBankIcon.svg";
import InstallmentSaving from "@/assets/images/Pig.svg";
import Stock from "@/assets/images/Chart.svg";
import CreditPoint from "@/assets/images/Bank.svg";
import { ReactComponent as Toggle } from "@/assets/images/Arrow.svg";

const Container = styled.div``;

const CardWrapper = styled.ul`
  width: 364px;
  padding: 10px;
  border-radius: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderGray};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

const CardItemWrapper = styled.li`
  display: flex;
  align-items: center;
`;

const ToggleWrapper = styled.div`
  cursor: pointer;
  padding: 8px;
`;

const Header = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: black;
  span {
    color: ${(props) => props.theme.mainBlue};
  }
  margin-bottom: 12px;
`;

const assetInfoList = [
  {
    icon: Account,
    category: "통장",
    content: "1,000진스",
  },
  {
    icon: InstallmentSaving,
    category: "적금",
    content: "1,000진스",
  },
  {
    icon: Stock,
    category: "주식",
    content: "1,000진스",
  },
  {
    icon: CreditPoint,
    category: "신용점수",
    content: "1,000진스",
  },
];

function AssetInfo() {
  return (
    <Container>
      <Header>
        <span>{"김은행"}</span>님의 자산정보
      </Header>
      <CardWrapper>
        {assetInfoList.map((info) => (
          <CardItemWrapper>
            <CardItem
              icon={info.icon}
              category={info.category}
              content={info.content}
            />
            <ToggleWrapper>
              <Toggle />
            </ToggleWrapper>
          </CardItemWrapper>
        ))}
      </CardWrapper>
    </Container>
  );
}

export default AssetInfo;
