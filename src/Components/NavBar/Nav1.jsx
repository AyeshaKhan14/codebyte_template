import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Nav1 = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='h-[70px] border border-black w-full '>
      <div className='border-2 h-full w-[95%] m-auto flex items-center justify-between'>
        {/* Logo div */}
        <div>Logo</div>

        {/* pages content */}
        <div className='flex gap-4'>
          <div className='hidden md:flex border border-red gap-10'>
            <div>Home</div>
            <div>About</div>
            <div>Projects</div>
            <div>Portfolio</div>
            <div>Contact</div>
            <div>Blog</div>
            <div>Login</div>
            <div>Register</div>
            <div>Dark</div>
          </div>

          {/* responsive menu */}
          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full flex flex-col items-center gap-4 pt-4 bg-[#a5ada5] ease-in-out duration-500 border-2 border-blue-500"
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
