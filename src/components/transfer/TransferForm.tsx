import React from "react";
import {
  InputContainer,
  Input,
  Form,
  NextBtn,
} from "@/style/transfer/TransferFormStyle";
import FormBtn from "@/style/common/FormBtn";
import StudentList from "./StudentList";
import { useForm } from "react-hook-form";

export type SubmitData = {
  type: "마켓" | "벌금" | "기타" | "월급" | "상금" | "기타";
  amount: number;
  students: [];
  description: string;
  withdrawOrDeposit: "수입" | "지출";
};

interface TransferFormProps {
  onSubmit: (data: SubmitData) => void;
}

const WithdrawOrDepositSelection: React.FC<{
  watchWithdrawOrDeposit: string;
  setValue: Function;
}> = ({ watchWithdrawOrDeposit, setValue }) => (
  <InputContainer>
    <h3>분류</h3>
    <FormBtn
      isCurrent={watchWithdrawOrDeposit === "지출"}
      onClick={() => setValue("withdrawOrDeposit", "지출")}
    >
      지출
    </FormBtn>
    <FormBtn
      isCurrent={watchWithdrawOrDeposit === "수입"}
      onClick={() => setValue("withdrawOrDeposit", "수입")}
    >
      수입
    </FormBtn>
  </InputContainer>
);

const MinusTypeSelection: React.FC<{
  watchType: string;
  setValue: Function;
}> = ({ watchType, setValue }) => (
  <InputContainer>
    <h3>항목</h3>
    <FormBtn
      isCurrent={watchType === "마켓"}
      onClick={() => setValue("type", "마켓")}
    >
      마켓
    </FormBtn>
    <FormBtn
      isCurrent={watchType === "벌금"}
      onClick={() => setValue("type", "벌금")}
    >
      벌금
    </FormBtn>
    <FormBtn
      isCurrent={watchType === "기타"}
      onClick={() => setValue("type", "기타")}
    >
      기타
    </FormBtn>
  </InputContainer>
);

const PlusTypeSelection: React.FC<{
  watchType: string;
  setValue: Function;
}> = ({ watchType, setValue }) => (
  <InputContainer>
    <h3>항목</h3>
    <FormBtn
      isCurrent={watchType === "월급"}
      onClick={() => setValue("type", "월급")}
    >
      월급
    </FormBtn>
    <FormBtn
      isCurrent={watchType === "상금"}
      onClick={() => setValue("type", "상금")}
    >
      상금
    </FormBtn>
    <FormBtn
      isCurrent={watchType === "기타"}
      onClick={() => setValue("type", "기타")}
    >
      기타
    </FormBtn>
  </InputContainer>
);

const AmountInput: React.FC<{ register: Function }> = ({ register }) => (
  <InputContainer>
    <h3>금액</h3>
    <Input type="number" width="114px" {...register("amount")} />
    <span>진스</span>
  </InputContainer>
);

const DescriptionInput: React.FC<{ register: Function }> = ({ register }) => (
  <InputContainer>
    <h3>내용</h3>
    <Input type="text" width="424px" {...register("description")} />
  </InputContainer>
);

const TransferForm: React.FC<TransferFormProps> = ({ onSubmit }) => {
  const { register, setValue, handleSubmit, watch } = useForm();

  const watchStudents = watch("students", []);
  const watchWithdrawOrDeposit = watch("withdrawOrDeposit");
  const watchType = watch("type");
  const watchAmount = watch("amount");

  const isValid =
    watchWithdrawOrDeposit &&
    watchType &&
    watchAmount &&
    watchStudents.length > 0;

  return (
    <Form id="trasferForm" onSubmit={handleSubmit(onSubmit)}>
      <StudentList watchStudents={watchStudents} setValue={setValue} />
      <WithdrawOrDepositSelection
        watchWithdrawOrDeposit={watchWithdrawOrDeposit}
        setValue={setValue}
      />
      {watchWithdrawOrDeposit === "수입" ? (
        <PlusTypeSelection watchType={watchType} setValue={setValue} />
      ) : (
        <MinusTypeSelection watchType={watchType} setValue={setValue} />
      )}
      <AmountInput register={register} />
      <DescriptionInput register={register} />
      <NextBtn disabled={!isValid} onClick={handleSubmit(onSubmit)}>
        다음
      </NextBtn>
    </Form>
  );
};

export default TransferForm;
