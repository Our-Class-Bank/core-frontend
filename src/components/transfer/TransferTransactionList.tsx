import { Fragment } from "react";
import TransactionLog, {
  TransactionData,
} from "@/components/transactionLog/TransactionLog";
import {
  DatePoint,
  DateRow,
  DateText,
  LogDateStick,
  TransctionListWrapper,
  TransctionLogWrapper,
} from "@/style/components/TransactionLogStyle";
import { getDate } from "../transactionLog/utills/getDate";

function TransactionList({ data }: { data: TransactionData[] }) {
  const dateSet = new Set();
  const displayDate = (transactionDate: string) => {
    dateSet.add(transactionDate);
    return transactionDate;
  };
  return (
    <TransctionListWrapper>
      <LogDateStick />
      <TransctionLogWrapper>
        {data.map((transaction, idx) => {
          const transactionDate = getDate(transaction.transactionAt);
          return (
            <Fragment key={idx}>
              {dateSet.has(transactionDate) ? null : (
                <DateRow>
                  <DatePoint />
                  <DateText>{displayDate(transactionDate)}</DateText>
                </DateRow>
              )}
              <TransactionLog data={transaction} />
              {data.length - 1 === idx && (
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
