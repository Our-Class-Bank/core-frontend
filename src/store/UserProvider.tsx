import React, { ReactNode, useState } from "react";
import UserContext, { UserContextType, UserInfo } from "@/store/UserContext"; // Adjust the import path and type name accordingly

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = (props) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    name: "",
    pocketmoneyAccountNo: "",
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
