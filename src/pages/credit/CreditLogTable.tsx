import { useTable } from "react-table";
import { Thead, Table, Tbody } from "@/style/credit/ClassCreditTableStyle";
import { BlackTxt, GrayTxt, BlueTxt } from "@/style/credit/CreditLogTableStyle";

export const formatDateToCustomString = (createdAt) => {
  const date = new Date(createdAt);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayIndex = date.getDay();

  const formattedString = `${month}.${day}(${dayNames[dayIndex]})`;

  return formattedString;
};

const columns = [
  {
    Header: "내용",
    accessor: (row: any) => (
      <div>
        <BlackTxt>{row.description}</BlackTxt>
        <GrayTxt>{formatDateToCustomString(row.createdAt)}</GrayTxt>
      </div>
    ),
  },
  {
    Header: "점수",
    accessor: (row: any) => (
      <div>
        <BlueTxt>{row.changePoint}점</BlueTxt>
        <GrayTxt>{row.score}점</GrayTxt>
      </div>
    ),
  },
];

function CreditLogTable({ creditLogData }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: creditLogData });

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default CreditLogTable;
