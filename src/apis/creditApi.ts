//import { privateApi } from "@/apis/authApi";
import { CreditPostData } from "@/pages/credit/Credit";
import { CreditChangeAllFormData } from "@/pages/credit/CreditChangeAll";
import axios from "axios";

{
  /*export async function postCredit(data: CreditPostData, username: string) {
  const response = await privateApi.post(
    `/api/v1/credit-evaluation/${username}`,
    data
  );
  return response;
}*/
}
export async function postCredit(data: CreditPostData, username: string) {
  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/credit-evaluation/${username}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return response;
}

export async function postCreditChangeAll(
  data: CreditChangeAllFormData,
  username: string
) {
  const response = await axios.post(
    `${
      import.meta.env.VITE_SERVER_IP
    }/api/v1/credit-evaluation/${username}/reset`,
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return response;
}

export async function getClassCredit() {
  const response = await axios.get(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/same-class/credit-evaluation`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const dataWithoutTeacher = response.data.slice(1);

  return dataWithoutTeacher;
}

export async function getMyCredit() {
  const response = await axios.get(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/my/credit-evaluation/history`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        fromAt: "2020-05-05T10:10:10",
        toAt: "2025-05-05T10:10:10",
      },
    }
  );
  return response;
}

//신용등급관리자 전용
{
  /*export async function getEvaluatorLog() {
  const response = await privateApi.post(
    `/api/v1/account/pocketmoney/history/by-credit-evaluator`
  );
  return response;
}*/
}

export async function getEvaluatorLog() {
  const response = await axios.get(
    `http://43.202.160.79:8080/api/v1/credit-evaluation/history/by-credit-evaluator`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        fromAt: "2020-05-05T10:10:10",
        toAt: "2025-05-05T10:10:10",
      },
    }
  );
  return response.data;
}

export type StudentCreditLog = {
  id: number;
  username: string;
  changePoint: number;
  description: string;
  score: number;
  createdAt: string;
};

export async function getStudentCreditLog(username: string) {
  const response = await axios.get(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/credit-evaluation/history`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        username,
        fromAt: "2020-05-05T10:10:10",
        toAt: "2025-05-05T10:10:10",
      },
    }
  );
  return response.data;
}

export async function getStudentCreditLogByTeacher() {
  const response = await axios.get(
    `${
      import.meta.env.VITE_SERVER_IP
    }/api/v1/credit-evaluation/history/by-teacher`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        fromAt: "2020-05-05T10:10:10",
        toAt: "2025-05-05T10:10:10",
      },
    }
  );
  return response.data;
}
