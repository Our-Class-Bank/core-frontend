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
import {
  useForm,
  UseFormRegister,
  SubmitHandler,
  UseFormSetValue,
} from "react-hook-form";
import axios from "axios";

export type SubmitData = {
  type:
    | "INCOME_SALARY"
    | "INCOME_PRIZE_MONEY"
    | "INCOME_ETC"
    | "EXPENSE_FINE"
    | "EXPENSE_MARKET"
    | "EXPENSE_ETC";
  amount: number;
  studentIds: string[];
  description: string;
  withdrawOrDeposit: "수입" | "지출";
};

interface TransferFormProps {
  onSubmit: (data: SubmitData) => void;
}

const WithdrawOrDepositSelection: React.FC<{
  watchWithdrawOrDeposit: string;
  setValue: UseFormSetValue<SubmitData>;
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
  setValue: UseFormSetValue<SubmitData>;
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
  setValue: UseFormSetValue<SubmitData>;
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

const AmountInput: React.FC<{
  register: UseFormRegister<SubmitData>;
}> = ({ register }) => (
  <InputContainer>
    <h3>금액</h3>
    <Input type="number" width="114px" {...register("amount")} />
    <span>진스</span>
  </InputContainer>
);

const DescriptionInput: React.FC<{
  register: UseFormRegister<SubmitData>;
}> = ({ register }) => (
  <InputContainer>
    <h3>내용</h3>
    <Input type="text" width="424px" {...register("description")} />
  </InputContainer>
);

const TransferForm: React.FC<TransferFormProps> = ({ onSubmit }) => {
  const { register, setValue, handleSubmit, watch } = useForm<SubmitData>();

  const submitHandler: SubmitHandler<SubmitData> = (SubmitData) => {
    try {
      onSubmit(SubmitData);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          alert("아이디와 비밀번호를 다시 확인해주세요.");
        } else {
          alert("예상치못한 에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
      }
    }
  };

  const watchstudentIds = watch("studentIds", []);
  const watchWithdrawOrDeposit = watch("withdrawOrDeposit");
  const watchType = watch("type");
  const watchAmount = watch("amount");

  const isValid =
    watchWithdrawOrDeposit &&
    watchType &&
    watchAmount &&
    watchstudentIds.length > 0;

  return (
    <Form id="trasferForm" onSubmit={handleSubmit(submitHandler)}>
      <StudentList
        watchstudentIds={watchstudentIds}
        setValue={setValue}
        height="230px"
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
      <NextBtn disabled={!isValid} onClick={handleSubmit(submitHandler)}>
        다음
      </NextBtn>
    </Form>
  );
};

export default TransferForm;
