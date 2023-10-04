import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className='bg-blue-100 dark:bg-midnightBlack'>
        <div className='p-4 md:p-8 lg:p-10'>
          <div className='mx-auto max-w-screen-xl text-center'>
            {/* <a
              href=""
              className="uppercase flex justify-center items-center text-xl font-medium md:text-2xl md:font-semibold text-gray-950 dark:text-white"
            >
              <img
                alt="Logo"
                loading="lazy"
                width="160"
                height="160"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/snipbyteLogo.webp"
              />
            </a> */}
            <p className='my-6 text-gray-500 dark:text-gray-400'>
              400+ web projects and interactive ready to use templates for free
              .
            </p>

            <ul className='flex flex-wrap justify-center items-center mb-6 text-gray-950 dark:text-white'>
              <li>
                <a
                  className='mr-4  md:mr-6 mb-2 text-sm md:text-base '
                  href='/about'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className='mr-4  md:mr-6 mb-2 text-sm md:text-base'
                  href='/blogs'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className='mr-4  md:mr-6 mb-2 text-sm md:text-base'
                  href='/faq'
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className='mr-4  md:mr-6 mb-2 text-sm md:text-base'
                  href='/contact'
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className='mr-4  md:mr-6 mb-2 text-sm md:text-base'
                  href='/privacy-policy'
                >
                  Privacy Policy
                </a>
              </li>
            </ul>

            <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
              © 2018-2023{" "}
              <a className='' href='/contact#'>
                snipbyte™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
