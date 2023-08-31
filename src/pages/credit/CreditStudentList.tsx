import React from "react";
import { Wrapper, StudentBtns } from "@/style/transfer/StudentListStyle";
import FormBtn from "@/style/common/FormBtn";

import { useQuery } from "@tanstack/react-query";
import { getMyClassInfo } from "@/apis/infoApi";
import { StudentInfo } from "@/apis/infoApi";
import { UseFormSetValue } from "react-hook-form";
import { CreditFormData } from "@/pages/credit/CreditForm";

//setValue의 interface를 CreditFormData로 하지 않으면 에러가 떠서 결국 StudentList를 복사한 컴포넌트를 만듦
interface StudentListProps {
  setValue: UseFormSetValue<CreditFormData>;
  watchStudentNumbers: number[];
  height?: string;
}

const CreditStudentList: React.FC<StudentListProps> = ({
  setValue,
  watchStudentNumbers,
  height,
}: StudentListProps) => {
  const { data: myClassData, isLoading: myClassLoading } = useQuery<
    StudentInfo[]
  >({
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

export default CreditStudentList;
