import TransferModal from "@/components/transfer/TransferModal";
import TransactionList from "@/components/transactionLog/TransactionList";
import { Container } from "@/style/common/CommonStyle";
import { Wrapper } from "@/style/transfer/TransferStyle";

function Transfer() {
  return (
    <Container>
      <Wrapper>
        <TransactionList />
        <TransferModal />
      </Wrapper>
    </Container>
  );
}

export default Transfer;
