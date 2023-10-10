import React, { useState } from "react";

const AccountSetting = () => {
  const [isPasswordFormVisible, setPasswordFormVisible] = useState(false);
  const [isSocialInfoVisible, setSocialInfoVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [socialInfo, setSocialInfo] = useState({
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    github: "",
  });

  // Profile states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userDescription, setUserDescription] = useState("");

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

  const handleSocialInfoUpdate = (e) => {
    e.preventDefault();
    //  social media info update logic here
    console.log("Updating social info:", socialInfo);

    // Clear input fields and hide the form
    setSocialInfo({
      facebook: "",
      instagram: "",
      youtube: "",
      linkedin: "",
      github: "",
    });
    setSocialInfoVisible(false);
  };

  return (
    <div className='border w-full'>
      <div className='dark:bg-midnightBlack bg-white'>
        <div className='p-5'>
          <div className='mb-4'>
            <div className='rounded-2xl dark:bg-darkCard bg-lightCard'>
              <h2 className='md:p-5 md:text-xl text-lg p-2 dark:text-white text-gray-950'>
                Profile
              </h2>
              <hr className='h-px  bg-gray-200 dark:bg-gray-700 border-0  '></hr>
              <form action=''>
                <div className='md:p-5 p-3'>
                  <div className='my-2 md:flex'>
                    <div className='md:mr-3 md:w-1/2 w-full mb-4'>
                      <label
                        htmlFor='firstName'
                        className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                      >
                        First Name
                      </label>
                      <input
                        name='firstName'
                        type='text'
                        id='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                        placeholder='Ayesha'
                      />
                    </div>
                    <div className='md:mr-3 md:w-1/2 w-full mb-4'>
                      <label
                        htmlFor='lastName'
                        className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                      >
                        Last Name
                      </label>
                      <input
                        name='lastName'
                        type='text'
                        id='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                        placeholder='Khan'
                      />
                    </div>
                  </div>
                  <div className='mb-2 md:flex'>
                    <div className='md:mr-3 md:w-1/2 w-full mb-4'>
                      <label
                        htmlFor='email'
                        className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-white border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-midnightBlack dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:outline-none'
                        placeholder='tofosa2228@gronasu.com'
                        disabled=''
                      />
                    </div>
                    <div className='md:mr-3 md:w-1/2 w-full mb-4'>
                      <label
                        htmlFor='phoneNumber'
                        className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                      >
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
                    <label
                      htmlFor='userDescription'
                      className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                    >
                      One Line Introduction
                    </label>
                    <input
                      name='userDescription'
                      type='text'
                      id='userDescription'
                      value={userDescription}
                      onChange={(e) => setUserDescription(e.target.value)}
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
          <div className='mb-4'>
            <div className='rounded-2xl dark:bg-darkCard bg-lightCard'>
              <div className='md:p-5 p-3 flex items-center justify-between'>
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
              {isPasswordFormVisible && (
                <form onSubmit={handlePasswordUpdate}>
                  <div className='mb-2 md:flex'>
                    <div className='md:mr-3 md:w-1/2 w-full mb-4'>
                      <input
                        type='password'
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder='Current Password'
                        className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                        required
                      />
                    </div>
                    <div className='md:w-1/2 w-full mb-4'>
                      <input
                        type='password'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder='New Password'
                        className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
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
                      className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
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
          <div className='mb-4'>
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
              {isSocialInfoVisible && (
                <form onSubmit={handleSocialInfoUpdate}>
                  <div className='mb-2'>
                    <input
                      type='text'
                      value={socialInfo.facebook}
                      onChange={(e) =>
                        setSocialInfo({
                          ...socialInfo,
                          facebook: e.target.value,
                        })
                      }
                      placeholder='Facebook URL'
                      className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      value={socialInfo.instagram}
                      onChange={(e) =>
                        setSocialInfo({
                          ...socialInfo,
                          instagram: e.target.value,
                        })
                      }
                      placeholder='Instagram URL'
                      className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      value={socialInfo.youtube}
                      onChange={(e) =>
                        setSocialInfo({
                          ...socialInfo,
                          youtube: e.target.value,
                        })
                      }
                      placeholder='YouTube URL'
                      className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      value={socialInfo.linkedin}
                      onChange={(e) =>
                        setSocialInfo({
                          ...socialInfo,
                          linkedin: e.target.value,
                        })
                      }
                      placeholder='LinkedIn URL'
                      className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      value={socialInfo.github}
                      onChange={(e) =>
                        setSocialInfo({ ...socialInfo, github: e.target.value })
                      }
                      placeholder='GitHub URL'
                      className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-darkCard dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
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
