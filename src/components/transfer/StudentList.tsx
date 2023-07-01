import { Wrapper, Container } from "@/style/transfer/StudentListStyle";
import FormBtn from "@/style/common/FormBtn";
import { useState } from "react";

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
//multiple values를 어떻게 setValue로 넣을 것인가.
//setValue를 이용하되, array를 만들어 넣자.
const StudentList = ({ setValue, watchStudents }) => {
  const handleStudentClick = (event) => {
    //여기서 student 가져오기 위해 FormBtn에서 value를 받을 수 있게 함
    const clickedStudent = event.target.value;
    let updatedStudents = [];
    const previousStudents = watchStudents;
    const existingStudentIndex = previousStudents.findIndex(
      (previousStudent) => previousStudent === clickedStudent
    );
    console.log(existingStudentIndex);
    if (existingStudentIndex > -1) {
      //이미 있는 학생일 경우, 다시 클릭된 것이므로 해당 학생 삭제
      updatedStudents = previousStudents.filter(
        (_, index) => index !== existingStudentIndex
      );
    } else {
      //학생이 없을 경우, 해당 학생 추가
      updatedStudents = [...previousStudents, clickedStudent];
    }
    console.log(updatedStudents);
    setValue("students", updatedStudents);
  };

  return (
    <Wrapper>
      <Container>
        {students.map((student: string, index: number) => (
          <FormBtn
            onClick={handleStudentClick}
            isCurrent={watchStudents.includes(student)}
            key={index}
          >
            {student}
          </FormBtn>
        ))}
      </Container>
    </Wrapper>
  );
};

export default StudentList;
