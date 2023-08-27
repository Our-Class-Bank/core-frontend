import { getMyInfo } from "@/apis/authApi";
import { getMyAccountLog } from "@/apis/myBankApi";
import AssetInfo from "@/components/assetInfo/AssetInfo";
import MyTransactionLog from "@/components/myTransactionLog/MyTransactionLog";
import PurchaseLog from "@/components/purchaseLog/PurchaseLog";
import { TransactionListDataType } from "@/components/transactionLog/TransactionList";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  padding: 40px 60px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
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

interface MyInfoDataType {
  data: {
    user: {
      username: string;
      name: string;
      pocketmoneyAccountNo: string;
      userClass: {
        schoolName: string;
        grade: number;
        classNumber: number;
        attendanceNumber: number;
      };
    };
  };
}

function Home() {
  const { data: myInfoData, isLoading: myInfoLoading } =
    useQuery<MyInfoDataType>(["myInfo"], getMyInfo);

  const { data: myAccountLogData, isLoading: myAccountLogLoading } =
    useQuery<TransactionListDataType>(
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
      <LeftContainer>
        <div>
          <Header>
            <span>{myInfoData?.data.user.name}</span>님의 자산정보
          </Header>
          <AssetInfo />
        </div>
        <div>
          <Header>내 구매상품</Header>
          <PurchaseLog />
        </div>
      </LeftContainer>
      <div>
        <Header>
          <span>통장</span> 상세내역
        </Header>
        <MyTransactionLog
          data={myAccountLogData !== undefined ? myAccountLogData.data : []}
        />
      </div>
    </Container>
  );
}
export default Home;
