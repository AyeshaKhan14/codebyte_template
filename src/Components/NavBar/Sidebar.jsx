import React from "react";
import dasboardlogo from "../../assests/dashboard.svg";
import settingsIcon from "../../assests/settingsIcon.svg";
import projects from "../../assests/projects.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearAuth, clearToken } from "../../Redux/slices/user.slice";
import { AiOutlineAppstore, AiOutlineSetting } from "react-icons/ai";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("code-token"));

  const handleLogOut = async () => {
    // Handle Logout
    try {
      // Also Logout form the Server:
      await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout`);

      // clearing the LocalStorage:
      localStorage.removeItem("code-token");
      localStorage.removeItem("code-user");

      // Clearing the user Info from redux:
      dispatch(clearToken());
      dispatch(clearAuth());
      // window.location.reload();

      // Toast:
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className='hidden md:flex w-[22%]'>
        <div className='h-screen min-w-[200px] dark:bg-slate-700 w-full flex flex-col justify-between px-3 py-4 overflow-y-auto'>
          <ul className='space-y-2 font-medium'>
            <li>
              <Link
                className={`dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-gray-950 flex items-center p-2 rounded-lg ${
                  location.pathname === "/user/dashboard"
                    ? "bg-gradient-to-r from-purple-700 to-indigo-500"
                    : ""
                }`}
                to='/dashboard'
              >
                <img
                  alt='dashboard Icon'
                  width='20'
                  height='20'
                  src={dasboardlogo}
                  style={{ color: "transparent" }}
                />
                <span className='ml-3'>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                className={`dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-gray-950 flex items-center p-2 rounded-lg ${
                  location.pathname === "/user/account-setting"
                    ? "bg-gradient-to-r from-purple-700 to-indigo-500"
                    : ""
                }`}
                to='/accountsettings'
              >
                <img
                  alt='setting Icon'
                  width='20'
                  height='20'
                  src={settingsIcon}
                  style={{ color: "transparent" }}
                />
                <span className='ml-3'>Account Setting</span>
              </Link>
            </li>
            <li>
              <Link
                className={`bg-gradient-to-r from-purple-700 to-indigo-500 text-white flex items-center p-2 rounded-lg ${
                  location.pathname === "/user/upload-project"
                    ? "bg-gradient-to-r from-purple-700 to-indigo-500"
                    : ""
                }`}
                to='/dashboard'
              >
                <img
                  alt='projects Icon'
                  loading='lazy'
                  width='20'
                  height='20'
                  decoding='async'
                  data-nimg='1'
                  src={projects}
                  style={{ color: "transparent" }}
                />
                <span className='flex-1 ml-3 whitespace-nowrap'>Projects</span>
                <span className='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                  Pro
                </span>
              </Link>
            </li>
            {/* blog */}
            <li>
              <Link
                className={`bg-gradient-to-r from-purple-700 to-indigo-500 text-white flex items-center p-2 rounded-lg ${
                  location.pathname === "/user/upload-project"
                    ? "bg-gradient-to-r from-purple-700 to-indigo-500"
                    : ""
                }`}
                to='/blog-post'
              >
                <img
                  alt='projects Icon'
                  loading='lazy'
                  width='20'
                  height='20'
                  decoding='async'
                  data-nimg='1'
                  src={projects}
                  style={{ color: "transparent" }}
                />
                <span className='flex-1 ml-3 whitespace-nowrap'>Blogs</span>
              </Link>
            </li>
            {/* portfolio */}
            <li>
              <Link
                className={`bg-gradient-to-r from-purple-700 to-indigo-500 text-white flex items-center p-2 rounded-lg ${
                  location.pathname === "/user/upload-project"
                    ? "bg-gradient-to-r from-purple-700 to-indigo-500"
                    : ""
                }`}
                to='/portfolio-post'
              >
                <img
                  alt='projects Icon'
                  loading='lazy'
                  width='20'
                  height='20'
                  decoding='async'
                  data-nimg='1'
                  src={projects}
                  style={{ color: "transparent" }}
                />
                <span className='flex-1 ml-3 whitespace-nowrap'>Portfolio</span>
              </Link>
            </li>
            <li className='animate-pulse'>
              <Link
                className={`flex items-center p-2 text-gray-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  location.pathname === "/user/upload-project#"
                    ? "bg-gradient-to-r from-purple-700 to-indigo-500"
                    : ""
                }`}
                to='/user/upload-project#'
              >
                🚀
                <span className='flex-1 ml-3 whitespace-nowrap'>
                  Coming Soon
                </span>
                <span className='inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-300'>
                  3
                </span>
              </Link>
            </li>
            <li className='animate-pulse'>
              <Link
                className={`flex items-center p-2 text-gray-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  location.pathname === "/user/upload-project#"
                    ? "bg-gradient-to-r from-purple-700 to-indigo-500"
                    : ""
                }`}
                to='/user/upload-project#'
              >
                🚀
                <span className='flex-1 ml-3 whitespace-nowrap'>
                  Coming Soon
                </span>
              </Link>
            </li>
          </ul>

          <div className=' flex flex-col gap-4 my-2'>
            <div className='flex justify-between bg-gradient-to-r from-purple-700 to-indigo-500  text-white text-[13px] font-[600] rounded-lg p-3'>
              <a href='/profile'>View Profile</a>
            </div>
            <div className='flex items-center p-2 text-[14px] font-[600] dark:bg-darkCard bg-lightCard gap-2 rounded-lg'>
              <span className='flex justify-between bg-gradient-to-r from-purple-700 to-indigo-500  text-white px-3 py-2 rounded-full'>
                A
              </span>
              <div>
                <span className='text-gray-500 dark:text-white'>
                  Ayesha Khan
                </span>
                <br />
                <span className='text-gray-500 dark:text-white text-xs font-medium'>
                  tofosa2228@gronasu.com
                </span>
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className='w-full flex p-3 text-white text-[14px] font-[600] bg-indigo-500 gap-4 rounded-lg'
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* responsive bar */}
      <div className='md:hidden h-[40px] bg-[#FA383E] flex items-center justify-between text-sm font-medium  text-zinc-100'>
        <div className='flex items-center gap-4'>
          <div>
            <Link to='/dashboard'>
              <AiOutlineAppstore className='text-2xl text-white font-bold' />
            </Link>
          </div>
          <div>
            <Link to='/accountsettings'>
              <AiOutlineSetting className='text-2xl text-white font-bold' />
            </Link>
          </div>
        </div>
        {/* 2nd div */}
        <div className='flex items-center gap-4'>
          <Link to='/blog-post'>
            <div>Blog</div>
          </Link>
          <Link to='/portfolio-post'>
            <div>Portfolio</div>
          </Link>
          <Link to='/profile'>
            <div className='border-2 rounded-full h-[35px] w-[35px]'>user</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
