import React from "react";
import { Wrapper, StudentBtns } from "@/style/transfer/StudentListStyle";
import FormBtn from "@/style/common/FormBtn";

import { useQuery } from "@tanstack/react-query";
import { getMyClassInfo } from "@/apis/infoApi";

interface StudentListProps {
  setValue: (name: "studentNumbers", value: number[]) => void;
  watchStudentNumbers: number[];
  height?: string;
}

const StudentList: React.FC<StudentListProps> = ({
  setValue,
  watchStudentNumbers,
  height,
}: StudentListProps) => {
  const { data: myClassData, isLoading: myClassLoading } = useQuery({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });
  const handleStudentClick = (attendanceNumber: number) => {
    const updatedAttendanceNumbers = watchStudentNumbers.includes(
      attendanceNumber
    )
      ? watchStudentNumbers.filter(
          (watchStudent) => watchStudent !== attendanceNumber
        )
      : [...watchStudentNumbers, attendanceNumber];

    setValue("studentNumbers", updatedAttendanceNumbers);
    console.log(watchStudentNumbers);
  };
  if (myClassLoading) {
    return <>Loading...</>;
  }

  return (
    <Wrapper height={height}>
      <StudentBtns>
        {myClassData &&
          myClassData.slice(1).map((student) => {
            const {
              name,
              userClass: { attendanceNumber },
            } = student;
            if (!student) return null;
            return (
              <FormBtn
                onClick={() => handleStudentClick(attendanceNumber)}
                isCurrent={watchStudentNumbers.includes(attendanceNumber)}
                key={attendanceNumber}
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
