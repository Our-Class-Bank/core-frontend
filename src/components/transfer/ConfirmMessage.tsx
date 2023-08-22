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
import { SubmitData } from "@/components/transfer/TransferForm";
import { useContext } from "react";
import ClassStudentsContext from "@/store/ClassStudentsContext";

interface ConfirmMessageProps {
  submittedData: SubmitData;
  showForm: () => void;
  handleTransfer: () => void;
}

function ConfirmMessage({
  submittedData,
  showForm,
  handleTransfer,
}: ConfirmMessageProps) {
  const { students } = useContext(ClassStudentsContext);
  const { withdrawOrDeposit, amount, studentNumbers } = submittedData;
  const firstStudent = students && students[parseInt(studentNumbers[0])].name;
  console.log(withdrawOrDeposit);
  const numberOfRestStudents = studentNumbers.length - 1;
  const studentBlock: string =
    studentNumbers.length === 1
      ? firstStudent
      : `${firstStudent}외 ${numberOfRestStudents}명의 학생`;

  const withdrawOrDepositBlock =
    withdrawOrDeposit === "수입" ? (
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
          {withdrawOrDepositBlock}
          <BigText>{amount}진스</BigText>를 입력하시겠습니까?
        </Line>
        <Line>
          <ConfirmBtn
            onClick={handleTransfer}
            buttonType="submit"
            form="transferForm"
          >
            예
          </ConfirmBtn>
          <ConfirmBtn
            onClick={showForm}
            buttonType="button"
            form="transferForm"
          >
            아니오
          </ConfirmBtn>
        </Line>
      </Text>
    </>
  );
}

export default ConfirmMessage;
