import { privateApi } from "@/apis/authApi";
import { CreditPostData } from "@/pages/credit/Credit";

export async function postCredit(data: CreditPostData, username: string) {
  const response = await privateApi.post(
    `/api/v1/credit-evaluation/${username}`,
    data
  );
  return response;
}

export async function getClassCredit() {
  const response = await privateApi.post(
    `/api/v1/credit-evaluation/same-class/credit-evaluation`
  );
  return response;
}
