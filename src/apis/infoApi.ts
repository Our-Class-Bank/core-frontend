import { privateApi } from "@/apis/authApi";

export async function getMyInfo() {
  const response = await privateApi.get("/api/v1/my");
  return response;
}

interface UserClassInfo {
  schoolName: string;
  grade: number;
  classNumber: number;
  attendanceNumber: number;
}

interface StudentInfo {
  username: string;
  name: string;
  pocketmoneyAccountNo: string;
  userClass: UserClassInfo;
}

export async function getClassStudentsInfo(): Promise<
  Record<number, StudentInfo>
> {
  const response = await privateApi.get<StudentInfo[]>(
    "/api/v1/same-class/user"
  );

  const responseArrToObject: Record<number, StudentInfo> = response.data.reduce(
    (acc, curr) => {
      acc[curr.userClass.attendanceNumber] = curr;
      return acc;
    },
    {} as Record<number, StudentInfo>
  );

  return responseArrToObject;
}