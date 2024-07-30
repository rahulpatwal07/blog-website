import React from 'react'
const Footer = () => {
  return (
    <>
    <div className='mt-8 w-full bg-black px-8 md:px-[300px] md:justify-between flex md:flex-row flex-col items-start space-y-4 md:space-y-0 text-sm md:text-md py-8 md:mt-8'>
      <div className='flex flex-col text-white'>
        <p>Feature Blogs</p>
        <p>Most viewed</p>
        <p>Readers' Choice</p>

      </div>
      <div className='flex flex-col text-white'>
        <p>Form</p>
        <p>Support</p>
        <p>Recent Posts</p>
      </div>
      <div className='flex flex-col text-white'>
        <p>Privacy Policy</p>
        <p>About Us</p>
        <p>Term and conditions</p>
      </div>
    </div>
    <p className='py-2 pb-6 text-sm text-center text-white bg-black'>All rights reserved @MyBlog 2023</p>
    </>
  )
}

export default Footer
