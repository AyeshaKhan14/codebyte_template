import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Sign } from "./Sign";
import { About } from "./About";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { Blog } from "./Blog";
import { DashBoard } from "./DashBoard";
import { Portfolio } from "./Portfolio";
import ReactJS, { Search } from "../Components/Search/Search";
import { Blogs } from "../Components/Dashboard Components/Blog";
import { PostPortfolio } from "../Components/Dashboard Components/Post-Portfolio";
import { Account } from "../Components/Dashboard Components/Account";
import { Profile } from "./Profile";
import { Community } from "./Community";
import { SingleComminity } from "../Components/Community/SingleComminity";
import { ProjectSinglePage } from "./ProjectSinglePage";
import { UserProfile } from "./UserProfile";
import { BlogSingle } from "./BlogSingle";

export const AllRoutes = () => {
  const user = JSON.parse(localStorage.getItem("code-user")) || {};
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign' element={<Sign />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/:id' element={<BlogSingle />} />
      <Route path='/blog-post' element={<Blogs />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/portfolio-post' element={<PostPortfolio />} />
      <Route path='/dashboard' element={<DashBoard />} />
      <Route path={`/userprofile/${user?.email}`} element={<Profile />} />
      <Route path='/user-profile/:id' element={<UserProfile />} />
      <Route path='/accountsettings' element={<Account />} />
      <Route path='/community' element={<Community />} />
      <Route path='/community/:id' element={<SingleComminity />} />
      <Route path='/projects/:id' element={<ProjectSinglePage />} />
      <Route path={`/project/:search`} element={<Search />} />
    </Routes>
  );
};
