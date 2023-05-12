const express = require("express");
require("dotenv").config({path:"./.env"});
const App = express();
const PORT = process.env.PORT || 6011;
const connectDB = require("./config/connectDB");
connectDB();

App.use(express.json())

const User= require("./routes/UserRoutes");
App.use('/api/user', User)  // middleware routing




// const newUser = new User({
//     UserName: "elyes ammar" ,
//     Email: "ammar@gmail.com"
//         });
// newUser.save().then(()=>console.log(newUser))

  




App.listen(PORT, (err)=>{
    if(err){
    console.log(err) }else {
     console.log(`server is running on ${PORT}`)
}})