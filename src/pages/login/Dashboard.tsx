import {
  Container,
  DashboardCard,
  Title,
  Subtitle,
  DashboardCardsContainer,
  Content,
  Number,
} from "@/style/login/DashBoardStyle";
import {
  getUserCount,
  getRoles,
  getCreditEvaluationCount,
  getAccountHistoryCount,
} from "@/apis/dashboardApi";
import { useQuery } from "@tanstack/react-query";

function DashBoard() {
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

  return (
    <Container>
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
    </Container>
  );
}

export default DashBoard;
