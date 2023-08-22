import axios from "axios";
import { IFormValues } from "@/pages/login/Login";

export const publicApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_IP}`,
});

export const privateApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_IP}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export async function postSignIn(data: IFormValues) {
  const response = await publicApi.post("/api/v1/auth/signin", {
    username: data.id,
    password: data.password,
  });
  return response;
}
