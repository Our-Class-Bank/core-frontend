import TransactionList from "@/components/transactionLog/TransactionList";
import { BankerLog } from "@/pages/transfer/Transfer";

interface TransferTransactionListProps {
  bankerLogData: BankerLog[];
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
