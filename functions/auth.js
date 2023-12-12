const {User}=require('../models/User')

const login=(req,res)=>{
  const {email,password}=req.body
  const user= User.find({email,password});
  if(user.length>=1)
  {
     res.send({"status":true,user})
  }
  else{
    res.send({"status":false,"message":"invalid creds"})
  }
  }
const signup=(req,res)=>{
    const {name,email,password}=req.body
    const user= User({name,email,password});
    user.save();
    res.send("hello friends, i am signup"+user)
  }

  module.exports={login,signup}