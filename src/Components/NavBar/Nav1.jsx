import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import { MdOutlineLightMode, MdOutlineNightlightRound } from "react-icons/md";

export const Nav1 = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme && storedTheme !== theme) {
        setTheme(storedTheme);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [theme]);

  return (
    <div className='h-[70px]  w-full dark:bg-slate-800 dark:text-white bg-zinc-100'>
      <div className=' h-full w-[95%] m-auto flex items-center justify-between'>
        {/* Logo div */}
        <div>
          <Typed
            className='text-xl md:text-2xl text-[#2F1CA6] font-bold md:pl-4 pl-2'
            strings={["codebyte"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        {/* pages content */}
        <div className='flex gap-4 font-sans font-medium text-lg'>
          <div className='hidden md:flex items-center gap-10'>
            <Link to='/'>
              <div>Home</div>
            </Link>
            <Link to='/about'>
              <div>About</div>
            </Link>
            <Link to='/projects'>
              {" "}
              <div>Projects</div>
            </Link>
            <Link to='/portfolio'>
              <div>Portfolio</div>
            </Link>
            <Link to='/contact'>
              <div>Contact</div>
            </Link>
            <Link to='/blog'>
              {" "}
              <div>Blog</div>
            </Link>
            <Link to='/blog'>
              {" "}
              <div>Community</div>
            </Link>
            <Link to='/login'>
              <div className='border p-2 bg-[#FA383E] py-2 text-white rounded-md'>
                Login
              </div>
            </Link>
            <Link to='/sign'>
              <div className='border-2 border-[#FA383E] w-24 text-center p-2 rounded-md '>
                Register
              </div>
            </Link>
            <div
              className=' dark:bg-slate-900 p-1 flex items-center cursor-pointer bg-yellow-400 justify-center rounded-full'
              onClick={handleThemeSwitch}
            >
              {theme === "light" ? (
                <MdOutlineLightMode className='text-2xl' />
              ) : (
                <MdOutlineNightlightRound className='text-2xl text-slate-500' />
              )}
            </div>
          </div>

          {/* responsive menu */}
          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] flex flex-col items-center gap-4 pt-4 text-white ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <div className='text-white'>Home</div>
            <div>About</div>
            <div>Projects</div>
            <div>Portfolio</div>
            <div>Contact</div>
            <div>Blog</div>
            <div>Login</div>
            <div>Register</div>
            <div>Dark</div>
          </div>
        </div>
      </div>
    </div>
  );
};
