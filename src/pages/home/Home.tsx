import { getMyInfo } from "@/apis/authApi";
import { getMyAccountLog } from "@/apis/myBankApi";
import AssetInfo from "@/components/assetInfo/AssetInfo";
import MyTransactionLog from "@/components/myTransactionLog/MyTransactionLog";
import PurchaseLog from "@/components/purchaseLog/PurchaseLog";
import { TransactionData } from "@/components/transactionLog/TransactionLog";
import { Container } from "@/style/common/CommonStyle";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";
import { useState } from "react";

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  padding: 60px auto;
  gap: 30px;
  margin: 30px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
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

interface UserClassType {
  schoolName: string;
  grade: number;
  classNumber: number;
  attendanceNumber: number;
}
export interface MyInfoDataType {
  data: {
    user: {
      username: string;
      name: string;
      pocketmoneyAccountNo: string;
      userClass: UserClassType;
    };
  };
}

interface MyAccountLog {
  data: TransactionData[];
}

function Home() {
  const [categoryView, setCategoryView] = useState("bank");

  const handleCategoryView = (categoryId: string) => {
    setCategoryView(categoryId);
  };
  const { data: myInfoData, isLoading: myInfoLoading } =
    useQuery<MyInfoDataType>(["myInfo"], getMyInfo);

  const { data: myAccountLogData, isLoading: myAccountLogLoading } =
    useQuery<MyAccountLog>(
      [
        "myAccountLog",
        myInfoData !== undefined
          ? myInfoData.data.user.pocketmoneyAccountNo
          : "",
      ],
      getMyAccountLog,
      {
        enabled: !!myInfoData,
      }
    );

  if (myInfoLoading || myAccountLogLoading) {
    return <>loading...</>;
  }

  return (
    <Container>
      <HomeContainer>
        <LeftContainer>
          <div>
            <Header>
              <span>{myInfoData?.data.user.name}</span>님의 자산정보
            </Header>
            <AssetInfo handleCategoryView={handleCategoryView} />
          </div>
          <div>
            <Header>내 구매상품</Header>
            <PurchaseLog />
          </div>
        </LeftContainer>
        {categoryView === "bank" && (
          <div>
            <Header>
              <span>통장</span> 상세내역
            </Header>
            <MyTransactionLog
              data={myAccountLogData !== undefined ? myAccountLogData.data : []}
            />
          </div>
        )}
        {categoryView === "credit" && (
          <div>
            <div>
              <Header>내 신용점수 내역</Header>
            </div>
            <div>
              <Header>우리반 신용점수</Header>
            </div>
          </div>
        )}
      </HomeContainer>
    </Container>
  );
}
export default Home;
