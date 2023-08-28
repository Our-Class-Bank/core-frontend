import { useQuery } from "@tanstack/react-query";
import { getMyClassInfo } from "@/apis/infoApi";

export interface UserClassType {
  schoolName: string;
  grade: number;
  classNumber: number;
  attendanceNumber: number;
}
export interface MyClassDataType {
  username: string;
  name: string;
  pocketmoneyAccountNo: string;
  userClass: UserClassType;
}

export function useMyClassInfo(): UseQueryResult<MyClassDataType> {
  return useQuery<MyClassDataType>(["myClass"], getMyClassInfo);
}
