import React from "react";
import Sidebar from "../Components/NavBar/Sidebar";
import { ProjectsDashboard } from "../Components/Dashboard Components/ProjectsDashboard";

export const DashBoard = () => {
  return (
    <div className="flex">
      <div className="w-2/5 lg:w-1/5 xl:w-1/5 md:w-2/5 sm:w-2/5  h-screen overflow-y-auto lg:overflow-y-auto">
        <Sidebar />
      </div>
      <div className="w-3/5 lg:w-4/5 xl:w-4/5 md:w-3/5 sm:w-3/5 h-screen ml-1/5 overflow-y-auto lg:overflow-y-auto">
        <ProjectsDashboard/>
      </div>
    </div>
  );
};
