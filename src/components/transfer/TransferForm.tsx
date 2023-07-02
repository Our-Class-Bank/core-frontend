import {
  Form,
  InputContainer,
  Input,
} from "@/style/transfer/TransferFormStyle";
import FormBtn from "@/style/common/FormBtn";
import StudentList from "./StudentList";
import { useForm } from "react-hook-form";
import BigBtn from "@/style/common/BigBtn";

const TypeSelection = ({ watchType, setValue }) => (
  <InputContainer>
    <h3>분류</h3>
    <FormBtn
      isCurrent={watchType === "수입"}
      onClick={() => setValue("type", "수입")}
    >
      수입
    </FormBtn>
    <FormBtn
      isCurrent={watchType === "지출"}
      onClick={() => setValue("type", "지출")}
    >
      지출
    </FormBtn>
  </InputContainer>
);

const CategorySelection = ({ watchCategory, setValue }) => (
  <InputContainer>
    <h3>항목</h3>
    <FormBtn
      isCurrent={watchCategory === "마켓"}
      onClick={() => setValue("category", "마켓")}
    >
      마켓
    </FormBtn>
    <FormBtn
      isCurrent={watchCategory === "벌금"}
      onClick={() => setValue("category", "벌금")}
    >
      벌금
    </FormBtn>
    <FormBtn
      isCurrent={watchCategory === "기타"}
      onClick={() => setValue("category", "기타")}
    >
      기타
    </FormBtn>
  </InputContainer>
);

const AmountInput = ({ register }) => (
  <InputContainer>
    <h3>금액</h3>
    <Input type="number" width="114px" {...register("amount")} />
    <span>진스</span>
  </InputContainer>
);

const DetailInput = ({ register }) => (
  <InputContainer>
    <h3>내용</h3>
    <Input type="text" width="424px" {...register("detail")} />
  </InputContainer>
);

function TransferForm() {
  const { register, setValue, handleSubmit, watch } = useForm();

  const watchStudents = watch("students", []);
  const watchType = watch("type");
  const watchCategory = watch("category");
  const watchAmount = watch("amount");

  const isValid =
    watchType && watchCategory && watchAmount && watchStudents.length > 0;

  return (
    <Form onSubmit={handleSubmit(console.log)}>
      <StudentList watchStudents={watchStudents} setValue={setValue} />
      <TypeSelection watchType={watchType} setValue={setValue} />
      <CategorySelection watchCategory={watchCategory} setValue={setValue} />
      <AmountInput register={register} />
      <DetailInput register={register} />
      <BigBtn disabled={!isValid}>다음</BigBtn>
    </Form>
  );
}

export default TransferForm;
