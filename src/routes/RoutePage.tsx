import { Route, Routes } from "react-router-dom";
import Login from "@/pages/login/Login";
import Transfer from "@/pages/transfer/Transfer";
import Home from "@/pages/home/Home";
import Credit from "@/pages/credit/Credit";
import PrivateRoutePage from "./privateRoutePage";
import ResetPassword from "@/pages/reset-password/ResetPassword";

function RoutePage() {
  return (
    <Routes>
      <Route element={<PrivateRoutePage authentication={true} />}>
        <Route path="/" element={<Home />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/credit" element={<Credit />} />
      </Route>
      <Route element={<PrivateRoutePage authentication={false} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}

export default RoutePage;
