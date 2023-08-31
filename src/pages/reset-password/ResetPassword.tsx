import { FullContainer } from "@/style/common/CommonStyle";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input, LoginForm, SubmitBtn } from "@/style/login/LoginStyle";
import { useState } from "react";
import axios from "axios";
import { postResetPassword } from "@/apis/authApi";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export interface ResetPasswordFormValues {
  username: "string";
  name: "string";
  newPassword: "string";
  newPasswordConfirm: "string";
}

const ResetPasswordForm = styled(LoginForm)``;
const ErrorMessage = styled.span`
  color: red;
`;

function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    clearErrors,
  } = useForm<ResetPasswordFormValues>({ mode: "all" });

  const submitHandler: SubmitHandler<ResetPasswordFormValues> = async (
    data
  ) => {
    try {
      setIsLoading(true);
      const response = await postResetPassword(data);
      if (response.status === 200) {
        alert("새로운 비밀번호가 생성되었습니다. 다시 로그인해주세요.");
        navigation("/login");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          alert(
            "입력하신 회원정보가 존재하지 않습니다.선생님께 아이디를 물어보세요."
          );
        } else {
          alert("예상치못한 에러가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <FullContainer>loading...</FullContainer>;
  }

  return (
    <FullContainer>
      <ResetPasswordForm onSubmit={handleSubmit(submitHandler)}>
        <Input
          type="text"
          {...register("name", { required: true })}
          placeholder="이름"
        />
        <Input
          type="text"
          {...register("username", { required: true })}
          placeholder="아이디"
        />
        <Input
          type="password"
          {...register("newPassword", { required: true })}
          placeholder="새 비밀번호"
        />
        <Input
          type="password"
          {...register("newPasswordConfirm", {
            required: true,
            validate: (val: string) => {
              if (watch("newPassword") !== val) {
                return "비밀번호 확인이 일치하지 않습니다.";
              } else {
                clearErrors("newPasswordConfirm");
              }
            },
          })}
          placeholder="새 비밀번호 확인"
        />
        <ErrorMessage>{errors?.newPasswordConfirm?.message}</ErrorMessage>
        <SubmitBtn type="submit" disabled={!isValid}>
          비밀번호 찾기
        </SubmitBtn>
      </ResetPasswordForm>
    </FullContainer>
  );
}

export default ResetPassword;
