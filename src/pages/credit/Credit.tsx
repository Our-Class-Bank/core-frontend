import React, { useState } from "react";
import TableContainer from "@/style/common/TableContainer";

import { Container } from "@/style/common/CommonStyle";
import styled from "styled-components";
import ClassCreditTable from "./ClassCreditTable";
import CreditLogTable from "./CreditLogTable";
import CreditForm from "./CreditForm";
import { ReactComponent as BackIcon } from "@/assets/images/back.svg";
import FormHandleBtn from "@/style/common/FormHandleBtn";
import CreditFormTitle from "@/style/credit/CreditFormTitle";
import CreditChangeAll from "./CreditChangeAll";

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
const Title = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-left: 8px;
`;

const Credit: React.FC = () => {
  //"우리반 신용점수" 컴포넌트 관련
  const [studentDetailMode, setStudentDetailMode] = useState(false);
  const [creditDetailStudent, setCreditDetailStudent] = useState<string>("");

  const changeToStudentCredit = (studentName: string) => {
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
      <Title>
        <Blue>{creditDetailStudent}</Blue>의 신용점수 내역
      </Title>
    </TitleContainer>
  ) : (
    <Title>우리반 신용점수</Title>
  );

  //"입력 & 전체변경" 컴포넌트 관련
  const [isCreditChangeAll, setIsCreditChangeAll] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCreditChangeAll = (boolean: boolean) => {
    setIsCreditChangeAll(boolean);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const SubmitBtn: React.FC<{ onClick: (data: any) => void }> = ({
    onClick,
  }) => (
    <FormHandleBtn
      onClick={onClick}
      buttonType="submit"
      form="creditForm"
      isFormValid={isFormValid}
    >
      입력
    </FormHandleBtn>
  );

  return (
    <Container>
      <Horizontal>
        <TableContainer titlePart={containerTitle}>
          {!studentDetailMode && (
            <ClassCreditTable changeToStudentCredit={changeToStudentCredit} />
          )}
          {studentDetailMode && <CreditLogTable />}
        </TableContainer>

        <TableContainer title="최신 입력내역">
          <CreditLogTable />
        </TableContainer>

        <TableContainer
          titlePart={
            <CreditFormTitle
              isCreditChangeAll={isCreditChangeAll}
              handleCreditChangeAll={handleCreditChangeAll}
            />
          }
          width="527px"
          buttonPart={<SubmitBtn onClick={onSubmit} />}
        >
          {!isCreditChangeAll && (
            <CreditForm onSubmit={onSubmit} setIsFormValid={setIsFormValid} />
          )}
          {isCreditChangeAll && <CreditChangeAll />}
        </TableContainer>
      </Horizontal>
    </Container>
  );
};

export default Credit;
