import axios from "axios";
import { ResetPasswordFormValues } from "@/pages/reset-password/ResetPassword";
import { LoginFormValues } from "@/pages/login/Login";

export const publicApi = axios.create({
  baseURL: `http://43.200.121.145:8080`,
});

export const privateApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_IP}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export async function postSignIn(data: LoginFormValues) {
  const response = await axios.post(
    `http://43.200.121.145:8080/api/v1/auth/signin`,
    {
      username: data.username,
      password: data.password,
    }
  );
  return response;
}

{
  /*export async function getMyInfo() {
  const response = await privateApi.get("/api/v1/my");
  return response;
}*/
}

export async function getMyInfo() {
  const response = await axios.get(`http://43.200.121.145:8080/api/v1/my`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response;
}

export async function postResetPassword(data: ResetPasswordFormValues) {
  const response = await publicApi.post("/api/v1/auth/password/change", {
    username: data.username,
    name: data.name,
    newPassword: data.newPassword,
  });
  return response;
}
