import {
  Container,
  ExplanationContainer,
  DashboardCard,
  Title,
  Subtitle,
  DashboardCardsContainer,
  Content,
  Number,
  DemoLoginBtnContainer,
  DemoLoginBtn,
  AccountBtn,
  DemoLoginContainer,
  Column,
  GoBackButton,
} from "@/style/login/DashBoardStyle";
import {
  getUserCount,
  getRoles,
  getCreditEvaluationCount,
  getAccountHistoryCount,
} from "@/apis/dashboardApi";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function DashBoard() {
  const [demoLoginMode, setDemoLoginMode] = useState(false);
  const { data: userCountData, isLoading: userCountLoading } = useQuery(
    ["userCount"],
    getUserCount
  );
  const { data: rolesData, isLoading: rolesLoading } = useQuery(
    ["roles"],
    getRoles
  );
  const {
    data: creditEvaluationCountData,
    isLoading: creditEvaluationLoading,
  } = useQuery(["creditEvaluationCount"], getCreditEvaluationCount);

  const { data: accountHistoryCountData, isLoading: accountHistoryLoading } =
    useQuery(["accountHistoryCount"], getAccountHistoryCount);

  const goBackToDashboard = () => {
    setDemoLoginMode(false);
  };

  const goToDemoLogin = () => {
    setDemoLoginMode(true);
  };

  const dashBoard = (
    <>
      <ExplanationContainer>
        <h1>우리반은행은...</h1>
        <p>학급을 작은 사회로 만들어주는 사이트입니다.</p>
        <p>
          학생들은 우리반은행을 통해 자신의 자산과 신용점수를 자유롭게 확인할 수
          있으며
        </p>
        <p>
          특정 직업을 가진 학생들은 권한에 따라 다른 학생의 자산과 신용점수를
          관리합니다.
        </p>
      </ExplanationContainer>
      <DashboardCardsContainer>
        <DashboardCard>
          <Subtitle>현재 이용중인</Subtitle>
          <Title>유저의 수</Title>
          <Content>
            <Number>{userCountData?.data}</Number>
            <span>명</span>
          </Content>
        </DashboardCard>
        <DashboardCard>
          <Subtitle>유저가 가진</Subtitle>
          <Title>권한의 종류</Title>
          <Content>
            <Number>{rolesData?.data.length}</Number>
            <span>가지</span>
          </Content>
        </DashboardCard>
        <DashboardCard>
          <Title>총 입출금 횟수</Title>
          <Content>
            <Number>{creditEvaluationCountData?.data}</Number>
            <span>회</span>
          </Content>
        </DashboardCard>
        <DashboardCard>
          <Title>총 신용평가 횟수</Title>
          <Content>
            <Number>{accountHistoryCountData?.data}</Number>
            <span>회</span>
          </Content>
        </DashboardCard>
      </DashboardCardsContainer>
      <DemoLoginBtnContainer>
        <DemoLoginBtn onClick={goToDemoLogin}>체험하러가기 ➝</DemoLoginBtn>
      </DemoLoginBtnContainer>
    </>
  );

  const demoLogin = (
    <>
      <GoBackButton onClick={goBackToDashboard}>← 돌아가기</GoBackButton>
      <h1>체험할 역할을 선택해주세요</h1>
      <DemoLoginContainer>
        <Column>
          <AccountBtn>교사</AccountBtn>
          <AccountBtn>은행원</AccountBtn>
          <AccountBtn>신용평가위원</AccountBtn>
        </Column>
        <Column>
          <AccountBtn>학생1</AccountBtn>
          <AccountBtn>학생2</AccountBtn>
          <AccountBtn>학생3</AccountBtn>
        </Column>
      </DemoLoginContainer>
    </>
  );

  return (
    <Container>
      {!demoLoginMode && dashBoard}
      {demoLoginMode && demoLogin}
    </Container>
  );
}

export default DashBoard;
