import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { privateApi } from "./authApi";

export async function getMyAccountLog({
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
