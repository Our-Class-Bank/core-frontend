import { getMyInfo } from "@/apis/authApi";
import { getMyAccountLog } from "@/apis/myBankApi";
import AssetInfo from "@/components/assetInfo/AssetInfo";
import PurchaseLog from "@/components/purchaseLog/PurchaseLog";
import { TransactionData } from "@/components/transactionLog/TransactionLog";
import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";
import { useState } from "react";
import ClassCreditTable from "../credit/ClassCreditTable";
import TableContainer from "@/style/common/TableContainer";
import CreditLogTable from "../credit/CreditLogTable";
import { getMyCredit } from "@/apis/creditApi";
import TransactionList from "@/components/transactionLog/TransactionList";
import { parseJwt } from "@/utils/parseJwt";
import TeacherHome from "./TeacherHome";
import explanations from "@/utils/explanation";

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  padding: 90px 30px 30px 240px;
  margin: 0 auto;
  gap: 30px;
`;

const Header = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: black;
  span {
    color: ${(props) => props.theme.mainBlue};
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 100%;
`;

const CreditPointCardWrapper = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  span {
    color: ${(props) => props.theme.mainBlue};
  }
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
  const savedAccessToken = localStorage.getItem("accessToken");
  const userRoles = savedAccessToken && parseJwt(savedAccessToken).roles;

  const handleCategoryView = (categoryId: string) => {
    setCategoryView(categoryId);
  };
  const { data: myInfoData, isLoading: myInfoLoading } =
    useQuery<MyInfoDataType>(["myInfo"], getMyInfo);

  const { data: myCreditData, isLoading: myCreditLoading } = useQuery(
    ["myCredit"],
    getMyCredit
  );

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

  if (myInfoLoading || myAccountLogLoading || myCreditLoading) {
    return <>loading...</>;
  }

  return (
    <HomeContainer>
      {userRoles.includes("ROLE_TEACHER") ? (
        <TeacherHome />
      ) : (
        <>
          <LeftContainer>
            <TableContainer
              explanation={explanations.assetInfoExplanation}
              width="100%"
              height="100%"
              titlePart={
                <Header>
                  <span>{myInfoData?.data.user.name}</span>님의 자산정보
                </Header>
              }
            >
              <AssetInfo
                assetInfo={{
                  creditPoint:
                    myCreditData?.data.length !== 0
                      ? myCreditData?.data[0].score
                      : 0,
                  accoutBalance: myAccountLogData?.data[0]?.balance as number,
                }}
                handleCategoryView={handleCategoryView}
                selected={categoryView}
              />
            </TableContainer>
            <TableContainer
              explanation={explanations.purchaseLogExplanation}
              title="내 구매상품"
              width="100%"
              height="100%"
            >
              <PurchaseLog />
            </TableContainer>
          </LeftContainer>
          {categoryView === "bank" && (
            <TableContainer
              explanation={explanations.myBankTableExplanation}
              width="100%"
              height="100%"
              maxHeight="550px"
              titlePart={
                <Header>
                  <span>통장</span> 상세내역
                </Header>
              }
            >
              <TransactionList
                data={
                  myAccountLogData !== undefined ? myAccountLogData.data : []
                }
                transactionType="myTransaction"
              />
            </TableContainer>
          )}
          {categoryView === "credit" && (
            <>
              <div>
                <TableContainer
                  title="내 신용점수 내역"
                  width="240px"
                  height="86px"
                  maxHeight="550px"
                  explanation={explanations.myCreditTableExplanation}
                >
                  <CreditPointCardWrapper>
                    <span>내 신용점수</span>
                    {myCreditData?.data.length !== 0
                      ? myCreditData?.data[0].score
                      : 0}
                    점
                  </CreditPointCardWrapper>
                </TableContainer>
                <TableContainer width="240px" height="100%" minHeight="416px">
                  <CreditLogTable data={myCreditData?.data} />
                </TableContainer>
              </div>
              <div>
                <TableContainer
                  title="우리반 신용점수"
                  width="100%"
                  height="550px"
                  explanation={explanations.classCreditTableExplanation}
                >
                  <ClassCreditTable />
                </TableContainer>
              </div>
            </>
          )}
        </>
      )}
    </HomeContainer>
  );
}
export default Home;
