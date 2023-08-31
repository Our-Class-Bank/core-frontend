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

export async function getMyClassInfo(): Promise<StudentInfo[]> {
  const response = await axios.get(
    `${import.meta.env.VITE_SERVER_IP}/api/v1/same-class/user`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return response.data;
}
