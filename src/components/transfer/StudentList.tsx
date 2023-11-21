import React from "react";
import { Wrapper, StudentBtns } from "@/style/transfer/StudentListStyle";
import FormBtn from "@/style/common/FormBtn";

import { useQuery } from "@tanstack/react-query";
import { getMyClassInfo } from "@/apis/infoApi";
import { StudentInfo } from "@/apis/infoApi";
import { UseFormSetValue } from "react-hook-form";
import { SubmitData } from "./TransferForm";

interface StudentListProps {
  setValue: UseFormSetValue<SubmitData>;
  watchstudentIds: string[];
  height?: string;
}

const StudentList: React.FC<StudentListProps> = ({
  setValue,
  watchstudentIds,
  height,
}: StudentListProps) => {
  const { data: myClassData, isLoading: myClassLoading } = useQuery<
    Record<string, StudentInfo>
  >({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });
  const handleStudentClick = (username: string) => {
    const updatedUsernames = watchstudentIds.includes(username)
      ? watchstudentIds.filter((watchStudent) => watchStudent !== username)
      : [...watchstudentIds, username];

    setValue("studentIds", updatedUsernames);
  };
  if (myClassLoading) {
    return <>Loading...</>;
  }

  return (
    <Wrapper height={height}>
      <StudentBtns>
        {myClassData &&
          Object.values(myClassData).map((student) => {
            const {
              name,
              username,
              userClass: { attendanceNumber },
            } = student;
            if (!student) return null;
            return (
              <FormBtn
                onClick={() => handleStudentClick(username)}
                isCurrent={watchstudentIds.includes(username)}
                key={username}
              >
                {attendanceNumber}.{name}
              </FormBtn>
            );
          })}
      </StudentBtns>
    </Wrapper>
  );
};

export default StudentList;
