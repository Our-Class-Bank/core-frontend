import { Route, Routes } from "react-router-dom";
import Login from "@/pages/login/Login";
import MyBank from "@/pages/my-bank/MyBank";
import Transfer from "@/pages/transfer/Transfer";
function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<MyBank />} />
      <Route path="/login" element={<Login />} />
      <Route path="/transfer" element={<Transfer />} />
    </Routes>
  );
}

export default RoutePage;
