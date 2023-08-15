import { useTable, Cell, Column, HeaderGroup, Row } from "react-table";
import {
  Thead,
  Table,
  Tbody,
  StyledDetailIcon,
} from "@/style/credit/ClassCreditTableStyle";

interface ClassCreditData {
  attendanceNumber: number;
  name: string;
  score: string;
}

const classCreditData: ClassCreditData[] = [
  { attendanceNumber: 1, name: "권아현", score: "71점" },
  { attendanceNumber: 2, name: "권아현", score: "72점" },
  { attendanceNumber: 3, name: "남궁민수", score: "73점" },
];

const columns: Column<ClassCreditData>[] = [
  { Header: "번호", accessor: "attendanceNumber" },
  { Header: "이름", accessor: "name" },
  { Header: "점수", accessor: "score" },
];

interface Props {
  changeToStudentCredit: (studentName: string) => void;
}

function ClassCreditTable(props: Props) {
  const { changeToStudentCredit } = props;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ClassCreditData>({ columns, data: classCreditData });

  const handleClick = (row: Row<ClassCreditData>) => {
    const studentName = row.cells[1].value as string;
    changeToStudentCredit(studentName);
  };

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup: HeaderGroup<ClassCreditData>) => (
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
            <tr
              {...row.getRowProps()}
              onClick={() => handleClick(row)}
              key={row.id}
            >
              {row.cells.map((cell: Cell<ClassCreditData>) => (
                <td {...cell.getCellProps()} key={cell.column.id}>
                  {cell.render("Cell")}
                </td>
              ))}
              <StyledDetailIcon />
            </tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default ClassCreditTable;
