import React, { useContext, useEffect, useState } from 'react'
import HomePosts from '../components/HomePosts'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import axios from 'axios'
import { URL } from '../../url'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Home = () => {
  const [posts,setPosts] = useState([]);
  const [noResults,setNoResults] = useState(false);
  const [loader,setLoader] = useState(false);
  const {search} = useLocation();
  const {user} = useContext(UserContext);

  const fetchPosts  = async()=>{
    setLoader(true);
    try{
      const res = await axios.get(URL + "/api/posts/"+search);
      setPosts(res.data);
      if(res.data.length==0){
        setNoResults(true);
      }
      else setNoResults(false);
      setLoader(false);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchPosts();
  },[search]);
  return (
    <>
    <Navbar/>
    <div className='px-8 md:px-[200px] min-h-[80vh]'>
      {loader ? <div className='h-[40vh] flex justify-center items-center'><Loader/></div> : !noResults?posts.map((post)=>{
        return <>
        <Link to={user?`/posts/post/${post._id}` : "/login"}>
          <HomePosts key={post._id} post={post}/>
        </Link>
        </>
      }):<h3 className='text-center font-bold mt-16'>No post available</h3>}
    </div>
    <Footer/>
    </>
  )
}

export default Home
