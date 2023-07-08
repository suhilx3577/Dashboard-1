import React from 'react'

import dbicon from '../icons/dbicon.png'
import scicon from '../icons/schedule_icon.png'
import seticon from '../icons/setting_icon.png'
import usericon from '../icons/user_icon.png'
import traicon from '../icons/transaction_icon.png'
import user_ from '../icons/user.png'
import bell from '../icons/bellicon.png'
import searchicon from '../icons/search_icon.png'
import b1 from '../icons/b1.png'
import b2 from '../icons/b2.png'
import b3 from '../icons/b3.png'
import b4 from '../icons/b4.png'
import ChartContainer from './ChartContainer'


const DashBoard = () => {

    const icons = [{icon:dbicon,name:'Dashboard'},{icon:traicon,name:'Transactions'},{icon:scicon,name:'Schedule'},{icon:usericon,name:'Users'},{icon:seticon,name:'Settings'}]

  return (
    <div className='bg-bgone w-max relative'>

        <h1 className='fixed mt-[149px] ml-[549px]'>Sallds</h1>
    <div className='p-6'>
        <div className='flex flex-row'>
            <div className=' h-[944px] bg-black w-[280px]  text-white rounded-[30px]'>
                <h1 className='ml-12 mt-16 w-32 text-4xl font-mont font-bold'>Board.</h1>
                <div className=' h-[780px] flex flex-col justify-between'>
                    <div className='px-12 mt-20'>
                        <div>
                            {
                                icons.map(({icon,name},i)=>(
                                    <div key={i} 
                                    className='bg-transparent flex w-32 mb-9' 
                                    > 
                                        <img src={icon}  alt="icon"
                                        className='h-4 w-4 mt-[0.36rem]'
                                        />
                                        <h1 className='ml-4 font-normal text-lg font-mont active:font-bold h-6'>{name}</h1>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='px-12 h-14 flex flex-col gap-5 font-mont text-sm font-normal'>
                        <p>Help</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className='p-5 ml-8 w-full'>
                <div className='flex h-8 w-[940px] justify-between'>
                    <h1 className='font-mont font-bold text-2xl'>Dashboard</h1>

                    <div className='flex w-72 font-lato justify-between'>
                        <div className='flex bg-white rounded-xl w-48'>
                            <input type="text" className='outline w-[9.5rem] outline-none bg-white pl-4 rounded-xl'  placeholder='Search...' />
                            <img src={searchicon} alt="" className='p-2 mr-1'/>
                        </div>
                        <img src={bell} alt="" className='p-1'/>
                        <img src={user_} alt="" />
                    </div>
                </div>

                <div className='mt-9 flex gap-4 w-full'>
                    <div className='bg-box1 w-[13.5rem] h-[7.5rem] rounded-[20px]'>
                        <div className='p-4 px-6 flex flex-col gap-1'>
                            <div className='mt-2 w-full text-right'>
                            <img className='h-[24px] w-[26.4px] ml-36' src={b1} alt="" />
                            </div>
                            <p className='text-sm font-normal font-lato'>Total Revenues</p>
                            <h1 className='text-2xl font-bold font-opensans '>$2,129,430</h1>
                        </div>
                    </div>
                    <div className='bg-box1 w-[14rem] h-[7.5rem] rounded-[20px]'>
                        <div className='p-4 px-6 flex flex-col gap-1'>
                            <div className='mt-2 w-full text-right'>
                            <img className='h-[24px] w-[26.4px] ml-36' src={b1} alt="" />
                            </div>
                            <p className='text-sm font-normal font-lato'>Total Revenues</p>
                            <h1 className='text-2xl font-bold font-opensans '>$2,129,430</h1>
                        </div>
                    </div>
                    <div className='bg-box1 w-[14rem] h-[7.5rem] rounded-[20px]'>
                        <div className='p-4 px-6 flex flex-col gap-1'>
                            <div className='mt-2 w-full text-right'>
                            <img className='h-[24px] w-[26.4px] ml-36' src={b1} alt="" />
                            </div>
                            <p className='text-sm font-normal font-lato'>Total Revenues</p>
                            <h1 className='text-2xl font-bold font-opensans '>$2,129,430</h1>
                        </div>
                    </div>
                    <div className='bg-box1 w-[14rem] h-[7.5rem] rounded-[20px]'>
                        <div className='p-4 px-6 flex flex-col gap-1'>
                            <div className='mt-2 w-full text-right'>
                            <img className='h-[24px] w-[26.4px] ml-36' src={b1} alt="" />
                            </div>
                            <p className='text-sm font-normal font-lato'>Total Revenues</p>
                            <h1 className='text-2xl font-bold font-opensans '>$2,129,430</h1>
                        </div>
                    </div>

                </div>
                <div className='mt-8 bg-white '>
                    <ChartContainer/>
                </div>
                <div className='flex mt-8'>
                    <div className='w-[480px] h-[256px] bg-white'>top products</div>
                    <div>todays schedule</div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default DashBoard