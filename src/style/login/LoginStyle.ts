import { styled } from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  gap: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 32px;
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.mainBlue};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  font-size: 20px;
  padding: 0px 10px 0px 10px;
  border-style: none;
  border: solid 2px ${(props) => props.theme.mainGray};
  &:focus {
    outline-color: ${(props) => props.theme.mainBlue};
  }
`;

export const SubmitBtn = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 400;
  ${(props) =>
    props.disabled
      ? { backgroundColor: props.theme.mainGray }
      : { backgroundColor: props.theme.mainBlue }}
  color: white;
`;
