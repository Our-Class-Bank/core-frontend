import { useTable } from "react-table";
import {
  Thead,
  Table,
  Tbody,
  StyledDetailIcon,
} from "@/style/credit/ClassCreditTableStyle";

const classCreditData = [
  { attendanceNumber: 1, name: "권아현", score: "71점" },
  { attendanceNumber: 2, name: "권아현", score: "72점" },
  { attendanceNumber: 3, name: "남궁민수", score: "73점" },
];

const columns = [
  { Header: "번호", accessor: "attendanceNumber" },
  { Header: "이름", accessor: "name" },
  { Header: "점수", accessor: "score" },
];

function ClassCreditTable(props) {
  const { handleCreditDetailStudent, handleStudentDetailMode } = props;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: classCreditData });

  const handleClick = (row) => {
    const studentName = row.cells[1].value;
    handleCreditDetailStudent(studentName);
    handleStudentDetailMode(true);
  };

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
            <tr {...row.getRowProps()} onClick={() => handleClick(row)}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
