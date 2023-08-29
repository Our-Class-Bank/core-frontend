import TransferModal from "@/components/transfer/TransferModal";
import TransactionList from "@/components/transactionLog/TransactionList";
import { Container } from "@/style/common/CommonStyle";
import { Wrapper } from "@/style/transfer/TransferStyle";
import { useQuery } from "@tanstack/react-query";
import { getBankerLog } from "@/apis/transferApi";

export interface BankerLog {
  accountNo: string;
  type: "INCOME_SALARY" | "EXPENSE_MARKET";
  amount: number;
  description: string;
  balance: number;
  transactionAt: string;
}

function Transfer() {
  const { data: bankerLogData, isLoading: bankerLogLoading } = useQuery<
    BankerLog[]
  >(["bankerLog"], getBankerLog);

  console.log(bankerLogData);

  if (bankerLogLoading) {
    return <>Loading...</>;
  }
  return (
    <Container>
      <Wrapper>
        <TransactionList
          data={bankerLogData !== undefined ? bankerLogData : []}
        />
        <TransferModal />
      </Wrapper>
    </Container>
  );
}

export default Transfer;
