import React from "react";
import tog from "../../assets/tog.jpg";
import { NavLink, Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="w-80 min-h-screen bg-[#E2E8F0] mt-[-130px] px-[30px] m-auto flex flex-col items-center gap-5">
          <p className="text-[18px] font-[600] mt-[20px]">Admin</p>
          <NavLink className={""} to={"create"}>
            Profil
          </NavLink>
          <NavLink className={""} to={"maninj"}>
            Mesage
          </NavLink>
        </div>
        <div className="flex-1 p-5 mt-[-130px]">
          {" "}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
