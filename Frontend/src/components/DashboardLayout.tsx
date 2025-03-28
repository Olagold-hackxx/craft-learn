import { Outlet } from "react-router-dom";
import Sidebar1 from "./Dashboard/Sidebar";
import Header from "./Dashboard/Header";

const DashboardLayout = () => {
  return (
    <div className="">
      <Header className=" w-full" />
      <div className="flex bg-[#F9F9F7]">
        <Sidebar1 className="flex" />
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
    </div>
  );
};

export default DashboardLayout;
