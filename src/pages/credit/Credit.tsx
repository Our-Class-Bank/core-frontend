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
//import CreditChangeAll from "./CreditChangeAll";
import { postCredit } from "@/apis/creditApi";
import { CreditFormData } from "@/pages/credit/CreditForm";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getEvaluatorLog } from "@/apis/creditApi";
import { getMyClassInfo, StudentInfo } from "@/apis/infoApi";
import EvaluatorLogTable from "./EvaluatorLogTable";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

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
  createdAt: string;
}

export type CreditPostData = {
  description: string;
  changePoint: string;
};

const defaultCreditDetailStudent = {
  username: "",
  name: "",
  pocketmoneyAccountNo: "",
  userClass: {
    schoolName: "",
    grade: 0,
    classNumber: 0,
    attendanceNumber: 0,
  },
};

const Credit: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  //"우리반 신용점수" 컴포넌트 관련
  const [studentDetailMode, setStudentDetailMode] = useState(false);
  const [creditDetailStudent, setCreditDetailStudent] = useState<StudentInfo>(
    defaultCreditDetailStudent
  );

  const { data: myClassData, isLoading: myClassLoading } = useQuery<
    StudentInfo[]
  >({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });

  const { data: evaluatorLogData, isLoading: evaluatorLogLoading } = useQuery<
    CreditLog[]
  >(["evaluatorLog"], getEvaluatorLog);

  console.log(evaluatorLogData);

  const changeToStudentCredit = (studentName: string) => {
    if (myClassData) {
      const studentDetail = myClassData.find(
        (student) => student.name === studentName
      );
      if (studentDetail) {
        setStudentDetailMode(true);
        setCreditDetailStudent(studentDetail);
      }
    }
  };

  const backToClassCredit = () => {
    setStudentDetailMode(false);
    setCreditDetailStudent(defaultCreditDetailStudent);
  };

  const containerTitle = studentDetailMode ? (
    <TitleContainer>
      <BackIcon onClick={backToClassCredit} />
      <Title>
        <Blue>{creditDetailStudent.name}</Blue>의 신용점수 내역
      </Title>
    </TitleContainer>
  ) : (
    <Title>우리반 신용점수</Title>
  );
  {
    /*
 
  const [isCreditChangeAll, setIsCreditChangeAll] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCreditChangeAll = (boolean: boolean) => {
    setIsCreditChangeAll(boolean);
  };*/
  }

  //"입력 & 전체변경" 컴포넌트 관련
  const [isFormValid, setIsFormValid] = useState(false);

  const onSubmit: SubmitHandler<CreditFormData> = async (data) => {
    try {
      const { description, studentNumbers, changePoint } = data;
      console.log(studentNumbers);
      console.log(description);

      if (!Array.isArray(studentNumbers)) {
        console.error("studentNumbers is not an array");
        return;
      }

      const creditData = { description, changePoint };

      for (let i = 0; i < studentNumbers.length; i++) {
        const studentInfo = myClassData && myClassData[studentNumbers[i]];
        if (studentInfo && studentInfo.username) {
          const { username } = studentInfo;
          console.log(creditData, username);
          await postCredit(creditData, username);
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
      console.log("finally");
      queryClient.invalidateQueries({ queryKey: ["myClassData"] });
      queryClient.invalidateQueries({ queryKey: ["evaluatorLog"] });
      navigate("/credit");
    }
  };

  const SubmitBtn: React.FC<{ onSubmit: (data: CreditFormData) => void }> = ({
    onSubmit,
  }) => (
    <FormHandleBtn onClick={onSubmit} isFormValid={isFormValid}>
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
            <CreditLogTable username={creditDetailStudent.username} />
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
            //isCreditChangeAll={isCreditChangeAll}
            //handleCreditChangeAll={handleCreditChangeAll}
            />
          }
          width="527px"
          //????
          buttonPart={<SubmitBtn onSubmit={onSubmit} />}
        >
          {/*{!isCreditChangeAll && (
            <CreditForm onSubmit={onSubmit} setIsFormValid={setIsFormValid} />
          )}
          {isCreditChangeAll && <CreditChangeAll />}*/}
          <CreditForm onSubmit={onSubmit} setIsFormValid={setIsFormValid} />
        </TableContainer>
      </Horizontal>
    </Container>
  );
};

export default Credit;
