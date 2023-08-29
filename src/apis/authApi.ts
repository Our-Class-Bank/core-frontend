import axios from "axios";
import { LoginFormValues } from "@/pages/login/Login";
import { ResetPasswordFormValues } from "@/pages/reset-password/ResetPassword";

export const publicApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_IP}`,
});

export const privateApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_IP}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

/* window.addEventListener("storage", (e) => {
  if (e.key === "accessToken") {
    const newAccessToken = e.newValue;
    privateApi.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
  }
});
 */

export async function postSignIn(data: LoginFormValues) {
  const response = await publicApi.post("/api/v1/auth/signin", {
    username: data.username,
    password: data.password,
  });
  return response;
}

export async function getMyInfo() {
  const response = await privateApi.get("/api/v1/my");
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
