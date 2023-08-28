import React, { useState } from "react";
import TableContainer from "@/style/common/TableContainer";
import axios from "axios";
import { Container } from "@/style/common/CommonStyle";
import styled from "styled-components";
import ClassCreditTable from "./ClassCreditTable";
import CreditLogTable from "./CreditLogTable";
import CreditForm from "./CreditForm";
import { ReactComponent as BackIcon } from "@/assets/images/back.svg";
import FormHandleBtn from "@/style/common/FormHandleBtn";
import CreditFormTitle from "@/style/credit/CreditFormTitle";
import CreditChangeAll from "./CreditChangeAll";
import { postCredit } from "@/apis/creditApi";
import { CreditFormData } from "@/pages/credit/CreditForm";
import { useQuery } from "@tanstack/react-query";
import { getEvaluatorLog } from "@/apis/creditApi";

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

interface EvaluatorLog {
  id: number;
  username: string;
  changePoint: number;
  description: string;
  score: number;
  createdAt: string;
}

const Credit: React.FC = () => {
  const { data: evaluatorLogData, isLoading: evaluatorLogLoading } = useQuery<
    EvaluatorLog[]
  >(["evaluatorLog"], getEvaluatorLog);

  console.log(evaluatorLogData);
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

  const onSubmit = async (data: CreditFormData) => {
    try {
      const { description, studentNumbers, changePoint } = data;

      const creditData = { description, changePoint };

      for (let i = 0; i < studentNumbers.length; i++) {
        const { username } = myClassData[parseInt(studentNumbers[i])];
        console.log(creditData, username);
        await postCredit(creditData, username);
      }

      setIsFormValid(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 422) {
          alert("");
        }
        if (error.response?.status === 401) {
          alert("");
        } else {
          alert("");
        }
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

  const SubmitBtn: React.FC<{ onClick: (data: CreditFormData) => void }> = ({
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

  if (evaluatorLogLoading) {
    return <>loading...</>;
  }

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
