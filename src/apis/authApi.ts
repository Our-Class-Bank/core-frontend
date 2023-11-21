import axios from "axios";
import { ResetPasswordFormValues } from "@/pages/reset-password/ResetPassword";
import { LoginFormValues } from "@/pages/login/Login";

export const publicApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_IP}`,
});

export const privateApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_IP}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export async function postSignIn(data: LoginFormValues) {
  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/auth/signin`,
    {
      username: data.username,
      password: data.password,
    }
  );
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

privateApi.interceptors.response.use(
  // 200번대 응답이 올때 처리
  (response) => {
    return response;
  },
  // 200번대 응답이 아닐 경우 처리
  async (error) => {
    const {
      response: { status },
    } = error;

    //토큰이 만료되었을 때
    if (status === 401) {
      alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = "Bearer " + token;

  return config;
});
