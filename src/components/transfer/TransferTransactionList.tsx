import TransactionList from "@/components/transactionLog/TransactionList";

import { TransactionListDataType } from "@/components/transactionLog/TransactionList";

function TransferTransactionList({ data }: TransactionListDataType) {
  return (
    <>
      <TransactionList data={data} />
    </>
  );
}

export default TransferTransactionList;
