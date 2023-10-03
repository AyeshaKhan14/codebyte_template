import React from "react";

export const Contact = () => {
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <div className="lg:mb-16 mb-8 mx-auto text-center max-w-screen-sm">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-950 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
      </div>
      <form className="space-y-8" action="">
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-950 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="xyz@gmail.com"
            class="shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none"
          />
        </div>
        <div>
          <label
            for="Subject"
            className="block mb-2 text-sm font-medium text-gray-950 dark:text-white"
          >
            Subject
          </label>
          <input
            type="text"
            id="Subject"
            name="Subject"
            placeholder="How i can download the code ?"
            class="shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-950 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            class="shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className=" py-3 px-5 text-sm font-medium text-center rounded-lg focus:outline-none  bg-[#FA383E] text-white "
        >
          Send Message
        </button>
      </form>
    </div>
     
  );
};
