import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios';
import {URL} from '../../url'

const Register = () => {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async()=>{
    try{
      const res = await axios.post(URL+"/api/auth/register",{username,email,password});
      // console.log(res);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
    }catch(err){
      setError(true);
      console.log(err);
    }
  }
  return (
    <>
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
      <h1 className='text-lg md:text-xl font-extrabold '><Link to='/'>MyBlog</Link></h1>
      <h3><Link to='/login'>Login</Link></h3>
      </div>
    <div className='w-full flex justify-center items-center h-[70vh]'>
        <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
            <h1 className='text-xl font-bold text-left'>Create an account</h1>
            <input onChange={(e)=>setUsername(e.target.value)} type="text" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Enter your username'/>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Enter your emal'/>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Enter your password'/>
            <button onClick={handleRegister}className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-400 hover:text-black'>Register</button>
            {error && <h3 className='text-red-500 text-sm'>Something went wrong</h3>}
            <div className='flex justify-center items-center space-x-4'>
                <p>Already have an account? <Link to='/login' className='hover:text-gray-400'>Login</Link></p>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register
