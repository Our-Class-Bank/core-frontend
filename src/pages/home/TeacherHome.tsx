import TableContainer from "@/style/common/TableContainer";
import TransactionList from "@/components/transactionLog/TransactionList";
import { styled } from "styled-components";
import { useQuery } from "@tanstack/react-query";
/* import { getStudentCreditLogByTeacher } from "@/apis/creditApi"; */
import { getStudentTransferLogByTeacher } from "@/apis/transferApi";
import ClassCreditTable from "../credit/ClassCreditTable";
import CreditLogTable from "../credit/CreditLogTable";

const Header = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: black;
  span {
    color: ${(props) => props.theme.mainBlue};
  }
`;

function TeacherHome() {
  /*   const { data: classCreditData, isLoading: classCreditLoading } = useQuery(
    ["classCredit"],
    getStudentCreditLogByTeacher
  ); */

  const { data: classTransferData, isLoading: classTransferLoading } = useQuery(
    ["classTransfer"],
    getStudentTransferLogByTeacher
  );

  if (/* classCreditLoading || */ classTransferLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <TableContainer
        width="100%"
        height="100%"
        titlePart={<Header>입출금 내역</Header>}
      >
        <TransactionList
          data={classTransferData !== undefined ? classTransferData.data : []}
          transactionType="myTransaction"
        />
      </TableContainer>
      <TableContainer title="신용점수" width="100%" height="550px">
        <ClassCreditTable />
      </TableContainer>
      <TableContainer
        title="신용점수 내역"
        width="100%"
        height="100%"
        minHeight="416px"
      >
        <CreditLogTable username={"홍길동"} />
      </TableContainer>
    </>
  );
}

export default TeacherHome;
