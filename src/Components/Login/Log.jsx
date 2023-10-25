import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { setToken, setUser } from "../../Redux/slices/user.slice";
import { useNavigate } from "react-router-dom";

export const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("code-token")) || null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!email || !password) {
        toast.error("Please fill in all the fields");
        setLoading(false);
        return;
      }

      if (password.length < 8) {
        toast.error("Password must be at least 8 characters");
        setLoading(false);
        return;
      }
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      // console.log(data);
      if (data.message === "User not found! Please register") {
        toast.error("User not Exists, plz register");
        setLoading(false);
      } else if (data.message === "Invalid credentials") {
        toast.error(data.message);
        setLoading(false);
      } else {
        window.localStorage.setItem("code-token", JSON.stringify(data.token));
        window.localStorage.setItem("code-user", JSON.stringify(data.user));
        dispatch(setToken(data.token));
        dispatch(setUser(data.user));
        toast.success("Login Sucessfully");
        navigate("/");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {/* login div */}
      <div className='dark:bg-slate-800 dark:text-white shadow-2xl shadow-blue-500/50 w-[95%] bg-zinc-200 m-auto  h-[560px] flex items-center justify-center'>
        <div className=' w-[85%] h-[500px] flex flex-col gap-6'>
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
            <form onSubmit={handleLogin} className=' flex flex-col gap-6'>
              <div className=' flex flex-col gap-2'>
                <label className='font-medium font-sans'>Your Email</label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='name@codebyte.com'
                  className='dark:bg-slate-700 dark:border-0 w-full outline-none h-10 px-2 rounded-md border border-zinc-300 drop-shadow-2xl bg-zinc-200'
                />
              </div>
              <div>
                <label className='font-medium font-sans'>Your Password</label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='******'
                  className='dark:bg-slate-700 dark:border-0 w-full outline-none h-10 px-2 rounded-md border border-zinc-300 drop-shadow-2xl bg-zinc-200'
                />
              </div>
              <div className='mt-4'>
                <button
                  type='submit'
                  className='w-[100%] bg-[#FA383E] text-white p-2 rounded-md font-medium'
                >
                  {loading ? <p>Please Wait</p> : <p>Login</p>}
                </button>
              </div>
              <div className='text-[#2F1CA6]'>Don't have an account?</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
