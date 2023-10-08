import { useTable, Cell, Column, HeaderGroup, Row } from "react-table";
import { useMemo } from "react";
import {
  Thead,
  Table,
  Tbody,
  StyledDetailIcon,
} from "@/style/credit/ClassCreditTableStyle";
import { useQuery } from "@tanstack/react-query";
import { getClassCredit } from "@/apis/creditApi";
import { StudentInfo } from "@/apis/infoApi";
import { getMyClassInfo } from "@/apis/infoApi";

interface ClassCreditData {
  username: string;
  score: string;
}

interface Props {
  changeToStudentCredit?: (studentName: string) => void;
}

function ClassCreditTable(props: Props) {
  const { changeToStudentCredit } = props;

  const { data: classCreditData, isLoading: classCreditLoading } = useQuery<
    ClassCreditData[]
  >({
    queryKey: ["classCreditData"],
    queryFn: getClassCredit,
  });

  const { data: myClassData, isLoading: myClassLoading } = useQuery<
    Record<string, StudentInfo>
  >({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });

  const columns: Column<ClassCreditData>[] = useMemo(
    () => [
      {
        Header: "번호",
        accessor: (row: ClassCreditData) => (
          <span>
            {myClassData &&
              myClassData[row.username]?.userClass.attendanceNumber}
          </span>
        ),
      },
      {
        Header: "이름",
        accessor: (row: ClassCreditData) => (
          <span>{myClassData && myClassData[row.username]?.name}</span>
        ),
      },
      {
        Header: "점수",
        accessor: (row: ClassCreditData) => <span>{row.score}점</span>,
      },
    ],
    [myClassData]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ClassCreditData>({
      columns,
      data: classCreditData || [],
    });

  const handleClick = (row: Row<ClassCreditData>) => {
    const clickedUsername = row.original.username;
    changeToStudentCredit && changeToStudentCredit(clickedUsername);
  };

  if (classCreditLoading || myClassLoading) {
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
        {rows.map((row: Row<ClassCreditData>) => {
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
