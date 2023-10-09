//import { privateApi } from "@/apis/authApi";
import axios from "axios";

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

{
  /*export async function getClassStudentsInfo(): Promise<
  Record<number, StudentInfo>
> {
  const response = await privateApi.get<StudentInfo[]>(
    "/api/v1/same-class/user"
  );

  return response.data;
}*/
}

export async function getMyClassInfo() {
  const response = await axios.get(
    `http://43.200.121.145:8080/api/v1/same-class/user`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const students = response.data.slice(1);
  const usernameIdxData: Record<string, StudentInfo> = {};
  students.forEach((student: StudentInfo) => {
    usernameIdxData[student.username] = student;
  });
  return usernameIdxData;
}
