import React, { useState, ReactNode } from "react";
import ClassStudentsContext, {
  StudentInfo,
  ClassStudentsContextType,
} from "@/store/ClassStudentsContext";

interface ClassStudentsProviderProps {
  children: ReactNode;
}

const ClassStudentsProvider: React.FC<ClassStudentsProviderProps> = (props) => {
  const [students, setStudents] = useState<StudentInfo[]>([]);

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
