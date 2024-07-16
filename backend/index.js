import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import booksRoute from "./routes/booksRoute.js";
// const uri=process.env.mongoDB_URL;
dotenv.config();
const PORT =8080||process.env.PORT;

const app=express();

// console.log('MongoDB URL:', process.env.MONGODB_URL);
//console.log('App Port:', PORT); Debugging log
app.use(express.json());

app.get('/',(request,response)=>{
 console.log(request);
 return response.status(234).send("Welcome to Home Page")
})

//Route To save a new book

app.listen(PORT,()=>{
    console.log(`App is listening to port :${PORT}`);
 });

 app.use('/books',booksRoute);

mongoose.connect(process.env.mongoDB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
   console.log('App connected to database');
  
})
.catch((error)=>{
    console.log(error);
})