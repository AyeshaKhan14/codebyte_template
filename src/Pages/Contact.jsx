import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/contact`,
        {
          email,
          subject,
          message,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );

      if (!data.success) {
        toast.warning(data.message);
      } else {
        toast.success(data.message);
      }
    } catch (error) {
      console.log('Error submitting the contact form', error.message);
    }
  };

  return (
    <main className=' dark:bg-slate-900 p-6'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md border drop-shadow-sm dark:border-0 rounded-md dark:bg-slate-800'>
        <div className='lg:mb-16 mb-8 mx-auto text-center max-w-screen-sm'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-950 dark:text-white'>
            Contact Us
          </h2>
          <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        </div>
        <form
          className='space-y-8'
          action=''
          onSubmit={(e) => handleContactFormSubmit(e)}
        >
          <div>
            <label
              for='email'
              className='block mb-2 text-sm font-medium text-gray-950 dark:text-white '
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='xyz@gmail.com'
              class='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-700 dark:text-zinc-100 dark:border-0 dark:shadow-sm-light focus:outline-none'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              for='Subject'
              className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
            >
              Subject
            </label>
            <input
              type='text'
              id='Subject'
              name='Subject'
              placeholder='How i can download the code ?'
              class='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-700 dark:text-zinc-100 dark:border-0 dark:shadow-sm-light focus:outline-none'
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              for='message'
              class='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
            >
              Your message
            </label>
            <textarea
              id='message'
              name='message'
              rows='6'
              class='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-700 dark:text-zinc-100 dark:border-0 dark:shadow-sm-light focus:outline-none'
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type='submit'
            className=' py-3 px-5 text-sm font-medium text-center rounded-lg focus:outline-none  bg-[#FA383E] text-white'
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};
