import { useTable, Column } from "react-table";
import { Thead, Table, Tbody } from "@/style/credit/ClassCreditTableStyle";
import { BlackTxt, GrayTxt, BlueTxt } from "@/style/credit/CreditLogTableStyle";
import { useQuery } from "@tanstack/react-query";
import { getMyClassInfo } from "@/apis/infoApi";
import { StudentInfo } from "@/apis/infoApi";
import { useMemo } from "react";
import { parseJwt } from "@/utils/parseJwt";

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
  executeUsername?: string;
};

const EvaluatorLogTable: React.FC<{ data: any }> = (props) => {
  const { data } = props;
  const { data: myClassData, isLoading: myClassLoading } = useQuery<
    Record<string, StudentInfo>
  >({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });

  const savedAccessToken = localStorage.getItem("accessToken");
  const userRoles = savedAccessToken && parseJwt(savedAccessToken).roles;

  const columns: Column<StudentCreditLog>[] = useMemo(
    () => [
      {
        Header: "내용",
        accessor: (row: StudentCreditLog) => (
          <div>
            <BlackTxt>
              {myClassData &&
                userRoles.includes("ROLE_TEACHER") &&
                row.executeUsername &&
                `${myClassData[row.executeUsername]?.name}→`}
              {myClassData && myClassData[row.username]?.name}
            </BlackTxt>
            <GrayTxt>{row.description}</GrayTxt>
          </div>
        ),
      },
      {
        Header: "점수",
        accessor: (row: StudentCreditLog) => (
          <div>
            <BlueTxt>{row.changePoint}점</BlueTxt>
            <GrayTxt>{formatDateToCustomString(row.transactionAt)}</GrayTxt>
          </div>
        ),
      },
    ],
    [myClassData]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<StudentCreditLog>({ columns, data: data || [] });

  if (myClassLoading) {
    return <>Loading...</>;
  }
  if (!data || data.length === 0) {
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

export default EvaluatorLogTable;
