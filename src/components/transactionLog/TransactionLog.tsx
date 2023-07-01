import React from "react";
import {
  TestContainer,
  Test,
  TestTest,
} from "@/style/components/TransactionLogStyle";
interface ILogData {
  logData: {
    id: number;
    type1: string;
    type2: string;
    type3: string;
    transactionAt: string;
    amount: number;
    balance: number;
  };
}

function TransactionLog({ logData }: ILogData) {
  const { type1, type2, type3, amount, balance } = logData;
  return (
    <TestContainer>
      <Test logType={type1}>
        <p>{type2}</p>
        <p>
          {type1 === "입금" ? "+" : "-"}
          {amount}진스
        </p>
      </Test>
      <TestTest>
        <p>{type3}</p>
        <p>잔액 {balance}진스</p>
      </TestTest>
    </TestContainer>
  );
}

export default TransactionLog;
