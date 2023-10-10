import React from "react";
import Sidebar from "../NavBar/Sidebar";
import { PortfolioDashboard } from "./PortfolioDashboard";

export const PostPortfolio = () => {
  return (
    <div className='flex md:flex-row flex-col  dark:bg-midnightBlack'>
      <Sidebar />
      <PortfolioDashboard />
    </div>
  );
};
