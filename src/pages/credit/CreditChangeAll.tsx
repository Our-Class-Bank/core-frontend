import React, { useEffect, useState } from "react";
import {
  InputContainer,
  Input,
  Form,
} from "@/style/transfer/TransferFormStyle";
import { useForm, UseFormRegister } from "react-hook-form";

export type CreditChangeAllFormData = {
  description: string;
  basePoint: number;
};

interface CreditChangeAllFormProps {
  onSubmit: (data: CreditChangeAllFormData) => void;
  setIsFormValid: (isValid: boolean) => void;
}

const DescriptionInput: React.FC<{
  register: UseFormRegister<CreditChangeAllFormData>;
  setValue: (name: string, value: string) => void;
}> = ({ register, setValue }) => {
  const [defaultDescription, setDefaultDescription] = useState<string>("");

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString("default", {
      month: "long",
    });
    setDefaultDescription(`${currentMonth} 초기화`);
    setValue("description", defaultDescription);
  }, [defaultDescription, setValue]);

  return (
    <InputContainer>
      <h3>내용</h3>
      <Input
        type="text"
        width="437px"
        {...register("description")}
        defaultValue={defaultDescription}
      />
    </InputContainer>
  );
};

const ScoreInput: React.FC<{
  register: UseFormRegister<CreditChangeAllFormData>;
}> = ({ register }) => (
  <InputContainer>
    <h3>점수</h3>
    <Input type="text" width="100px" {...register("basePoint")} /> 점으로 변경
  </InputContainer>
);

const CreditChangeAll: React.FC<CreditChangeAllFormProps> = (props) => {
  const { register, watch, handleSubmit, setValue, reset } =
    useForm<CreditChangeAllFormData>();

  const { onSubmit, setIsFormValid } = props;

  const watchDescription = watch("description");
  const watchBasePoint = watch("basePoint");

  const isValid = (watchDescription && watchBasePoint > 0) || false;
  useEffect(() => {
    setIsFormValid(isValid);
  }, [isValid, setIsFormValid]);

  const handleReset = () => {
    reset({
      description: "",
      basePoint: 0,
    });
  };

  const submitHandler = (data: CreditChangeAllFormData) => {
    onSubmit(data);
    handleReset();
  };

  return (
    <Form id="creditChangeAllForm" onSubmit={handleSubmit(submitHandler)}>
      <ScoreInput register={register} />
      <DescriptionInput register={register} setValue={setValue} />
    </Form>
  );
};
export default CreditChangeAll;
