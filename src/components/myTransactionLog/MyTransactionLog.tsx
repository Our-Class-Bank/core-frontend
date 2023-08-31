import { styled } from "styled-components";
import TransactionList from "../transactionLog/TransactionList";
import { TransactionData } from "../transactionLog/TransactionLog";

const CardWrapper = styled.ul`
  flex-grow: 1;
  height: 528px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderGray};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

function MyTransactionLog({ data }: { data: TransactionData[] }) {
  return (
    <CardWrapper>
      <TransactionList data={data} />
    </CardWrapper>
  );
}

export default MyTransactionLog;
