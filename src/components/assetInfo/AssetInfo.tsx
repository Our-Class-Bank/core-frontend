import { styled } from "styled-components";
import CardItem from "../infoCard/CardItem";
import Account from "@/assets/images/MyBankIcon.svg";
import InstallmentSaving from "@/assets/images/Pig.svg";
import Stock from "@/assets/images/Chart.svg";
import CreditPoint from "@/assets/images/Bank.svg";
import { ReactComponent as Toggle } from "@/assets/images/Arrow.svg";

const CardWrapper = styled.ul`
  width: 364px;
  padding: 10px;
  border-radius: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderGray};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

const CardItemWrapper = styled.li<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.disabled ? "0.4" : "none")};
  cursor: pointer;
`;

const ToggleWrapper = styled.div`
  cursor: pointer;
  padding: 8px;
`;

const assetInfoList = [
  {
    id: "bank",
    icon: Account,
    category: "통장",

    content: "1,000진스",
  },
  {
    id: "saving",
    icon: InstallmentSaving,
    category: "적금",

    content: "1,000진스",
  },
  {
    id: "stock",
    icon: Stock,
    category: "주식",

    content: "1,000진스",
  },
  {
    id: "credit",
    icon: CreditPoint,
    category: "신용점수",

    content: "1,000진스",
  },
];

function AssetInfo({
  handleCategoryView,
}: {
  handleCategoryView: (categoryId: string) => void;
}) {
  return (
    <div>
      <CardWrapper>
        {assetInfoList.map((info) => (
          <CardItemWrapper
            onClick={() => {
              if (info.id === "saving" || info.id === "stock") {
                alert("아직 이용할 수 없는 서비스입니다.");
              } else {
                handleCategoryView(info.id);
              }
            }}
            disabled={info.id === "saving" || info.id === "stock"}
          >
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
    </div>
  );
}

export default AssetInfo;
