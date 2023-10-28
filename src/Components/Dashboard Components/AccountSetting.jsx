import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AccountSetting = () => {
  const [isPasswordFormVisible, setPasswordFormVisible] = useState(false);
  const [isSocialInfoVisible, setSocialInfoVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const user = JSON.parse(localStorage.getItem("code-user")) || {};

  // social media states
  const [Facebook, setFacebook] = useState("");
  const [Instagram, setInstagram] = useState("");
  const [Twitter, setTwitter] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  const [Github, setGithub] = useState("");
  const [Youtube, setYouTube] = useState("");

  // Profile states
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [intro, setIntro] = useState("");
  const token = JSON.parse(localStorage.getItem("code-token")) || null;

  const togglePasswordForm = () => {
    setPasswordFormVisible(!isPasswordFormVisible);
  };

  const toggleSocialInfoForm = () => {
    setSocialInfoVisible(!isSocialInfoVisible);
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    //  password update logic
    console.log(
      "Updating password:",
      currentPassword,
      newPassword,
      confirmPassword
    );

    // Clear input fields and hide the form
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordFormVisible(false);
  };

  const handleSocialInfoUpdate = async (e) => {
    e.preventDefault();
    //  social media info update logic here
    let socials = [];

    if (Facebook) {
      socials.push({
        name: "Facebook",
        link: Facebook,
      });
    }
    if (Twitter) {
      socials.push({
        name: "Twitter",
        link: Twitter,
      });
    }
    if (LinkedIn) {
      socials.push({
        name: "LinkedIn",
        link: LinkedIn,
      });
    }
    if (Youtube) {
      socials.push({
        name: "YouTube",
        link: Youtube,
      });
    }
    if (Instagram) {
      socials.push({
        name: "Instagram",
        link: Instagram,
      });
    }
    if (Github) {
      socials.push({
        name: "GitHub",
        link: Github,
      });
    }
    if (socials.length === 0) {
      toast.error("At least one social media link is required.");
      return;
    }

    const { data } = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}/u/socials`,
      { socials },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Authorization header with the token
        },
      }
    );
    if (data.success === true) {
      toast.success("Social Link Updated");
    }
    setSocialInfoVisible(false);
  };

  const handleProfile = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/u/update`,
        {
          name: name,
          phone: phoneNumber,
          introduction: intro,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the Authorization header with the token
          },
        }
      );
      console.log(data, "pp");
      if (data.success === true) {
        toast.success("Profile Updated");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='border w-full'>
      <div className='dark:bg-midnightBlack bg-white'>
        <div className='p-5'>
          <div className='mb-4'>
            <div className='bg-lightcard rounded-2xl dark:bg-darkCard bg-lightCard'>
              <h2 className='md:p-5 md:text-xl text-lg p-2 dark:text-white text-gray-950'>
                Profile
              </h2>
              <hr className='h-px  bg-gray-200 dark:bg-gray-700 border-0  '></hr>
              {/* profile update form */}
              <form onSubmit={handleProfile}>
                <div className='md:p-5 p-3'>
                  <div className='my-2 md:flex'>
                    <div className='w-full mb-4 flex flex-col gap-2'>
                      <label className='font-medium font-sans'>Username</label>
                      <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Johe Doh'
                        className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                      />
                    </div>
                  </div>
                  <div className='mb-2 md:flex'>
                    <div className='md:mr-3 md:w-1/2 w-full mb-4'>
                      <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                        Email
                      </label>
                      <input
                        className='bg-white border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-midnightBlack dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:outline-none'
                        placeholder={user?.email}
                        disabled
                      />
                    </div>
                    <div className='md:mr-3 md:w-1/2 w-full mb-4'>
                      <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                        Phone Number
                      </label>
                      <input
                        name='phoneNumber'
                        type='text'
                        id='phoneNumber'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                      />
                    </div>
                  </div>
                  <div className='w-full mb-4'>
                    <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                      One Line Introduction
                    </label>
                    <input
                      name='userDescription'
                      type='text'
                      value={intro}
                      onChange={(e) => setIntro(e.target.value)}
                      className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                      placeholder='Web Developer'
                    />
                  </div>
                </div>
                <hr className='h-px  bg-gray-200 dark:bg-gray-700 border-0  '></hr>
                <div className='md:p-5 p-3 flex justify-end'>
                  <button
                    type='submit'
                    className='py-3 px-5 text-sm font-medium text-center rounded-lg focus:outline-none text-white bg-indigo-500'
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='mb-4 bg-lightcard'>
            <div className='rounded-2xl  dark:bg-darkCard bg-lightCard'>
              <div className='md:p-5 p-3  flex items-center justify-between'>
                <h2 className='md:text-xl text-lg p-2 dark:text-white text-gray-950'>
                  Password
                </h2>
                <button
                  onClick={togglePasswordForm}
                  className='py-3 px-5 text-sm font-medium text-center rounded-lg focus:outline-none text-white bg-indigo-500'
                >
                  {isPasswordFormVisible ? "Cancel" : "Update Password"}
                </button>
              </div>
              {/* update password form */}
              {isPasswordFormVisible && (
                <form className='p-4 ' onSubmit={handlePasswordUpdate}>
                  <div className='mb-2 md:flex'>
                    <div className='md:mr-3 md:w-1/2 w-full mb-4'>
                      <input
                        type='password'
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder='Current Password'
                        className='shadow-sm bg-lightcard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                        required
                      />
                    </div>
                    <div className='md:w-1/2 w-full mb-4'>
                      <input
                        type='password'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder='New Password'
                        className='shadow-sm bg-lightcard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                        required
                      />
                    </div>
                  </div>
                  <div className='mb-2'>
                    <input
                      type='password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder='Confirm Password'
                      className='shadow-sm bg-lightcard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    className='py-3 px-5 text-sm font-medium text-center rounded-lg focus:outline-none text-white bg-indigo-500'
                  >
                    Save Password
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className='mb-4 bg-lightcard'>
            <div className='rounded-2xl dark:bg-darkCard bg-lightCard'>
              <div className='md:p-5 p-3 flex items-center justify-between'>
                <h2 className='md:text-xl text-lg p-2 dark:text-white text-gray-950'>
                  Social Media
                </h2>
                <button
                  onClick={toggleSocialInfoForm}
                  className='py-3 px-5 text-sm font-medium text-center rounded-lg focus:outline-none text-white bg-indigo-500'
                >
                  {isSocialInfoVisible ? "Cancel" : "Add Social Info"}
                </button>
              </div>
              {/* social media form */}
              {isSocialInfoVisible && (
                <form className='p-4 ' onSubmit={handleSocialInfoUpdate}>
                  <div className='mb-2'>
                    <input
                      type='text'
                      value={Facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                      placeholder='Facebook URL'
                      className='shadow-sm bg-lightcard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      value={Instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      placeholder='Instagram URL'
                      className='shadow-sm bg-lightcard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      value={Twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                      placeholder='Twitter URL'
                      className='shadow-sm bg-lightcard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      value={Youtube}
                      onChange={(e) => setYouTube(e.target.value)}
                      placeholder='YouTube URL'
                      className='shadow-sm bg-lightcard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      value={LinkedIn}
                      onChange={(e) => setLinkedIn(e.target.value)}
                      placeholder='LinkedIn URL'
                      className='shadow-sm bg-lightcard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      value={Github}
                      onChange={(e) => setGithub(e.target.value)}
                      placeholder='GitHub URL'
                      className='shadow-sm bg-lightcard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    />
                  </div>
                  <button
                    type='submit'
                    className='py-3 px-5 text-sm font-medium text-center rounded-lg focus:outline-none text-white bg-indigo-500'
                  >
                    Save Social Info
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
