import { Wrapper, StudentBtns } from "@/style/transfer/StudentListStyle";
import FormBtn from "@/style/common/FormBtn";

import { useQuery } from "@tanstack/react-query";
import { getMyClassInfo } from "@/apis/infoApi";

interface StudentListProps {
  setValue: (name: "students", value: number[]) => void;
  watchStudentNumbers: number[];
  height?: string;
}

const StudentList = ({
  setValue,
  watchStudentNumbers,
  height,
}: StudentListProps) => {
  const { data: myClassData, isLoading: myClassLoading } = useQuery({
    queryKey: ["myClassData"],
    queryFn: getMyClassInfo,
  });
  console.log(myClassData);
  const handleStudentClick = (attendanceNumber: number) => {
    const updatedAttendanceNumbers = watchStudentNumbers.includes(
      attendanceNumber
    )
      ? //이미 클릭되어있는 student일 경우, selectedStudents에서 삭제 및 unClick
        watchStudentNumbers.filter(
          (watchStudent) => watchStudent !== attendanceNumber
        )
      : //아직 클릭되어있지 않은 student일 경우, selectedStudents에 추가
        [...watchStudentNumbers, attendanceNumber];

    //setSelectedStudents(updatedStudents);
    setValue("studentNumbers", updatedAttendanceNumbers);
  };
  if (myClassLoading) {
    return <>Loading...</>;
  }

  return (
    <Wrapper height={height}>
      <StudentBtns>
        {myClassData.slice(1).map((student) => {
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
