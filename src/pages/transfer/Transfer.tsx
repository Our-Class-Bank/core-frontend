import TransferModal from "@/components/transfer/TransferModal";
import TransferTransactionList from "@/components/transfer/TransferTransactionList";
import { Container } from "@/style/common/CommonStyle";
import { Wrapper } from "@/style/transfer/TransferStyle";
import { useQuery } from "@tanstack/react-query";
import { getBankerLog } from "@/apis/transferApi";

interface BankerLog {
  accountNo: string;
  type: "INCOME_SALARY" | "EXPENSE_MARKET"; // Add more types if needed
  amount: number;
  description: string;
  balance: number;
  transactionAt: string;
}

function Transfer() {
  const { data: bankerLogData, isLoading: bankerLogLoading } = useQuery<
    BankerLog[]
  >(["bankerLog"], getBankerLog);

  if (bankerLogLoading) {
    return <>Loading...</>;
  }
  return (
    <Container>
      <Wrapper>
        <TransferTransactionList data={bankerLogData} />
        <TransferModal />
      </Wrapper>
    </Container>
  );
}

export default Transfer;
