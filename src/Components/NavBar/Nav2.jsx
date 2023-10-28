import React from "react";
import { Link } from "react-router-dom";

export const Nav2 = () => {
  return (
    <div className='h-[40px] w-full bg-[#2F1CA6] text-white flex items-center'>
      <div className='hidden w-[80%] m-auto md:flex justify-between font-sans font-medium text-sm'>
        <div className='hover:underline underline-offset-2 scale-105'>
          <Link to={`project/react`}>REACT JS</Link>
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          <Link to={`project/javascript`}>JAVASCRIPT</Link>
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          <Link to={`project/jquery`}>jQUERY</Link>
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          <Link to={`project/php`}>PHP</Link>
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          <Link to={`project/html`}>HTML</Link>
        </div>
        <div className='hidden md:block hover:underline underline-offset-2 scale-105'>
          <Link to={`project/bootstrap`}>BOOTSTRAP</Link>
        </div>
        <div className='hidden md:block hover:underline underline-offset-2 scale-105'>
          <Link to={`project/tailwind css`}> TAILWIND CSS</Link>
        </div>
        <div className='hidden md:block hover:underline underline-offset-2 scale-105'>
          <Link to={`project/css`}> CSS</Link>
        </div>
        <div className='hidden md:block hover:underline underline-offset-2 scale-105'>
          <Link to={`project/wordpress`}> WORDPRESS</Link>
        </div>
      </div>
      {/* responsive */}
      <div className='flex w-full justify-around font-sans font-medium text-xs md:hidden'>
        <div className='hover:underline underline-offset-2 scale-105'>
          <Link to={`project/react`}>REACT JS</Link>
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          <Link to={`project/javascript`}>JAVASCRIPT</Link>
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          <Link to={`project/jquery`}>jQUERY</Link>
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          <Link to={`project/php`}>PHP</Link>
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          <Link to={`project/html`}>HTML</Link>
        </div>
      </div>
    </div>
  );
};
