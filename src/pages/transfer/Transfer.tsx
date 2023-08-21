import TransferModal from "@/components/transfer/TransferModal";
import TransferTransactionList from "@/components/transfer/TransferTransactionList";
import { Container } from "@/style/common/CommonStyle";
import { Wrapper } from "@/style/transfer/TransferStyle";

function Transfer() {
  return (
    <Container>
      <Wrapper>
        <TransferTransactionList />
        <TransferModal />
      </Wrapper>
    </Container>
  );
}

export default Transfer;
