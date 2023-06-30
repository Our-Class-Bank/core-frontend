import React from "react";

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
    <div>
      <div>
        <p>{type2}</p>
        <p>{amount}</p>
      </div>
      <div>
        <p>{type3}</p>
        <p>{balance}</p>
      </div>
    </div>
  );
}

export default TransactionLog;
