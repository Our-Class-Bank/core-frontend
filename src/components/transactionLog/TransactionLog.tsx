import {
  TestContainer,
  Test,
  TestTest,
} from "@/style/components/TransactionLogStyle";
import { MY_TRANSACTION_LOG_TYPE } from "./constants";
import { useQuery } from "@tanstack/react-query";
import { StudentInfo } from "@/apis/infoApi";
import { getMyClassInfo } from "@/apis/infoApi";

export interface TransactionData {
  accountNo: string;
  ownerUsername: string;
  type: keyof typeof MY_TRANSACTION_LOG_TYPE;
  amount: number;
  description: string;
  balance: number;
  transactionAt: string;
  executeUsername: string;
}

function TransactionLog({
  data,
  transactionType,
}: {
  data: TransactionData;
  transactionType: string;
}) {
  const { data: myClassData, isLoading: myClassLoading } = useQuery<
    Record<string, StudentInfo>
  >({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });
  const { amount, description, balance, ownerUsername, executeUsername } = data;
  const ownerName = myClassData && myClassData[ownerUsername]?.name;
  const executeName = myClassData && myClassData[executeUsername]?.name;

  const [type, _] = data.type.split("_");

  if (myClassLoading) {
    return <>Loading...</>;
  }

  return (
    <TestContainer>
      <Test $logType={type}>
        <p>{transactionType === "myTransaction" ? description : ownerName}</p>
        <p>
          {type === "EXPENSE" ? "-" : "+"}
          {amount}진스
        </p>
      </Test>
      <TestTest>
        <p>{transactionType === "myTransaction" ? executeName : description}</p>
        <p>잔액 {balance}진스</p>
      </TestTest>
    </TestContainer>
  );
}

export default TransactionLog;
