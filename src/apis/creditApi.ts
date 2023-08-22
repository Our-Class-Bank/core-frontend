import { privateApi } from "@/apis/authApi";

export async function postCredit(data: TransferData, username: string) {
  const response = await privateApi.post(
    `/api/v1/credit-evaluation/${username}`,
    data
  );
  return response;
}
