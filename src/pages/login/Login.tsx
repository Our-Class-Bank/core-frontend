import { useState } from "react";
import axios from "axios";
import { Container } from "@/style/common/CommonStyle";
import { Input, LoginForm, SubmitBtn } from "@/style/login/LoginStyle";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postSignIn } from "@/apis/authApi";
import { getMyInfo, getClassStudentsInfo } from "@/apis/infoApi";
import UserContext, { UserContextType } from "@/store/UserContext";
import ClassStudentsContext, {
  ClassStudentsContextType,
} from "@/store/ClassStudentsContext";

export interface IFormValues {
  id: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormValues>();

  const { setUserInfo } = useContext<UserContextType>(UserContext);
  const { setStudents } =
    useContext<ClassStudentsContextType>(ClassStudentsContext);

  const submitHandler: SubmitHandler<IFormValues> = async (data) => {
    try {
      setIsLoading(true);
      const response = await postSignIn(data);
      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          alert("아이디와 비밀번호를 다시 확인해주세요.");
        } else {
          alert("예상치못한 에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit(submitHandler)}>
        <h1>우리반 은행</h1>
        <Input
          type="text"
          {...register("id", { required: true })}
          placeholder="아이디"
        />
        <Input
          type="password"
          {...register("password", { required: true })}
          placeholder="비밀번호"
        />
        <SubmitBtn type="submit" disabled={!isValid}>
          로그인
        </SubmitBtn>
      </LoginForm>
    </Container>
  );
}

export default Login;
