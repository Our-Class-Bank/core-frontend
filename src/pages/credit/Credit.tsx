import TableContainer from "@/style/common/TableContainer";
import { Container } from "@/style/common/CommonStyle";
import styled from "styled-components";
import ClassCreditTable from "./ClassCreditTable";
import CreditLogTable from "./CreditLogTable";

const Horizontal = styled.div`
  display: flex;
`;

function Credit() {
  return (
    <Container>
      <Horizontal>
        <TableContainer title="우리반 신용점수">
          <ClassCreditTable />
        </TableContainer>
        <TableContainer title="최신 입력내역">
          <CreditLogTable />
        </TableContainer>
      </Horizontal>
    </Container>
  );
}

export default Credit;
