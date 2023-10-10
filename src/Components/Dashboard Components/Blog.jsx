import React from "react";
import Sidebar from "../NavBar/Sidebar";
import { BlogDashboard } from "./BlogDashboard";

export const Blogs = () => {
  return (
    <div className='flex md:flex-row   flex-col  dark:bg-midnightBlack'>
      <Sidebar />
      <BlogDashboard />
    </div>
  );
};
