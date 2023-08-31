import { Outlet } from "react-router-dom";
import Header from "@/pages/layout/Header";
import SideBar from "@/pages/layout/SideBar";

function Layout() {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
}

export default Layout;
