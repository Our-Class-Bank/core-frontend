import StudentList from "@/components/transfer/StudentList";
import {
  InputContainer,
  Input,
  Form,
} from "@/style/transfer/TransferFormStyle";
import { useForm } from "react-hook-form";
import FormBtn from "@/style/common/FormBtn";
import { useEffect } from "react";

export type CreditFormData = {
  description: string;
  studentNumbers: string[];
  changePoint: string;
};

interface CreditFormProps {
  onSubmit: (data: CreditFormData) => void;
  setIsFormValid: (isValid: boolean) => void;
}

const DescriptionInput: React.FC<{ register: any }> = ({ register }) => (
  <InputContainer>
    <h3>내용</h3>
    <Input type="text" width="437px" {...register("description")} />
  </InputContainer>
);

const Buttons: React.FC<{
  watchChangePoint?: string;
  setValue: (field: keyof CreditFormData, value: any) => void;
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

  const watchdescription = watch("description");
  const watchStudentNumbers = watch("studentNumbers", []);
  const watchChangePoint = watch("changePoint");

  const isValid =
    (watchdescription && watchChangePoint && watchStudentNumbers.length > 0) ||
    false;
  useEffect(() => {
    console.log(isValid);
    setIsFormValid(isValid);
  }, [isValid]);

  const handleReset = () => {
    reset({
      description: "",
      studentNumbers: [],
      changePoint: "",
    });
  };

  return (
    <Form id="creditForm" onSubmit={handleSubmit(onSubmit)}>
      <DescriptionInput register={register} />
      <StudentList
        watchStudentNumbers={watchStudentNumbers}
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
