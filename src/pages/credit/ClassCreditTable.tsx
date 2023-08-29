import { useTable, Cell, Column, HeaderGroup, Row } from "react-table";
import {
  Thead,
  Table,
  Tbody,
  StyledDetailIcon,
} from "@/style/credit/ClassCreditTableStyle";
import { useQuery } from "@tanstack/react-query";
import { getClassCredit } from "@/apis/creditApi";

interface ClassCreditData {
  attendanceNumber: number;
  studentName: string;
  score: string;
}

const columns: Column<ClassCreditData>[] = [
  { Header: "번호", accessor: "attendanceNumber" },
  { Header: "이름", accessor: "studentName" },
  { Header: "점수", accessor: (row: any) => <span>{row.score}점</span> },
];

interface Props {
  changeToStudentCredit: (studentName: string) => void;
}

function ClassCreditTable(props: Props) {
  const { changeToStudentCredit } = props;

  const { data: classCreditData, isLoading: classCreditLoading } = useQuery({
    queryKey: ["classCreditData"],
    queryFn: getClassCredit,
  });
  const filteredCreditData = classCreditData ? classCreditData.slice(1) : [];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ClassCreditData>({ columns, data: filteredCreditData });

  const handleClick = (row: Row<ClassCreditData>) => {
    const studentName = row.cells[1].value as string;
    changeToStudentCredit(studentName);
  };

  if (classCreditLoading) {
    return <>Loading...</>;
  }
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
