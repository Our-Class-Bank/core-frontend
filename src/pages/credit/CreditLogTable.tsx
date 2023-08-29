import { useTable } from "react-table";
import { Thead, Table, Tbody } from "@/style/credit/ClassCreditTableStyle";
import { BlackTxt, GrayTxt, BlueTxt } from "@/style/credit/CreditLogTableStyle";

export interface CreditLogData {
  id: number;
  username: string;
  changePoint: number;
  description: string;
  score: number;
  createdAt: string;
}

export const formatDateToCustomString = (createdAt: string) => {
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
    accessor: (row: CreditLogData) => (
      <div>
        <BlackTxt>{row.description}</BlackTxt>
        <GrayTxt>{formatDateToCustomString(row.createdAt)}</GrayTxt>
      </div>
    ),
  },
  {
    Header: "점수",
    accessor: (row: CreditLogData) => (
      <div>
        <BlueTxt>{row.changePoint}점</BlueTxt>
        <GrayTxt>{row.score}점</GrayTxt>
      </div>
    ),
  },
];

interface CreditLogTableProps {
  creditLogData: CreditLogData[];
}

const CreditLogTable: React.FC<CreditLogTableProps> = ({ creditLogData }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: creditLogData });

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
