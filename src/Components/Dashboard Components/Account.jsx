import React from "react";
import Sidebar from "../NavBar/Sidebar";
import AccountSetting from "./AccountSetting";

export const Account = () => {
  return (
    <div className='flex md:flex-row flex-col  dark:bg-midnightBlack'>
      <Sidebar />
      <AccountSetting />
    </div>
  );
};
