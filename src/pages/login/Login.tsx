import React, { useState } from "react";
import axios from "axios";
import { Container } from "@/style/common/CommonStyle";
import { Input, LoginForm, SubmitBtn } from "@/style/login/LoginStyle";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postSignIn } from "@/apis/authApi";

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

  const submitHandler: SubmitHandler<IFormValues> = async (data) => {
    try {
      setIsLoading(true);
      const response = await postSignIn(data);
      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.token);
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
