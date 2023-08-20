import React, { ReactNode, useState } from "react";
import UserContext, { UserContextType, UserInfo } from "@/store/UserContext"; // Adjust the import path and type name accordingly

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = (props) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    name: "",
    //임시적으로 통장번호 입력해둠. 로그인 API해결 시에 고칠 것
    pocketmoneyAccountNo: "e033690f-f486-471f-b303-9ffcdb3f5780",
  });

  const contextValue: UserContextType = {
    userInfo,
    setUserInfo,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
