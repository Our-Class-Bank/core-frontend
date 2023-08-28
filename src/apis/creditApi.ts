import { privateApi } from "@/apis/authApi";
import { CreditPostData } from "@/pages/credit/Credit";
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

export async function getClassCredit() {
  const response = await privateApi.post(
    `/api/v1/credit-evaluation/same-class/credit-evaluation`
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
    `${
      import.meta.env.VITE_SERVER_IP
    }/api/v1/account/pocketmoney/history/by-credit-evaluator`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return response;
}
