import { styled } from "styled-components";
import { TransactionData } from "../transactionLog/TransactionLog";
import TransferTransactionList from "../transactionLog/TransactionList";

const Container = styled.div``;

const CardWrapper = styled.ul`
  width: 100%;
  height: 600px;
  padding: 10px;
  overflow-y: auto;
`;

function BankerTransactionLog({ data }: { data: TransactionData[] }) {
  return (
    <Container>
      <CardWrapper>
        <TransferTransactionList data={data} />
      </CardWrapper>
    </Container>
  );
}

export default BankerTransactionLog;
