import {
  TestContainer,
  Test,
  TestTest,
} from "@/style/components/TransactionLogStyle";
import { MY_TRANSACTION_LOG_TYPE } from "./constants";

export interface TransactionData {
  accountNo: string;
  type: keyof typeof MY_TRANSACTION_LOG_TYPE;
  amount: number;
  description: string;
  balance: number;
  transactionAt: string;
}

function TransactionLog({ data }: { data: TransactionData }) {
  const { amount, description, balance } = data;
  const [type, _] = data.type.split("_");

  return (
    <TestContainer>
      <Test $logType={type}>
        <p>{MY_TRANSACTION_LOG_TYPE[data.type]}</p>
        <p>
          {type === "EXPENSE" ? "-" : "+"}
          {amount}진스
        </p>
      </Test>
      <TestTest>
        <p>{description}</p>
        <p>잔액 {balance}진스</p>
      </TestTest>
    </TestContainer>
  );
}

export default TransactionLog;
