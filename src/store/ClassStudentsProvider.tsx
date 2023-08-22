import React, { useState, ReactNode } from "react";
import ClassStudentsContext, {
  StudentInfo,
  ClassStudentsContextType,
} from "@/store/ClassStudentsContext";

interface ClassStudentsProviderProps {
  children: ReactNode;
}

const ClassStudentsProvider: React.FC<ClassStudentsProviderProps> = (props) => {
  const [students, setStudents] = useState<Record<number, StudentInfo>>({
    0: {
      username: "teacher001",
      name: "김선생",
      pocketmoneyAccountNo: "941ca106-263c-4b0a-a999-af60a6e6a85e",
      userClass: {
        schoolName: "우리초등학교",
        grade: 3,
        classNumber: 1,
        attendanceNumber: 0,
      },
    },
    1: {
      username: "user001",
      name: "홍길동",
      pocketmoneyAccountNo: "e033690f-f486-471f-b303-9ffcdb3f5780",
      userClass: {
        schoolName: "우리초등학교",
        grade: 3,
        classNumber: 1,
        attendanceNumber: 1,
      },
    },
    2: {
      username: "user002",
      name: "김철수",
      pocketmoneyAccountNo: "a31b8420-45b8-46ff-990c-859c118e5cd2",
      userClass: {
        schoolName: "우리초등학교",
        grade: 3,
        classNumber: 1,
        attendanceNumber: 2,
      },
    },
    3: {
      username: "banker001",
      name: "김은행",
      pocketmoneyAccountNo: "a87901a1-c129-45a2-943b-356412aa8618",
      userClass: {
        schoolName: "우리초등학교",
        grade: 3,
        classNumber: 1,
        attendanceNumber: 3,
      },
    },
    4: {
      username: "credit001",
      name: "김신용평가원",
      pocketmoneyAccountNo: "d5a2a785-de55-4ca4-9330-893b5d9e6bd2",
      userClass: {
        schoolName: "우리초등학교",
        grade: 3,
        classNumber: 1,
        attendanceNumber: 4,
      },
    },
  });

  const contextValue: ClassStudentsContextType = {
    students,
    setStudents,
  };

  return (
    <ClassStudentsContext.Provider value={contextValue}>
      {props.children}
    </ClassStudentsContext.Provider>
  );
};

export default ClassStudentsProvider;
