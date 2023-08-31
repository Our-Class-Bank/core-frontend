import TransactionList from "../transactionLog/TransactionList";
import { TransactionData } from "../transactionLog/TransactionLog";

function MyTransactionLog({ data }: { data: TransactionData[] }) {
  return <TransactionList data={data} />;
}

export default MyTransactionLog;
