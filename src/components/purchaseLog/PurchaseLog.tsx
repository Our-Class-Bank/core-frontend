import { styled } from "styled-components";
import CardItem from "../infoCard/CardItem";
import Account from "@/assets/images/MyBankIcon.svg";
import InstallmentSaving from "@/assets/images/Pig.svg";
import Stock from "@/assets/images/Chart.svg";
import CreditPoint from "@/assets/images/Bank.svg";

const CardWrapper = styled.ul`
  width: 364px;
  padding: 10px;
  border-radius: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderGray};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  height: 100%;
`;

const CardItemWrapper = styled.li`
  display: flex;
  align-items: center;
`;

const CostText = styled.p`
  font-size: 16px;
  font-weight: 600;
  width: 60px;
`;

const purchaseLogList = [
  {
    icon: Account,
    category: "음식",
    content: "비타민",
    cost: 30,
  },
  {
    icon: InstallmentSaving,
    category: "쿠폰",
    content: "아침활동 면제권",
    cost: 30,
  },
  {
    icon: Stock,
    category: "쿠폰",
    content: "음악 이용권",
    cost: 30,
  },
  {
    icon: CreditPoint,
    category: "쿠폰",
    content: "독서록 면제권",
    cost: 30,
  },
];

function PurchaseLog() {
  return (
    <div>
      {/*<CardWrapper>
        {purchaseLogList.map((info) => (
          <CardItemWrapper>
            <CardItem
              icon={info.icon}
              category={info.category}
              content={info.content}
            />
            <CostText>{info.cost}진스</CostText>
          </CardItemWrapper>
        ))}
        </CardWrapper>*/}
    </div>
  );
}

export default PurchaseLog;
