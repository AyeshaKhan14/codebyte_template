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
import ReactJS from "../Components/Search/ReactJS";
import { Blogs } from "../Components/Dashboard Components/Blog";
import { PostPortfolio } from "../Components/Dashboard Components/Post-Portfolio";
import { Account } from "../Components/Dashboard Components/Account";
import { Profile } from "./Profile";

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
      <Route path='/blog-post' element={<Blogs />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/portfolio-post' element={<PostPortfolio />} />
      <Route path='/dashboard' element={<DashBoard />} />
      <Route path='/userprofile' element={<Profile />} />
      <Route path='/accountsettings' element={<Account />} />
      <Route path='/react' element={<ReactJS />} />
    </Routes>
  );
};
