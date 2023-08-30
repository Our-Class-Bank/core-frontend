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
  { Header: "점수", accessor: (row) => <span>{row.score}점</span> },
];

interface Props {
  changeToStudentCredit: (studentName: string) => void;
}

function ClassCreditTable(props: Props) {
  const { changeToStudentCredit } = props;

  const { data: classCreditData, isLoading: classCreditLoading } = useQuery<
    ClassCreditData[]
  >({
    queryKey: ["classCreditData"],
    queryFn: getClassCredit,
  });
  const filteredCreditData = classCreditData ? classCreditData.slice(1) : [];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ClassCreditData>({ columns, data: filteredCreditData });

  //여기에서 해당 학생의 username을 받아다가 changeTosStudentCredit으로 정보를 보내주고 싶으나, ClassCreditData에는 username 정보가 없음
  //그렇게 하고 싶은 이유는 Credit에서 바로 username을 알면 굳이 myClassData에서 해당되는 학생을 찾을 필요 없이 바로 클릭한 학생의 로그를 불러올 수 있기 때문
  //현재로서 특정 학생의 로그를 불러오기 위해서는 그 학생의 username이 필요한 상황

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
