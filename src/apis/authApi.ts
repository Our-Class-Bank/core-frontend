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
  console.log(data);
  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/auth/signin`,
    {
      username: data.username,
      password: data.password,
    }
  );
  return response;
}
