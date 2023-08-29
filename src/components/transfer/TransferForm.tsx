import React from "react";
import {
  InputContainer,
  Input,
  Form,
  NextBtn,
  PlusIcon,
  MinusIcon,
} from "@/style/transfer/TransferFormStyle";
import FormBtn from "@/style/common/FormBtn";
import StudentList from "./StudentList";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

export type SubmitData = {
  type:
    | "INCOME_SALARY"
    | "INCOME_PRIZE_MONEY"
    | "INCOME_ETC"
    | "EXPENSE_FINE"
    | "EXPENSE_MARKET"
    | "EXPENSE_ETC";
  amount: number;
  studentNumbers: [];
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
      <MinusIcon />
      <span>지출</span>
    </FormBtn>
    <FormBtn
      isCurrent={watchWithdrawOrDeposit === "수입"}
      onClick={() => setValue("withdrawOrDeposit", "수입")}
    >
      <PlusIcon />
      <span>수입</span>
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
      isCurrent={watchType === "EXPENSE_MARKET"}
      onClick={() => setValue("type", "EXPENSE_MARKET")}
    >
      마켓
    </FormBtn>
    <FormBtn
      isCurrent={watchType === "EXPENSE_FINE"}
      onClick={() => setValue("type", "EXPENSE_FINE")}
    >
      벌금
    </FormBtn>
    <FormBtn
      isCurrent={watchType === "EXPENSE_ETC"}
      onClick={() => setValue("type", "EXPENSE_ETC")}
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
      isCurrent={watchType === "INCOME_SALARY"}
      onClick={() => setValue("type", "INCOME_SALARY")}
    >
      월급
    </FormBtn>
    <FormBtn
      isCurrent={watchType === "INCOME_PRIZE_MONEY"}
      onClick={() => setValue("type", "INCOME_PRIZE_MONEY")}
    >
      상금
    </FormBtn>
    <FormBtn
      isCurrent={watchType === "INCOME_ETC"}
      onClick={() => setValue("type", "INCOME_ETC")}
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

  const handleSubmitForm: SubmitHandler<FieldValues> = (data: any) => {
    const submitData: SubmitData = {
      type: data.type,
      amount: parseInt(data.amount),
      studentNumbers: data.studentNumbers,
      description: data.description,
      withdrawOrDeposit: data.withdrawOrDeposit,
    };

    onSubmit(submitData);
  };

  const watchStudentNumbers = watch("studentNumbers", []);
  const watchWithdrawOrDeposit = watch("withdrawOrDeposit");
  const watchType = watch("type");
  const watchAmount = watch("amount");

  const isValid =
    watchWithdrawOrDeposit &&
    watchType &&
    watchAmount &&
    watchStudentNumbers.length > 0;

  return (
    <Form id="trasferForm" onSubmit={handleSubmit(handleSubmitForm)}>
      <StudentList
        watchStudentNumbers={watchStudentNumbers}
        setValue={setValue}
      />
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
      <NextBtn disabled={!isValid} onClick={handleSubmit(handleSubmitForm)}>
        다음
      </NextBtn>
    </Form>
  );
};

export default TransferForm;
