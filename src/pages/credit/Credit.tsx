import { useState } from "react";
import TableContainer from "@/style/common/TableContainer";
import { Container } from "@/style/common/CommonStyle";
import styled from "styled-components";
import ClassCreditTable from "./ClassCreditTable";
import CreditLogTable from "./CreditLogTable";
import { ReactComponent as BackIcon } from "@/assets/images/back.svg";

const Horizontal = styled.div`
  display: flex;
`;
const Blue = styled.span`
  color: #2f3fd4;
  margin-left: 7px;
`;

const TitleContainer = styled.span`
  display: flex;
  align-items: center;
`;

function Credit() {
  const [studentDetailMode, setStudentDetailMode] = useState(false);
  const [creditDetailStudent, setCreditDetailStudent] = useState("");

  const handleCreditDetailStudent = (studentName) => {
    setCreditDetailStudent(studentName);
  };

  const handleStudentDetailMode = (boolean) => setStudentDetailMode(boolean);

  const backToClassCredit = () => {
    handleStudentDetailMode(false);
    setCreditDetailStudent("");
  };

  const containerTitle = studentDetailMode ? (
    <TitleContainer>
      <BackIcon onClick={backToClassCredit} />
      <Blue>{creditDetailStudent}</Blue>의 신용점수 내역
    </TitleContainer>
  ) : (
    <>우리반 신용점수</>
  );

  return (
    <Container>
      <Horizontal>
        <TableContainer title={containerTitle}>
          {!studentDetailMode && (
            <ClassCreditTable
              handleStudentDetailMode={handleStudentDetailMode}
              handleCreditDetailStudent={handleCreditDetailStudent}
            />
          )}
          {studentDetailMode && <CreditLogTable />}
        </TableContainer>
        <TableContainer title="최신 입력내역">
          <CreditLogTable />
        </TableContainer>
      </Horizontal>
    </Container>
  );
}

export default Credit;
