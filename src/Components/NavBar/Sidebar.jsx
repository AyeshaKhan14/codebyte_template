import React from "react";
import dasboardlogo from "../../assests/dashboard.svg"
import settingsIcon from "../../assests/settingsIcon.svg"
import projects from "../../assests/projects.svg"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto ">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              className="dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-gray-950 flex items-center p-2  rounded-lg "
              to="/user/dashboard"
            >
              <img
                alt="dashboard Icon"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                src={dasboardlogo}
                style={{ color: "transparent" }}
              />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className="dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-gray-950 flex items-center p-2  rounded-lg "
              to="/user/account-setting"
            >
              <img
                alt="setting Icon"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                src={settingsIcon}
                style={{ color: "transparent" }}
              />
              <span className="ml-3">Account Setting</span>
            </Link>
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-purple-700 to-indigo-500  text-white flex items-center p-2  rounded-lg "
              href="/user/upload-project"
            >
              <img
                alt="projects Icon"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                src={projects}
                style={{ color: "transparent" }}
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
              <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
              </span>
            </a>
          </li>
          <li className="animate-pulse ">
            <a
              className="flex items-center p-2 text-gray-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              href="/user/upload-project#"
            >
              🚀<span className="flex-1 ml-3 whitespace-nowrap">Comming Soon</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                3
              </span>
            </a>
          </li>
          <li className="animate-pulse ">
            <a
              className="flex items-center p-2 text-gray-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              href="/user/upload-project#"
            >
              🚀<span className="flex-1 ml-3 whitespace-nowrap">Comming Soon</span>
            </a>
          </li>
        </ul>
        <div
          id="dropdown-cta"
          className=" p-4 mt-6 rounded-lg bg-indigo-50 dark:bg-indigo-900"
          role="alert"
        >
          <div className="flex items-center mb-3">
            <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
              Beta
            </span>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-indigo-50 inline-flex justify-center items-center w-6 h-6 text-indigo-900 rounded-lg focus:ring-2 focus:ring-indigo-400 p-1 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-400 dark:hover:bg-indigo-800"
              data-dismiss-target="#dropdown-cta"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                ></path>
              </svg>
            </button>
          </div>
          <p className="mb-3 text-sm text-indigo-800 dark:text-indigo-400">
            🚀 Welcome to the beta version! More features coming soon. Your
            feedback matters! 🌟
          </p>
          <a
            className="text-sm text-indigo-800 underline font-medium hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
            href="/user/upload-project#"
          >
            Turn new navigation off
          </a>
        </div>
        <div className=" flex flex-col gap-4 my-2">
          <div className="flex justify-between bg-gradient-to-r from-purple-700 to-indigo-500  text-white text-[13px] font-[600] rounded-lg p-3">
            <a href="/userdetail/tofosa2228@gronasu.com">View Profile</a>
          </div>
          <div className="flex items-center p-2 text-[14px] font-[600] dark:bg-darkCard bg-lightCard gap-2 rounded-lg">
            <span className="flex justify-between bg-gradient-to-r from-purple-700 to-indigo-500  text-white px-3 py-2 rounded-full">
              A
            </span>
            <div>
              <span className="text-gray-500 dark:text-white">Ayesha Khan</span>
              <br />
              <span className="text-gray-500 dark:text-white text-xs font-medium">
                tofosa2228@gronasu.com
              </span>
            </div>
          </div>
          <button className="w-full flex p-3 text-white text-[14px] font-[600] bg-indigo-500 gap-4 rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
