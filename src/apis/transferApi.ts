import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
//import { privateApi } from "./authApi";
import axios from "axios";

{
  /*export async function getMyAccountLog({
  queryKey,
}: QueryFunctionContext<QueryKey>) {
  const [_, accountNo] = queryKey;
  const response = await privateApi.get(
    `/api/v1/my/account/history/${accountNo}`,
    {
      params: {
        fromAt: "2020-05-05T10:10:10",
        toAt: "2025-05-05T10:10:10",
      },
    }
  );
  return response;
}
*/
}
export async function getMyAccountLog({
  queryKey,
}: QueryFunctionContext<QueryKey>) {
  const [_, accountNo] = queryKey;
  const response = await axios.get(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/my/account/history/${accountNo}`,
    {
      params: {
        fromAt: "2020-05-05T10:10:10",
        toAt: "2025-05-05T10:10:10",
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return response;
}
