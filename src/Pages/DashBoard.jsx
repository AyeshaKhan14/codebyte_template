import React from "react";
import Sidebar from "../Components/NavBar/Sidebar";
import { ProjectsDashboard } from "../Components/Dashboard Components/ProjectsDashboard";

export const DashBoard = () => {
  return (
    <div className='flex md:flex-row flex-col  dark:bg-midnightBlack'>
      <Sidebar />
      <ProjectsDashboard />
    </div>
  );
};
