import React from "react";
import { Nav1 } from "./Nav1";
import { Nav2 } from "./Nav2";

export const Nav = () => {
  return (
    <div className='sticky top-0'>
      <Nav1 />
      <Nav2 />
    </div>
  );
};
