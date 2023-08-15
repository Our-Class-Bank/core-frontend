import { Wrapper, StudentBtns } from "@/style/transfer/StudentListStyle";
import FormBtn from "@/style/common/FormBtn";

const students: string[] = [
  "1.김은행",
  "2.임은행",
  "3.최은행",
  "4.김은행",
  "5.임은행",
  "6.최은행",
  "7.김은행",
  "8.임은행",
  "9.최은행",
  "10.김은행",
  "11.임은행",
  "12.최은행",
  "13.김은행",
  "14.임은행",
  "15.최은행",
  "16.김은행",
  "17.임은행",
  "18.최은행",
  "19.김은행",
  "20.임은행",
  "21.최은행",
  "22.김은행",
  "23.임은행",
  "24.최은행",
  "25.김은행",
  "26.임은행",
];

interface StudentListProps {
  setValue: (name: "students", value: string[]) => void;
  watchStudents: string[];
  height?: string;
}

const StudentList = ({ setValue, watchStudents, height }: StudentListProps) => {
  const handleStudentClick = (student: string) => {
    const updatedStudents = watchStudents.includes(student)
      ? //이미 클릭되어있는 student일 경우, selectedStudents에서 삭제 및 unClick
        watchStudents.filter((watchStudent) => watchStudent !== student)
      : //아직 클릭되어있지 않은 student일 경우, selectedStudents에 추가
        [...watchStudents, student];

    //setSelectedStudents(updatedStudents);
    setValue("students", updatedStudents);
  };

  return (
    <Wrapper height={height}>
      <StudentBtns>
        {students.map((student: string, index: number) => (
          <FormBtn
            onClick={() => handleStudentClick(student)}
            isCurrent={watchStudents.includes(student)}
            key={index}
          >
            {student}
          </FormBtn>
        ))}
      </StudentBtns>
    </Wrapper>
  );
};

export default StudentList;
