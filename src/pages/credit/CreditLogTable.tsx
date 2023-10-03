import { useTable, Column } from "react-table";
import { Thead, Table, Tbody } from "@/style/credit/ClassCreditTableStyle";
import { BlackTxt, GrayTxt, BlueTxt } from "@/style/credit/CreditLogTableStyle";
import { CreditLog } from "./Credit";
import { getStudentCreditLog } from "@/apis/creditApi";
import { useQuery } from "@tanstack/react-query";

const formatDateToCustomString = (transactionAt: string) => {
  const date = new Date(transactionAt);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayIndex = date.getDay();

  const formattedString = `${month}.${day}(${dayNames[dayIndex]})`;

  return formattedString;
};
export type StudentCreditLog = {
  id: number;
  username: string;
  changePoint: number;
  description: string;
  score: number;
  transactionAt: string;
};
const columns: Column<CreditLog>[] = [
  {
    Header: "내용",
    accessor: (row: CreditLog) => (
      <div>
        <BlackTxt>{row.description}</BlackTxt>
        <GrayTxt>{formatDateToCustomString(row.transactionAt)}</GrayTxt>
      </div>
    ),
  },
  {
    Header: "점수",
    accessor: (row: CreditLog) => (
      <div>
        <BlueTxt>{row.changePoint}점</BlueTxt>
        <GrayTxt>{row.score}점</GrayTxt>
      </div>
    ),
  },
];

const CreditLogTable: React.FC<{ username: string }> = (props) => {
  const { username } = props;
  const { data: studentCreditLogData, isLoading: studentCreditLogLoading } =
    useQuery<CreditLog[]>(["studentCreditLog", username], () =>
      getStudentCreditLog(username)
    );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<CreditLog>({ columns, data: studentCreditLogData || [] });

  if (studentCreditLogLoading) {
    return <>Loading...</>;
  }
  if (!studentCreditLogData || studentCreditLogData.length === 0) {
    return <>내역이 없습니다.</>;
  }

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default CreditLogTable;
