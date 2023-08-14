import React from "react";
import {
  BigText,
  Text,
  TypeWrapper,
  TypeText,
  Line,
  PlusIcon,
  MinusIcon,
  ConfirmBtn,
} from "@/style/transfer/ConfirmMessageStyle";

interface StudentData {
  firstStudent: string;
  numberOfRestStudents: number;
}

interface SubmittedData {
  type: "수입" | "지출";
  amount: number;
  students: string[];
}

interface ConfirmMessageProps {
  submittedData: SubmittedData;
  showForm: () => void;
}

function ConfirmMessage({ submittedData, showForm }: ConfirmMessageProps) {
  const { type, amount, students } = submittedData;
  const firstStudent = students[0];
  const numberOfRestStudents = students.length - 1;
  const studentBlock: string =
    students.length === 1
      ? firstStudent
      : `${firstStudent}외 ${numberOfRestStudents}명의 학생`;

  const typeBlock =
    type === "수입" ? (
      <TypeWrapper>
        <PlusIcon />
        <TypeText>수입</TypeText>
      </TypeWrapper>
    ) : (
      <TypeWrapper>
        <MinusIcon />
        <TypeText>지출</TypeText>
      </TypeWrapper>
    );

  return (
    <>
      <Text>
        <Line>
          <BigText>{studentBlock}</BigText>에게
        </Line>
        <Line>
          {typeBlock}
          <BigText>{amount}진스</BigText>를 입력하시겠습니까?
        </Line>
        <Line>
          <ConfirmBtn>예</ConfirmBtn>
          <ConfirmBtn onClick={showForm}>아니오</ConfirmBtn>
        </Line>
      </Text>
    </>
  );
}

export default ConfirmMessage;
