import TableContainer from "@/style/common/TableContainer";
import { useState } from "react";
import styled from "styled-components";

const TitleContainer = styled.span`
  display: flex;
  align-items: center;
`;
function ClassCredit() {
  const [studentDetailMode, setStudentDetailMode] = useState(false);
  const [creditDetailStudent, setCreditDetailStudent] = useState("");

  const changeToStudentCredit = (studentName) => {
    setStudentDetailMode(true);
    setCreditDetailStudent(studentName);
  };

  const backToClassCredit = () => {
    setStudentDetailMode(false);
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
    <TableContainer title={containerTitle}>
      {!studentDetailMode && (
        <ClassCreditTable changeToStudentCredit={changeToStudentCredit} />
      )}
      {studentDetailMode && <CreditLogTable />}
    </TableContainer>
  );
}
export default ClassCredit;
