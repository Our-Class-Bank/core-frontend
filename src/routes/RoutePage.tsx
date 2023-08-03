import { Route, Routes } from "react-router-dom";
import Login from "@/pages/login/Login";
import Transfer from "@/pages/transfer/Transfer";
import WorkList from "@/pages/WorkList";
import Home from "@/pages/home/Home";

function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/work-list" element={<WorkList />} />
    </Routes>
  );
}

export default RoutePage;
