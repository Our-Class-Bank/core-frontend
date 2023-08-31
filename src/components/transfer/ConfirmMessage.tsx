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
import { useQuery } from "@tanstack/react-query";
import { getMyClassInfo } from "@/apis/infoApi";
import { StudentInfo } from "@/apis/infoApi";

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
  //여기서는 context 쓰는게 낫지 않을까 싶다.
  const { data: myClassData, isLoading: myClassLoading } = useQuery<
    StudentInfo[]
  >({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });
  console.log(submittedData);
  const { withdrawOrDeposit, amount, studentNumbers } = submittedData;
  const firstStudent =
    studentNumbers.length > 0
      ? myClassData?.[studentNumbers[0]]?.name || ""
      : "";

  const numberOfRestStudents = studentNumbers.length - 1;
  const studentBlock: string =
    studentNumbers.length > 0
      ? studentNumbers.length === 1
        ? firstStudent
        : `${firstStudent}외 ${numberOfRestStudents}명의 학생`
      : "";

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

  if (myClassLoading) {
    return <>Loading...</>;
  }

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
