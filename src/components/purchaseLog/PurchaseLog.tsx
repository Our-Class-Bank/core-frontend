import { styled } from "styled-components";
import CouponIcon from "@/assets/images/Coupon.svg";
import CandyIcon from "@/assets/images/Candy.svg";
import CardItem from "@/components/infoCard/CardItem";

const CardWrapper = styled.ul`
  width: 364px;
  padding: 10px;
  border-radius: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderGray};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  height: 100%;
  opacity: 0.4;
`;

const CardItemWrapper = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CostText = styled.p`
  font-size: 16px;
  font-weight: 600;
  width: 60px;
`;

const purchaseLogList = [
  {
    icon: CandyIcon,
    category: "음식",
    content: "비타민",
    cost: 30,
  },
  {
    icon: CouponIcon,
    category: "쿠폰",
    content: "아침활동 면제권",
    cost: 30,
  },
  {
    icon: CouponIcon,
    category: "쿠폰",
    content: "음악 이용권",
    cost: 30,
  },
  {
    icon: CouponIcon,
    category: "쿠폰",
    content: "독서록 면제권",
    cost: 30,
  },
];

function PurchaseLog() {
  return (
    <CardWrapper>
      {purchaseLogList.map((info, idx) => (
        <CardItemWrapper key={idx}>
          <CardItem
            icon={info.icon}
            category={info.category}
            content={info.content}
          />
          <CostText>{info.cost}진스</CostText>
        </CardItemWrapper>
      ))}
    </CardWrapper>
  );
}

export default PurchaseLog;
