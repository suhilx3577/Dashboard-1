import React, { useState } from 'react';
import {GoogleLogin , useGoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode';
// import { googleImg, appleImg } from '../utils/constants';

import gicon from '../icons/gicon.jpg'
import aicon from '../icons/aicon.jpg'





const LoginPage = () => {

  const[details, setDetails] = useState({})

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: tokenResponse  => {
      const a = tokenResponse;
      setDetails(a);
      console.log(a);
    },
    onError: console.log('login Failed')
  })


  return (
    <div>
    <div className='  flex flex-col md:flex-row h-screen '>
      <div className='w-full  md:w-2/5 h-36 md:h-full bg-black flex justify-center items-center'>
        <h1 className='text-white text-7xl font-bold font-mont'>Board.</h1>
      </div>
      <div className=' w-full md:w-3/5 h-full flex justify-center items-center bg-bgone'>
        <div>
            <h1 className='font-mont text-4xl font-bold'>Sign In</h1>
            <p className='font-lato mt-1 font-normal text-lg'> Sign in to your account</p>

            <div className='flex justify-between mt-2 font-mont font-normal text-xs'>
              <div onClick={()=>handleGoogleLogin()} className='bg-bgtwo flex justify-center items-center w-44 h-8 px-4 py-2 text-center gap-2 rounded-xl hover:cursor-pointer'>
                <img src={gicon} className='h-[14px] w-[14px' alt='googleIcon'/>
                <button className=' w-auto text text-sectext'> Sign in with Google</button>
              </div>

              <div className='bg-bgtwo flex justify-center items-center w-44 h-8 px-4 py-2 text-center gap-2 rounded-xl'>
                <img src={aicon} className='h-[14px] w-[11.5px] mt-[-2px] object-scale-down ' alt='AppleIcon'/>
                <button className=' w-auto text text-sectext'> Sign in with Apple</button>
              </div>
            </div>


            <div className=' font-lato h-80 w-96 flex flex-col px-8 py-6 mt-3 bg-bgtwo rounded-2xl relative'>
                <p className='font-normal'>Email Address</p>
                <input className='bg-bgone rounded-xl h-10 mt-2  px-4' type="text" />
                <p className='mt-5 font-normal'>Password</p>
                <input className='bg-bgthree rounded-xl h-10 mt-2 px-4' type="password" />
                <a href="/" className='mt-5'>Forgot password ?</a>
                <button className='bg-black text-white mt-5 h-10 rounded-lg font-bold font-mont'>Sign In</button>
                <p className=' absolute bottom-[-40px] md:bottom-[-40px] left-[50px] w-auto text-center text-sectext'>Dont have an account ? <a href="/">Register here</a></p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoginPage