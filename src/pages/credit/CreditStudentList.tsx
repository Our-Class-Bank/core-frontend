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
  watchStudentIds: string[];
  height?: string;
}

const CreditStudentList: React.FC<StudentListProps> = ({
  setValue,
  watchStudentIds,
  height,
}: StudentListProps) => {
  const { data: myClassData, isLoading: myClassLoading } = useQuery<
    Record<string, StudentInfo>
  >({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });
  const handleStudentClick = (username: string) => {
    const updatedUsernames = watchStudentIds.includes(username)
      ? watchStudentIds.filter((watchStudent) => watchStudent !== username)
      : [...watchStudentIds, username];

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
                isCurrent={watchStudentIds.includes(username)}
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

export default CreditStudentList;
