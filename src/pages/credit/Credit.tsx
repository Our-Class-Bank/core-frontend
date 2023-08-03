import { useState } from "react";
import TableContainer from "@/style/common/TableContainer";
import { Container } from "@/style/common/CommonStyle";
import styled from "styled-components";
import ClassCreditTable from "./ClassCreditTable";
import CreditLogTable from "./CreditLogTable";
import CreditForm from "./CreditForm";
import { ReactComponent as BackIcon } from "@/assets/images/back.svg";
import FormHandleBtn from "@/style/common/FormHandleBtn";
import { useForm } from "react-hook-form";

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
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCreditDetailStudent = (studentName) => {
    setCreditDetailStudent(studentName);
  };

  const handleStudentDetailMode = (boolean) => setStudentDetailMode(boolean);

  const backToClassCredit = () => {
    handleStudentDetailMode(false);
    setCreditDetailStudent("");
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const containerTitle = studentDetailMode ? (
    <TitleContainer>
      <BackIcon onClick={backToClassCredit} />
      <Blue>{creditDetailStudent}</Blue>의 신용점수 내역
    </TitleContainer>
  ) : (
    <>우리반 신용점수</>
  );
  //왜 const SubmitBtn = <FormBtn>입력</FormBtn>; 하면 에러가 뜨나?
  const SubmitBtn = ({ onClick }) => {
    return (
      //원래는 form 속성을 넣는 것이 아닌, onClick 속성을 넣어 submit를 구현하려하였으나, 아래의 onClick에서는 원하는대로 submit이 구현되지 않음. 왜?
      <FormHandleBtn
        isFormValid={isFormValid}
        buttonType="submit"
        form="creditForm"
        onClick={onClick}
      >
        입력
      </FormHandleBtn>
    );
  };

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
        <TableContainer
          title="신용점수 입력"
          width="527px"
          buttonPart={<SubmitBtn onClick={onSubmit} />}
        >
          <CreditForm onSubmit={onSubmit} setIsFormValid={setIsFormValid} />
        </TableContainer>
      </Horizontal>
    </Container>
  );
}

export default Credit;
