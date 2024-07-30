import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from "./pages/postDetails.jsx"
import CreatePost from "./pages/CreatePost.jsx"
import EditPost from "./pages/EditPost"
import Profile from "./pages/Profile"
import { UserContextProvider } from "./context/UserContext"

export default function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/write" element={<CreatePost/>}/>
        <Route path="/edit/:id" element={<EditPost/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/posts/post/:id" element={<PostDetails/>}/>
      </Routes>
      </UserContextProvider>
  )
}