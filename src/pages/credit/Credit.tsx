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
import { postCredit } from "@/apis/creditApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getEvaluatorLog } from "@/apis/creditApi";
import { StudentInfo } from "@/apis/infoApi";
import EvaluatorLogTable from "./EvaluatorLogTable";
import { useNavigate } from "react-router-dom";
import { getMyClassInfo } from "@/apis/infoApi";
import CreditChangeAll from "./CreditChangeAll";
import { postCreditChangeAll } from "@/apis/creditApi";

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

export interface CreditLog {
  id: number;
  username: string;
  changePoint: number;
  description: string;
  score: number;
  transactionAt: string;
}

export type CreditPostData = {
  description: string;
  changePoint: string;
};

const Credit: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: myClassData, isLoading: myClassLoading } = useQuery<
    Record<string, StudentInfo>
  >({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });

  //"우리반 신용점수" 컴포넌트 관련
  const [studentDetailMode, setStudentDetailMode] = useState(false);
  const [creditDetailStudent, setCreditDetailStudent] = useState("");

  const { data: evaluatorLogData, isLoading: evaluatorLogLoading } = useQuery<
    CreditLog[]
  >(["evaluatorLog"], getEvaluatorLog);

  const changeToStudentCredit = (username: string) => {
    setStudentDetailMode(true);
    setCreditDetailStudent(username);
  };

  const backToClassCredit = () => {
    setStudentDetailMode(false);
    setCreditDetailStudent("");
  };

  const containerTitle = studentDetailMode ? (
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

  const [isCreditChangeAll, setIsCreditChangeAll] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCreditChangeAll = (boolean: boolean) => {
    setIsCreditChangeAll(boolean);
  };

  const onSubmit = async (data: any) => {
    try {
      if (!isCreditChangeAll) {
        const { description, studentIds, changePoint } = data;

        const creditData = { description, changePoint };

        for (let i = 0; i < studentIds.length; i++) {
          await postCredit(creditData, studentIds[i]);
        }
      } else {
        if (!myClassData || typeof myClassData !== "object") {
          return;
        }
        const classDataKeys = Object.keys(myClassData);

        for (let i = 0; i < classDataKeys.length; i++) {
          const username = classDataKeys[i];
          await postCreditChangeAll(data, username);
        }
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
    } finally {
      queryClient.invalidateQueries({ queryKey: ["classCreditData"] });
      queryClient.invalidateQueries({ queryKey: ["evaluatorLog"] });
      navigate("/credit");
    }
  };

  const SubmitBtn: React.FC<{ onSubmit: (data: any) => void }> = () => (
    <FormHandleBtn
      isFormValid={isFormValid}
      form={isCreditChangeAll ? "creditChangeAllForm" : "creditForm"}
    >
      입력
    </FormHandleBtn>
  );

  if (evaluatorLogLoading || myClassLoading) {
    return <>loading...</>;
  }

  return (
    <Container>
      <Horizontal>
        <TableContainer titlePart={containerTitle}>
          {!studentDetailMode && (
            <ClassCreditTable changeToStudentCredit={changeToStudentCredit} />
          )}
          {studentDetailMode && (
            <CreditLogTable username={creditDetailStudent} />
          )}
        </TableContainer>

        {evaluatorLogData && (
          <TableContainer title="최신 입력내역">
            <EvaluatorLogTable />
          </TableContainer>
        )}

        <TableContainer
          titlePart={
            <CreditFormTitle
              isCreditChangeAll={isCreditChangeAll}
              handleCreditChangeAll={handleCreditChangeAll}
            />
          }
          width="527px"
          buttonPart={<SubmitBtn onSubmit={onSubmit} />}
        >
          {!isCreditChangeAll && (
            <CreditForm onSubmit={onSubmit} setIsFormValid={setIsFormValid} />
          )}
          {isCreditChangeAll && (
            <CreditChangeAll
              onSubmit={onSubmit}
              setIsFormValid={setIsFormValid}
            />
          )}
        </TableContainer>
      </Horizontal>
    </Container>
  );
};

export default Credit;
