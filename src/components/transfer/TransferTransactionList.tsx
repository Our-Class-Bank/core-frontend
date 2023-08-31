import TransactionList from "@/components/transactionLog/TransactionList";
import { TransactionData } from "../transactionLog/TransactionLog";

interface TransferTransactionListProps {
  bankerLogData: TransactionData[];
}
function TransferTransactionList({
  bankerLogData,
}: TransferTransactionListProps) {
  return (
    <>
      <TransactionList data={bankerLogData} />
    </>
  );
}

export default TransferTransactionList;
