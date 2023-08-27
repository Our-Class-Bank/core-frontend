import { privateApi } from "@/apis/authApi";
import { TransferData } from "@/components/transfer/TransferModal";

export async function postWithdraw(data: TransferData) {
  const response = await privateApi.post(
    "/api/v1/account/pocketmoney/withdraw",
    data
  );
  return response;
}

export async function postDeposit(data: TransferData) {
  const response = await privateApi.post(
    "/api/v1/account/pocketmoney/deposit",
    data
  );
  return response;
}

//은행원 전용
export async function getBankerHistory() {
  const response = await privateApi.get(
    "/api/v1/account/pocketmoney/history/by-banker"
  );
  return response;
}
