import TransactionList from "@/components/transactionLog/TransactionList";
import { getBankerHistory } from "@/apis/transferApi";
import axios from "axios";
import { TransactionListDataType } from "@/components/transactionLog/TransactionList";

function TransferTransactionList({ data }: TransactionListDataType) {
  return (
    <>
      <TransactionList data={data} />
    </>
  );
}

export default TransferTransactionList;
