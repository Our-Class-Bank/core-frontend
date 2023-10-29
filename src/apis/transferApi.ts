import { TransferData } from "@/components/transfer/TransferModal";
import { privateApi } from "./authApi";

export async function postWithdraw(data: TransferData) {
  const response = await privateApi.post(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/account/pocketmoney/withdraw`,
    data
  );
  return response;
}

export async function postDeposit(data: TransferData) {
  const response = await privateApi.post(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/account/pocketmoney/deposit`,
    data
  );
  return response;
}

export async function getBankerLog() {
  const response = await privateApi.get(
    `${
      import.meta.env.VITE_SERVER_IP
    }/api/v1/account/pocketmoney/history/by-banker`,
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

export async function getStudentTransferLogByTeacher() {
  const response = await privateApi.get(
    `${
      import.meta.env.VITE_SERVER_IP
    }/api/v1/account/pocketmoney/history/by-teacher`,
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
