import React, { Dispatch, SetStateAction } from "react";

export interface UserInfo {
  username: string;
  name: string;
  pocketmoneyAccountNo: string;
}

export interface UserContextType {
  userInfo: UserInfo;
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
}

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export default UserContext;
