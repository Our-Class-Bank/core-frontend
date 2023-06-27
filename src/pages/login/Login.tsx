import React from "react";
import { Container } from "@/style/common/CommonStyle";
import { Input, LoginForm, SubmitBtn } from "@/style/login/LoginStyle";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormValues {
  id: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormValues>();

  const submitHandler: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
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
