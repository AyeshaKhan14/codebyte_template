import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Sign } from "./Sign";
import { About } from "./About";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { Blog } from "./Blog";
import { DashBoard } from "./DashBoard";
import { Portfolio } from "./Portfolio";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign' element={<Sign />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/dashboard' element={<DashBoard />} />
    </Routes>
  );
};
