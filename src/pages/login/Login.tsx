import React, { useState, useContext } from "react";
import axios from "axios";
import { Container } from "@/style/common/CommonStyle";
import { Input, LoginForm, SubmitBtn } from "@/style/login/LoginStyle";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postSignIn, getMyInfo } from "@/apis/authApi";
import UserContext, { UserContextType } from "@/store/UserContext";

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

  const submitHandler: SubmitHandler<IFormValues> = async (data) => {
    try {
      setIsLoading(true);
      const response = await postSignIn(data);
      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.token);
        //my information을 context에 전역으로 저장
        const userInfo = await getMyInfo();
        setUserInfo(userInfo.data);
        navigate("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 422) {
          alert("");
        }
        if (error.response?.status === 401) {
          alert("");
        } else {
          alert("");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

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
