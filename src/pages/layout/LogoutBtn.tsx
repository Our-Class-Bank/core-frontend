import { Button, Text } from "@/style/layout/LogoutBtnStyle";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigation = useNavigate();
  return (
    <Button
      onClick={() => {
        localStorage.removeItem("accessToken");
        navigation("/login");
      }}
    >
      <Text>로그아웃</Text>
    </Button>
  );
}
export default LogoutBtn;
