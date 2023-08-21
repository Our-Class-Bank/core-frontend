import React, { Dispatch, SetStateAction } from "react";

export interface StudentClassInfo {
  schoolName: string;
  grade: number;
  classNumber: number;
  attendanceNumber: number;
}

export interface StudentInfo {
  username: string;
  name: string;
  pocketmoneyAccountNo: string;
  userClass: StudentClassInfo;
}

export interface ClassStudentsContextType {
  students: StudentInfo[];
  setStudents: Dispatch<SetStateAction<StudentInfo[]>>;
}

const ClassStudentsContext = React.createContext<
  ClassStudentsContextType | undefined
>(undefined);

export default ClassStudentsContext;
