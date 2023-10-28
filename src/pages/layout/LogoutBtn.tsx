import { Button, Text } from "@/style/layout/LogoutBtnStyle";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigation = useNavigate();
  const queryClient = useQueryClient();
  return (
    <Button
      onClick={() => {
        localStorage.removeItem("accessToken");
        navigation("/login");
        queryClient.removeQueries();
      }}
    >
      <Text>로그아웃</Text>
    </Button>
  );
}
export default LogoutBtn;
