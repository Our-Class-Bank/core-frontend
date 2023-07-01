import React from "react";
import TransactionLog from "@/components/transactionLog/TransactionLog";
import {
  LogDatePoint,
  LogDateStick,
  TransctionLogWrapper,
} from "@/style/components/TransactionLogStyle";

const dummy = [
  {
    id: 1,
    type1: "지출",
    type2: "마트",
    type3: "아침활동 면제권",
    transactionAt: "2023-06-30T14:40:14.042Z",
    amount: 100,
    balance: 300,
  },
  {
    id: 2,
    type1: "입금",
    type2: "마트",
    type3: "아침활동 면제권",
    transactionAt: "2023-06-30T14:40:14.042Z",
    amount: 100,
    balance: 300,
  },
  {
    id: 3,
    type1: "지출",
    type2: "마트",
    type3: "아침활동 면제권",
    transactionAt: "2023-06-30T14:40:14.042Z",
    amount: 100,
    balance: 300,
  },
  {
    id: 4,
    type1: "입금",
    type2: "마트",
    type3: "아침활동 면제권",
    transactionAt: "2023-06-30T14:40:14.042Z",
    amount: 100,
    balance: 300,
  },
];

function TransactionList() {
  return (
    <div style={{ display: "flex" }}>
      <LogDateStick>
        <LogDatePoint />
      </LogDateStick>
      <TransctionLogWrapper>
        {dummy.map((transaction) => (
          <TransactionLog key={transaction.id} logData={transaction} />
        ))}
      </TransctionLogWrapper>
    </div>
  );
}

export default TransactionList;
