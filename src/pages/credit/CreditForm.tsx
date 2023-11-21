import CreditStudentList from "./CreditStudentList";
import {
  InputContainer,
  Input,
  Form,
} from "@/style/transfer/TransferFormStyle";
import { useForm, UseFormRegister, UseFormSetValue } from "react-hook-form";
import FormBtn from "@/style/common/FormBtn";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export type CreditFormData = {
  description: string;
  studentIds: string[];
  changePoint: string;
};

interface CreditFormProps {
  onSubmit: (data: CreditFormData) => void;
  setIsFormValid: (isValid: boolean) => void;
}

const DescriptionInput: React.FC<{
  register: UseFormRegister<CreditFormData>;
}> = ({ register }) => (
  <InputContainer>
    <h3>내용</h3>
    <Input type="text" width="437px" {...register("description")} />
  </InputContainer>
);

const Buttons: React.FC<{
  watchChangePoint?: string;
  setValue: UseFormSetValue<CreditFormData>;
  handleReset: () => void;
}> = ({ watchChangePoint, setValue, handleReset }) => (
  <InputContainer>
    <FormBtn
      isCurrent={watchChangePoint === "+1"}
      onClick={() => setValue("changePoint", "+1")}
    >
      + 1
    </FormBtn>
    <FormBtn
      isCurrent={watchChangePoint === "-1"}
      onClick={() => setValue("changePoint", "-1")}
    >
      - 1
    </FormBtn>
    <FormBtn
      isCurrent={watchChangePoint === "초기화"}
      onClick={() => handleReset()}
    >
      초기화
    </FormBtn>
  </InputContainer>
);

const CreditForm: React.FC<CreditFormProps> = (props) => {
  const { register, watch, handleSubmit, setValue, reset } =
    useForm<CreditFormData>();
  const { onSubmit, setIsFormValid } = props;
  const queryClient = useQueryClient();

  const watchdescription = watch("description");
  const watchStudentIds = watch("studentIds", []);
  const watchChangePoint = watch("changePoint");

  const isValid =
    (watchdescription && watchChangePoint && watchStudentIds.length > 0) ||
    false;
  useEffect(() => {
    setIsFormValid(isValid);
  }, [isValid, setIsFormValid]);

  const handleReset = () => {
    reset({
      description: "",
      studentIds: [],
      changePoint: "",
    });
  };

  const submitHandler = (data: CreditFormData) => {
    onSubmit(data);
    handleReset();
    queryClient.invalidateQueries({ queryKey: ["classCreditData"] });
    queryClient.invalidateQueries({ queryKey: ["myClassData"] });
  };

  return (
    <Form id="creditForm" onSubmit={handleSubmit(submitHandler)}>
      <DescriptionInput register={register} />
      <CreditStudentList
        watchStudentIds={watchStudentIds}
        setValue={setValue}
        height="361px"
      />
      <Buttons
        watchChangePoint={watchChangePoint}
        setValue={setValue}
        handleReset={handleReset}
      />
    </Form>
  );
};

export default CreditForm;
