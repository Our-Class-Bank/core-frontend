import { styled } from "styled-components";
import CardItem from "../infoCard/CardItem";
import Account from "@/assets/images/MyBankIcon.svg";
import InstallmentSaving from "@/assets/images/Pig.svg";
import Stock from "@/assets/images/Chart.svg";
import CreditPoint from "@/assets/images/Bank.svg";
import { ReactComponent as Toggle } from "@/assets/images/Arrow.svg";

const CardItemWrapper = styled.li<{ disabled: boolean; selected: boolean }>`
  min-width: 300px;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.disabled ? "0.4" : "none")};
  cursor: pointer;
  color: ${(props) =>
    props.selected && !props.disabled && props.theme.mainBlue};
`;

const ToggleWrapper = styled.div`
  cursor: pointer;
  padding: 8px;
`;

interface AssetInfoProps {
  assetInfo: {
    creditPoint: number;
    accoutBalance: number;
  };
  handleCategoryView: (categoryId: string) => void;
  selected: string;
}

function AssetInfo({
  assetInfo,
  handleCategoryView,
  selected,
}: AssetInfoProps) {
  const assetInfoList = [
    {
      id: "bank",
      icon: Account,
      category: "통장",
      content: `${assetInfo.accoutBalance}진스`,
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

      content: `${assetInfo.creditPoint}점`,
    },
  ];
  return (
    <div>
      {assetInfoList.map((info) => (
        <CardItemWrapper
          key={info.id}
          onClick={() => {
            if (info.id === "saving" || info.id === "stock") {
              alert("아직 이용할 수 없는 서비스입니다.");
            } else {
              handleCategoryView(info.id);
            }
          }}
          disabled={info.id === "saving" || info.id === "stock"}
          selected={info.id === selected}
        >
          <CardItem
            icon={info.icon}
            category={info.category}
            content={info.content}
          />
          <ToggleWrapper>
            <Toggle fill={info.id === selected ? "blue" : "black"} />
          </ToggleWrapper>
        </CardItemWrapper>
      ))}
    </div>
  );
}

export default AssetInfo;
