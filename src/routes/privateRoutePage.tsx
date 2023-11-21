import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutePage({
  authentication,
}: {
  authentication: boolean;
}) {
  const isLogin = localStorage.getItem("accessToken");

  if (authentication) {
    return isLogin === null ? <Navigate to="/login" /> : <Outlet />;
  } else {
    return isLogin === null ? <Outlet /> : <Navigate to="/" />;
  }
}
