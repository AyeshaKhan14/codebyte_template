import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Typed from "react-typed";
import { MdOutlineLightMode, MdOutlineNightlightRound } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearAuth, clearToken } from "../../Redux/slices/user.slice";
import { toast } from "react-toastify";

export const Nav1 = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("code-token")) || "";

  const handleLogOut = async () => {
    // Handle Logout
    try {
      // Also Logout form the Server:
      await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout`);

      // clearing the LocalStorage:
      localStorage.removeItem("code-token");
      localStorage.removeItem("code-user");

      navigate("/");

      // Clearing the user Info from redux:
      dispatch(clearToken());
      dispatch(clearAuth());
      window.location.reload();

      // Toast:
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
    <>
      <div className='h-[70px]  w-full dark:bg-slate-800  dark:text-white bg-zinc-100'>
        <div className=' h-full w-[95%] m-auto flex items-center justify-between'>
          {/* Logo div */}
          <div>
            <Typed
              className='text-xl md:text-2xl lg:text-xl text-[#2F1CA6] font-bold md:pl-4 pl-2'
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
                <div className='hover:text-[#FA383E]'>Home</div>
              </Link>
              <Link to='/about'>
                <div className='hover:text-[#FA383E]'>About</div>
              </Link>
              <Link to='/projects'>
                {" "}
                <div className='hover:text-[#FA383E]'>Projects</div>
              </Link>
              <Link to='/portfolio'>
                <div className='hover:text-[#FA383E]'>Portfolio</div>
              </Link>
              <Link to='/contact'>
                <div className='hover:text-[#FA383E]'>Contact</div>
              </Link>
              <Link to='/blog'>
                {" "}
                <div className='hover:text-[#FA383E]'>Blog</div>
              </Link>

              {/* auth */}
              {token ? (
                <>
                  {" "}
                  <Link to='/community'>
                    {" "}
                    <div className='hover:text-[#FA383E]'>Community</div>
                  </Link>
                  <div
                    onClick={handleLogOut}
                    className='p-2 bg-[#FA383E] cursor-pointer hover:bg-red-400 py-2 text-white rounded-md'
                  >
                    Logout
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <Link to='/login'>
                    <div className='p-2 bg-[#FA383E] py-2 text-white rounded-md'>
                      Login
                    </div>
                  </Link>
                  <Link to='/sign'>
                    <div className='border-2 border-[#FA383E] w-24 text-center p-2 rounded-md '>
                      Register
                    </div>
                  </Link>
                </>
              )}

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
          </div>
        </div>
      </div>

      {/* responsive bar content */}
      {nav && (
        <div className='w-full  dark:bg-slate-700 dark:text-zinc-100 p-4'>
          <div className='w-[60%] m-auto flex flex-col font-medium text-lg gap-2 justify-center items-center'>
            <Link to='/'>
              <div className='hover:text-[#FA383E]'>Home</div>
            </Link>
            <Link to='/about'>
              <div className='hover:text-[#FA383E]'>About</div>
            </Link>
            <Link to='/projects'>
              <div className='hover:text-[#FA383E]'>Projects</div>
            </Link>
            <Link to='/portfolio'>
              <div className='hover:text-[#FA383E]'>Portfolio</div>
            </Link>
            <Link to='/contact'>
              <div className='hover:text-[#FA383E]'>Contact</div>
            </Link>
            <Link to='/blog'>
              <div className='hover:text-[#FA383E]'>Blog</div>
            </Link>
            {/* auth */}
            {token ? (
              <>
                {" "}
                <Link to='/community'>
                  {" "}
                  <div className='hover:text-[#FA383E]'>Community</div>
                </Link>
                <div
                  onClick={handleLogOut}
                  className='hover:text-red-400 p-2 bg-[#FA383E] py-2 text-white rounded-md'
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                {" "}
                <Link to='/login'>
                  <div className='p-2 bg-[#FA383E] py-2 text-white rounded-md'>
                    Login
                  </div>
                </Link>
                <Link to='/sign'>
                  <div className='border-2 border-[#FA383E] w-24 text-center p-2 rounded-md '>
                    Register
                  </div>
                </Link>
              </>
            )}
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
        </div>
      )}
    </>
  );
};
