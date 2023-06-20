import styled from "styled-components";

const Button = styled.button`
  width: 170px;
  height: 70px;
  background: #ffffff;
  border-radius: 10px;
`;
const Text = styled.span`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 27px;

  color: #2f3fd4;
`;

function LogoutBtn() {
  return (
    <Button>
      <Text>로그아웃</Text>
    </Button>
  );
}
export default LogoutBtn;
