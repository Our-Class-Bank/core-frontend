import TransferModal from "@/components/transfer/TransferModal";
import { useQuery } from "@tanstack/react-query";
import { getBankerLog } from "@/apis/transferApi";
import { TransactionData } from "@/components/transactionLog/TransactionLog";
import TransactionList from "@/components/transactionLog/TransactionList";
import TableContainer from "@/style/common/TableContainer";
import { styled } from "styled-components";

export interface BankerLog {
  data: TransactionData[];
}

const TransferContainer = styled.div`
  display: flex;
  height: 100vh;
  padding: 90px 30px 30px 240px;
  margin: 0 auto;
  gap: 30px;
`;

function Transfer() {
  const { data: bankerLogData, isLoading: bankerLogLoading } =
    useQuery<BankerLog>(["bankerLog"], getBankerLog);

  if (bankerLogLoading) {
    return <>Loading...</>;
  }
  return (
    <TransferContainer>
      <TableContainer title="내가 입력한 내역" width="100%" height="600px">
        <TransactionList
          data={bankerLogData !== undefined ? bankerLogData.data : []}
          transactionType="bankerTransaction"
        />
      </TableContainer>
      <TableContainer title="입출금 입력" width="100%" height="600px">
        <TransferModal />
      </TableContainer>
    </TransferContainer>
  );
}

export default Transfer;
