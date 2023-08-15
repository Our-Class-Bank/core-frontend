import StudentList from "@/components/transfer/StudentList";
import {
  InputContainer,
  Input,
  Form,
} from "@/style/transfer/TransferFormStyle";
import { useForm } from "react-hook-form";
import FormBtn from "@/style/common/FormBtn";
import { useEffect } from "react";

type CreditFormData = {
  detail: string;
  students: string[];
  amount: string;
  action: string;
};

interface CreditFormProps {
  onSubmit: (data: CreditFormData) => void;
  setIsFormValid: (isValid: boolean) => void;
}

const DetailInput: React.FC<{ register: any }> = ({ register }) => (
  <InputContainer>
    <h3>내용</h3>
    <Input type="text" width="437px" {...register("detail")} />
  </InputContainer>
);

const Buttons: React.FC<{
  watchActions?: string;
  setValue: (field: keyof CreditFormData, value: any) => void;
  handleReset: () => void;
}> = ({ watchActions, setValue, handleReset }) => (
  <InputContainer>
    <FormBtn
      isCurrent={watchActions === "+1"}
      onClick={() => setValue("action", "+1")}
    >
      + 1
    </FormBtn>
    <FormBtn
      isCurrent={watchActions === "-1"}
      onClick={() => setValue("action", "-1")}
    >
      - 1
    </FormBtn>
    <FormBtn
      isCurrent={watchActions === "초기화"}
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

  const watchDetail = watch("detail");
  const watchStudents = watch("students", []);
  const watchActions = watch("action");

  const isValid =
    (watchDetail && watchActions && watchStudents.length > 0) || false;
  useEffect(() => {
    console.log(isValid);
    setIsFormValid(isValid);
  }, [isValid]);

  const handleReset = () => {
    reset({
      detail: "",
      students: [],
      action: "",
    });
  };

  return (
    <Form id="creditForm" onSubmit={handleSubmit(onSubmit)}>
      <DetailInput register={register} />
      <StudentList
        watchStudents={watchStudents}
        setValue={setValue}
        height="361px"
      />
      <Buttons
        watchActions={watchActions}
        setValue={setValue}
        handleReset={handleReset}
      />
    </Form>
  );
};

export default CreditForm;
