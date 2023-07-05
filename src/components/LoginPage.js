import React from 'react'

const LoginPage = () => {
  return (
    <div>
    <div className='flex flex-row h-screen '>
      <div className='w-2/5 h-full bg-black flex justify-center items-center'>
        <h1 className='text-white text-7xl font-mont'>Board.</h1>
      </div>
      <div className='w-3/5 h-full flex justify-center items-center bg-bgone'>
        <div>
            <h1 className='font-mont text-4xl font-bold'>Sign In</h1>
            <p className='font-lato mt-1 font-normal text-lg'> Sign in to your account</p>
            <div className='flex justify-between mt-2'>
                <button>gmail</button>
                <button>apple</button>
            </div>
            <div className=' font-lato h-80 w-96 flex flex-col px-8 py-6 mt-3 bg-bgtwo rounded-xl relative'>
                <p className='font-normal'>Email Address</p>
                <input className='bg-bgone rounded-xl h-10 mt-1' type="text" />
                <p className='mt-5 font-normal'>Password</p>
                <input className='bg-bgthree rounded-xl h-10 mt-1' type="password" />
                <a href="/" className='mt-5'>Forgot password ?</a>
                <button className='bg-black text-white mt-5 h-10 rounded-lg font-mont'>Sign In</button>
                <p className=' absolute bottom-[-40px] left-[50px] w-auto text-center text-sectext'>Dont have an account ? <a href="">Register here</a></p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoginPage