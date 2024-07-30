import React from 'react'
import AI from '../images/ai.webp';

const ProfilePosts = () => {
  return (
    <div className='w-full flex mt-8 space-x-4'>
        <div className='w-[35%] h-[200px] flex justify-center items-center'>
            <img src={AI} alt="" className='h-full w-full object-cover' />
        </div>
        <div className='flex flex-col w-[65%]'>
            <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
                10 uses of artificial intelligence
            </h1>
            <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
                <p>@rahul</p>
                <div className='flex space-x-2'>
                    <p>6/6/2023</p>
                    <p>16:45</p>
                </div>

            </div>
            <p className='text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a quidem ullam in commodi iure.</p>
        </div>
    </div>
  )
}

export default ProfilePosts;
