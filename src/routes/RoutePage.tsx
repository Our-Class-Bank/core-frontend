import { Route, Routes } from "react-router-dom";
import Login from "@/pages/login/Login";
import MyBank from "@/pages/my-bank/MyBank";

function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<MyBank />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RoutePage;
