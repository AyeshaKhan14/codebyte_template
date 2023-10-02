import React from "react";

export const Nav2 = () => {
  return (
    <div className='h-[40px] w-full bg-red-400 flex items-center'>
      <div className='hidden w-[80%] m-auto md:flex justify-between font-sans font-medium text-sm'>
        <div className='hover:underline underline-offset-2 scale-105'>
          REACT JS
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          JAVASCRIPT
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          jQUERY
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>PHP</div>
        <div className='hover:underline underline-offset-2 scale-105'>HTML</div>
        <div className='hidden md:block hover:underline underline-offset-2 scale-105'>
          BOOTSTRAP
        </div>
        <div className='hidden md:block hover:underline underline-offset-2 scale-105'>
          TAILWIND CSS
        </div>
        <div className='hidden md:block hover:underline underline-offset-2 scale-105'>
          CSS
        </div>
        <div className='hidden md:block hover:underline underline-offset-2 scale-105'>
          WORDPRESS
        </div>
      </div>
      {/* responsive */}
      <div className='flex w-full justify-around font-sans font-medium text-xs md:hidden'>
        <div className='hover:underline underline-offset-2 scale-105'>
          REACT JS
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          JAVASCRIPT
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>
          jQUERY
        </div>
        <div className='hover:underline underline-offset-2 scale-105'>PHP</div>
        <div className='hover:underline underline-offset-2 scale-105'>HTML</div>
      </div>
    </div>
  );
};
