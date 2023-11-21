import { privateApi } from "./authApi";

export interface UserClassInfo {
  schoolName: string;
  grade: number;
  classNumber: number;
  attendanceNumber: number;
}

export interface StudentInfo {
  username: string;
  name: string;
  pocketmoneyAccountNo: string;
  userClass: UserClassInfo;
}

export async function getMyClassInfo() {
  const response = await privateApi.get(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/same-class/user`
  );
  const students = response.data.slice(1);
  const usernameIdxData: Record<string, StudentInfo> = {};
  students.forEach((student: StudentInfo) => {
    usernameIdxData[student.username] = student;
  });
  return usernameIdxData;
}
