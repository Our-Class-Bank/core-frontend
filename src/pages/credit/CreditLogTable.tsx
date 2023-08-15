import { useTable } from "react-table";
import { Thead, Table, Tbody } from "@/style/credit/ClassCreditTableStyle";
import { BlackTxt, GrayTxt, BlueTxt } from "@/style/credit/CreditLogTableStyle";

const creditLogData = [
  {
    content: "국어 게임 우승",
    date: "7.14(금)",
    change: "+1점",
    score: "70점",
  },
  {
    content: "국어 게임 우승",
    date: "7.14(금)",
    change: "+1점",
    score: "70점",
  },
];

const columns = [
  {
    Header: "내용",
    accessor: (row: any) => (
      <div>
        <BlackTxt>{row.content}</BlackTxt>
        <GrayTxt>{row.date}</GrayTxt>
      </div>
    ),
  },
  {
    Header: "점수",
    accessor: (row: any) => (
      <div>
        <BlueTxt>{row.change}</BlueTxt>
        <GrayTxt>{row.score}</GrayTxt>
      </div>
    ),
  },
];

function CreditLogTable() {
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
