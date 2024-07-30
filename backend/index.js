const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const multer = require('multer');
const postRoute = require('./routes/posts')
const commentRoute = require('./routes/comments')
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

//databases
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected successfully');
    }catch(err){
        console.log(err);
    }
}

//middlewares
dotenv.config();
app.use(express.json());
app.use('/images',express.static(path.join(__dirname,"/images")));
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/comments",commentRoute);

const storage = multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images");
    },
    filename : (req,file,fn)=>{
        fn(null,req.body.img);
    }
})

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("Image has been uploaded");
})

app.listen(5000,()=>{
    connectDB();
    console.log('Server listening on post 5000');
})