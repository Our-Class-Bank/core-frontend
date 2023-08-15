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

interface TransferFormProps {
  onSubmit: (data: any) => void;
}

const TypeSelection: React.FC<{ watchType: string; setValue: Function }> = ({
  watchType,
  setValue,
}) => (
  <InputContainer>
    <h3>분류</h3>
    <FormBtn
      isCurrent={watchType === "지출"}
      onClick={() => setValue("type", "지출")}
    >
      지출
    </FormBtn>
    <FormBtn
      isCurrent={watchType === "수입"}
      onClick={() => setValue("type", "수입")}
    >
      수입
    </FormBtn>
  </InputContainer>
);

const MinusCategorySelection: React.FC<{
  watchCategory: string;
  setValue: Function;
}> = ({ watchCategory, setValue }) => (
  <InputContainer>
    <h3>항목</h3>
    <FormBtn
      isCurrent={watchCategory === "마켓"}
      onClick={() => setValue("category", "마켓")}
    >
      마켓
    </FormBtn>
  </InputContainer>
);

const PlusCategorySelection: React.FC<{
  watchCategory: string;
  setValue: Function;
}> = ({ watchCategory, setValue }) => (
  <InputContainer>
    <h3>항목</h3>
    <FormBtn
      isCurrent={watchCategory === "월금"}
      onClick={() => setValue("category", "월금")}
    >
      월금
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

const DetailInput: React.FC<{ register: Function }> = ({ register }) => (
  <InputContainer>
    <h3>내용</h3>
    <Input type="text" width="424px" {...register("detail")} />
  </InputContainer>
);

const TransferForm: React.FC<TransferFormProps> = ({ onSubmit }) => {
  const { register, setValue, handleSubmit, watch } = useForm();

  const watchStudents = watch("students", []);
  const watchType = watch("type");
  const watchCategory = watch("category");
  const watchAmount = watch("amount");

  const isValid =
    watchType && watchCategory && watchAmount && watchStudents.length > 0;

  return (
    <Form id="trasferForm" onSubmit={handleSubmit(onSubmit)}>
      <StudentList watchStudents={watchStudents} setValue={setValue} />
      <TypeSelection watchType={watchType} setValue={setValue} />
      {watchType === "수입" ? (
        <PlusCategorySelection
          watchCategory={watchCategory}
          setValue={setValue}
        />
      ) : (
        <MinusCategorySelection
          watchCategory={watchCategory}
          setValue={setValue}
        />
      )}
      <AmountInput register={register} />
      <DetailInput register={register} />
      <NextBtn disabled={!isValid} onClick={handleSubmit(onSubmit)}>
        다음
      </NextBtn>
    </Form>
  );
};

export default TransferForm;
