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
import { getDate } from "./utills/getDate";

function TransactionList({
  data,
  transactionType,
}: {
  data: TransactionData[];
  transactionType: string;
}) {
  const dateSet = new Set();
  const displayDate = (transactionDate: string) => {
    dateSet.add(transactionDate);
    return transactionDate;
  };
  return (
    <TransctionListWrapper>
      <LogDateStick />
      <TransctionLogWrapper>
        {data.length === 0
          ? "거래 내역이 없습니다"
          : data.map((transaction, idx) => {
              const transactionDate = getDate(transaction.transactionAt);
              return (
                <Fragment key={idx}>
                  {dateSet.has(transactionDate) ? null : (
                    <DateRow>
                      <DatePoint />
                      <DateText>{displayDate(transactionDate)}</DateText>
                    </DateRow>
                  )}
                  <TransactionLog
                    data={transaction}
                    transactionType={transactionType}
                  />
                  {data.length - 1 === idx && (
                    <DateRow>
                      <DatePoint />
                      <DateText>마지막 내역입니다.</DateText>
                    </DateRow>
                  )}
                </Fragment>
              );
            })}

        {}
      </TransctionLogWrapper>
    </TransctionListWrapper>
  );
}

export default TransactionList;
