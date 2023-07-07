import React from 'react'

import dbicon from '../icons/dbicon.png'
import scicon from '../icons/schedule_icon.png'
import seticon from '../icons/setting_icon.png'
import usericon from '../icons/user_icon.png'
import traicon from '../icons/transaction_icon.png'


const DashBoard = () => {

    const icons = [{icon:dbicon,name:'Dashboard'},{icon:traicon,name:'Transactions'},{icon:scicon,name:'Schedule'},{icon:usericon,name:'Users'},{icon:seticon,name:'Settings'}]

  return (
    <div className='p-6'>
        <div className='flex flex-row'>
            <div className=' h-[944px] bg-black w-72  text-white rounded-[30px]'>
                <h1 className='ml-12 mt-16 w-32 text-4xl font-mont font-bold'>Board.</h1>
                <div className=' h-[780px] flex flex-col justify-between'>
                    <div className='px-12 mt-20'>
                        <div>
                            {
                                icons.map(({icon,name},i)=>(
                                    <div key={i} 
                                    className='bg-transparent flex w-36 mb-9' 
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
            <div>
                <div>
                    <h1></h1>
                    <div>
                        <input type="text" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div>
                    card container
                </div>
                <div>
                    chart container
                </div>
                <div>
                    bar and schedule container
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard