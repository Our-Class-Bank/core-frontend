import React, { Fragment } from "react";
import TransactionLog from "@/components/transactionLog/TransactionLog";
import {
  DatePoint,
  DateRow,
  DateText,
  LogDateStick,
  TransctionListWrapper,
  TransctionLogWrapper,
} from "@/style/components/TransactionLogStyle";
import { getDate } from "./utills/getDate";

const dummy = [
  {
    id: 1,
    type1: "지출",
    type2: "마트",
    type3: "아침활동 면제권",
    transactionAt: "2023-07-01T14:40:14.042Z",
    amount: 100,
    balance: 300,
  },
  {
    id: 2,
    type1: "입금",
    type2: "월급",
    type3: "은행원 월급",
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
    transactionAt: "2023-12-30T14:40:14.042Z",
    amount: 100,
    balance: 300,
  },
];

function TransactionList() {
  const dateSet = new Set();
  const displayDate = (transactionDate: string) => {
    dateSet.add(transactionDate);
    return transactionDate;
  };
  return (
    <TransctionListWrapper>
      <LogDateStick />
      <TransctionLogWrapper>
        {dummy.map((transaction, idx) => {
          const transactionDate = getDate(transaction.transactionAt);
          return (
            <Fragment key={transaction.id}>
              {dateSet.has(transactionDate) ? null : (
                <DateRow>
                  <DatePoint />
                  <DateText>{displayDate(transactionDate)}</DateText>
                </DateRow>
              )}
              <TransactionLog logData={transaction} />
              {dummy.length - 1 === idx && (
                <DateRow>
                  <DatePoint />
                  <DateText>마지막 내역입니다.</DateText>
                </DateRow>
              )}
            </Fragment>
          );
        })}
      </TransctionLogWrapper>
    </TransctionListWrapper>
  );
}

export default TransactionList;
