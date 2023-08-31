import TransferModal from "@/components/transfer/TransferModal";
import BankerTransactionLog from "@/components/transfer/BankerTransactionLog";
import { Container } from "@/style/common/CommonStyle";
import { Wrapper } from "@/style/transfer/TransferStyle";
import { useQuery } from "@tanstack/react-query";
import { getBankerLog } from "@/apis/transferApi";
import { TransactionData } from "@/components/transactionLog/TransactionLog";

export interface BankerLog {
  data: TransactionData[];
}

function Transfer() {
  const { data: bankerLogData, isLoading: bankerLogLoading } =
    useQuery<BankerLog>(["bankerLog"], getBankerLog);

  if (bankerLogLoading) {
    return <>Loading...</>;
  }
  return (
    <Container>
      <Wrapper>
        <BankerTransactionLog
          data={bankerLogData !== undefined ? bankerLogData.data : []}
        />
        <TransferModal />
      </Wrapper>
    </Container>
  );
}

export default Transfer;
