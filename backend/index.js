import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute.js'
import authRoutes from './routes/authRoute.js'
import cookieParser from 'cookie-parser';
import adminRoutes from './routes/adminRoute.js'
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongo db connected")
}).catch((err)=>{
    console.log(err)
})

const app=express();

app.use(cookieParser());
app.use(express.json())

app.listen(3000,()=>{
    console.log('server listening on port 3000 ')
});

app.use("/backend/user",userRoutes);
app.use("/backend/auth",authRoutes);
app.use("/backend/admin",adminRoutes)



app.use((err,req,res,next)=>{
    const statusCode=err.statusCode ||500;
    const message=err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    });
});