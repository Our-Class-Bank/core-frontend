import { Wrapper, StudentBtns } from "@/style/transfer/StudentListStyle";
import FormBtn from "@/style/common/FormBtn";
import { useContext } from "react";
import ClassStudentsContext from "@/store/ClassStudentsContext";

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
  const { students } = useContext(ClassStudentsContext);
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

  return (
    <Wrapper height={height}>
      <StudentBtns>
        {Object.keys(students).map((attendanceNumber) => {
          const student = students[parseInt(attendanceNumber)];
          if (!student) return null;
          return (
            <FormBtn
              onClick={() =>
                handleStudentClick(student.userClass.attendanceNumber)
              }
              isCurrent={watchStudentNumbers.includes(
                student.userClass.attendanceNumber
              )}
              key={attendanceNumber}
            >
              {student.name}
            </FormBtn>
          );
        })}
      </StudentBtns>
    </Wrapper>
  );
};

export default StudentList;
