import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimpass, setConfrimpass] = useState("");
  const [loading, setLoading] = useState(false);
  const [passmsg, setPassmsg] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValidPassword(newPassword.length >= 8);
  };
  const handleSign = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!(name, email, password, confrimpass)) {
        toast.error("Please fill all the fields");
        setLoading(false);
        return;
      }
      if (password !== confrimpass) {
        setPassmsg(true);
        setLoading(false);
        return;
      }
      const payload = {
        name: name,
        email: email,
        password: password,
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/registration`,
        payload
      );
      // console.log(data, "s");
      if (data.message === "User already registered, please try login") {
        setLoading(false);
        toast.success(data.message);
      } else if (data) {
        toast.success("Successfully registered");
        navigate("/login");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='dark:bg-slate-900 bg-zinc-100 py-4'>
      {/* sign div */}
      <div className='dark:bg-slate-700 shadow-xl shadow-blue-500/50 w-[90%] bg-zinc-200 m-auto md:w-[30%] h-full py-4 flex items-center justify-center'>
        <div className=' w-[85%] h-[680px] flex flex-col gap-6'>
          <h2 className='text-lg font-semibold'>Welcome Back</h2>
          <div>
            <button className='w-[100%] bg-[#FA383E] text-white p-2 rounded-md font-medium'>
              Sign in with Github
            </button>
          </div>
          {/* or divs */}
          <div className='h-12 flex items-end gap-2'>
            <div className='border-2 border-gray-300 w-[50%] border-t-0 border-r-0 border-l-0'></div>
            <div className='text-gray-400'>or</div>
            <div className='border-2 border-gray-300 w-[50%] border-t-0 border-r-0 border-l-0'></div>
          </div>

          {/* form div */}
          <div>
            <form onSubmit={handleSign} className=' flex flex-col gap-6'>
              <div className=' flex flex-col gap-2'>
                <label className='font-medium font-sans'>Username</label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Johe Doh'
                  className='w-full dark:bg-slate-700 dark:border-0 dark:text-zinc-100 outline-none h-10 px-2 rounded-md border border-zinc-300 drop-shadow-2xl bg-zinc-200'
                />
              </div>
              <div className=' flex flex-col gap-2'>
                <label className='font-medium font-sans'>Your Email</label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='name@codebyte.com'
                  className='w-full dark:bg-slate-700 dark:border-0 dark:text-zinc-100 outline-none h-10 px-2 rounded-md border border-zinc-300 drop-shadow-2xl bg-zinc-200'
                />
              </div>
              <div>
                <label className='font-medium font-sans'>Your Password</label>
                <input
                  type='password'
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='******'
                  className='w-full dark:bg-slate-700 dark:border-0 dark:text-zinc-100 outline-none h-10 px-2 rounded-md border border-zinc-300 drop-shadow-2xl bg-zinc-200'
                />
                {!isValidPassword && (
                  <p className='text-red-600 text-sm font-medium md:text-base'>
                    Password must be at least 8 characters long.
                  </p>
                )}
              </div>
              <div>
                <label className='font-medium font-sans'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  value={confrimpass}
                  onChange={(e) => setConfrimpass(e.target.value)}
                  placeholder='******'
                  className='w-full dark:bg-slate-700 dark:border-0 dark:text-zinc-100 outline-none h-10 px-2 rounded-md border border-zinc-300 drop-shadow-2xl bg-zinc-200'
                />
                {passmsg && (
                  <p className='text-red-600 text-sm font-medium md:text-base'>
                    Incorrect password
                  </p>
                )}
              </div>
              <div className='mt-4'>
                <button
                  type='submit'
                  className='w-[100%] bg-[#FA383E] text-white p-2 rounded-md font-medium'
                >
                  Register
                </button>
              </div>
              <div className='dark:text-zinc-100 text-[#2F1CA6] mt-[-10px]'>
                <Link to='/login'> Already have an account?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
