import { useState, useEffect } from "react";
import TableContainer from "@/style/common/TableContainer";
import TransactionList from "@/components/transactionLog/TransactionList";
import { styled } from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getStudentCreditLogByTeacher } from "@/apis/creditApi";
import { getStudentTransferLogByTeacher } from "@/apis/transferApi";
import ClassCreditTable from "../credit/ClassCreditTable";
import CreditLogTable from "../credit/CreditLogTable";
import { getStudentCreditLog } from "@/apis/creditApi";
import { CreditLog } from "../credit/Credit";
import { Blue, TitleContainer, Title } from "@/pages/credit/Credit";
import { ReactComponent as BackIcon } from "@/assets/images/back.svg";
import { StudentInfo } from "@/apis/infoApi";
import { getMyClassInfo } from "@/apis/infoApi";
import EvaluatorLogTable from "@/pages/credit/EvaluatorLogTable";
import explanations from "@/utils/explanation";

const Header = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: black;
  span {
    color: ${(props) => props.theme.mainBlue};
  }
`;

function TeacherHome() {
  const [studentDetailMode, setStudentDetailMode] = useState(false);
  const [creditDetailStudent, setCreditDetailStudent] = useState("");
  const [creditStudentLogData, setCreditStudentLogData] = useState<CreditLog[]>(
    []
  );
  const { data: myClassData, isLoading: myClassLoading } = useQuery<
    Record<string, StudentInfo>
  >({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });

  const { data: classCreditData, isLoading: classCreditLoading } = useQuery(
    ["classCredit"],
    getStudentCreditLogByTeacher
  );

  const { data: classTransferData, isLoading: classTransferLoading } = useQuery(
    ["classTransfer"],
    getStudentTransferLogByTeacher
  );

  useEffect(() => {
    if (creditDetailStudent) {
      getStudentCreditLog(creditDetailStudent)
        .then((data) => {
          setCreditStudentLogData(data);
        })
        .catch((error) => {
          return error;
        });
    }
  }, [creditDetailStudent]);

  const changeToStudentCredit = (username: string) => {
    setStudentDetailMode(true);
    setCreditDetailStudent(username);
  };
  const backToClassCredit = () => {
    setStudentDetailMode(false);
    setCreditDetailStudent("");
  };

  if (classCreditLoading || classTransferLoading || myClassLoading) {
    return <>Loading...</>;
  }

  const creditTitle = studentDetailMode ? (
    <TitleContainer>
      <BackIcon onClick={backToClassCredit} />
      <Title>
        <Blue>{myClassData && myClassData[creditDetailStudent].name}</Blue>의
        신용점수 내역
      </Title>
    </TitleContainer>
  ) : (
    <Title>우리반 신용점수</Title>
  );

  return (
    <>
      <TableContainer
        width="100%"
        height="100%"
        maxHeight="550px"
        titlePart={<Header>입출금 내역</Header>}
        explanation={explanations.classTransactionLogExplaantion}
      >
        <TransactionList
          data={classTransferData !== undefined ? classTransferData.data : []}
          transactionType="myTransaction"
        />
      </TableContainer>
      <TableContainer
        explanation={explanations.classCreditTableForEvaluatorExplanation}
        titlePart={creditTitle}
        width="100%"
        height="550px"
      >
        {!studentDetailMode && (
          <ClassCreditTable changeToStudentCredit={changeToStudentCredit} />
        )}
        {studentDetailMode && <CreditLogTable data={creditStudentLogData} />}
      </TableContainer>
      <TableContainer
        explanation={explanations.classCreditLogExplanation}
        title="신용점수 내역"
        width="100%"
        height="100%"
        minHeight="416px"
        maxHeight="550px"
      >
        <EvaluatorLogTable data={classCreditData} />
      </TableContainer>
    </>
  );
}

export default TeacherHome;
