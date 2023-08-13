import { Route, Routes } from "react-router-dom";
import Login from "@/pages/login/Login";
import Transfer from "@/pages/transfer/Transfer";
import Home from "@/pages/home/Home";
import Credit from "@/pages/credit/Credit";
function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/credit" element={<Credit />} />
    </Routes>
  );
}

export default RoutePage;
