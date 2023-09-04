import {
  TestContainer,
  Test,
  TestTest,
} from "@/style/components/TransactionLogStyle";
import { MY_TRANSACTION_LOG_TYPE } from "./constants";

export interface TransactionData {
  accountNo: string;
  owner: {
    username: string;
    name: string;
  };
  type: keyof typeof MY_TRANSACTION_LOG_TYPE;
  amount: number;
  description: string;
  balance: number;
  transactionAt: string;
  executor: {
    username: string;
    name: string;
  };
}

function TransactionLog({
  data,
  transactionType,
}: {
  data: TransactionData;
  transactionType: string;
}) {
  const { amount, description, balance, executor, owner } = data;
  const [type, _] = data.type.split("_");
  const executorName = executor.name;
  const accountOwnerName = owner.name;

  return (
    <TestContainer>
      <Test $logType={type}>
        <p>
          {transactionType === "myTransaction" ? description : accountOwnerName}
        </p>
        <p>
          {type === "EXPENSE" ? "-" : "+"}
          {amount}진스
        </p>
      </Test>
      <TestTest>
        <p>
          {transactionType === "myTransaction" ? executorName : description}
        </p>
        <p>잔액 {balance}진스</p>
      </TestTest>
    </TestContainer>
  );
}

export default TransactionLog;
