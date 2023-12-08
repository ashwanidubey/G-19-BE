const login=(req,res)=>{
    res.send("hello friends, i am login")
  }
const signup=(req,res)=>{
  console.log(req.body)
    res.send("hello friends, i am signup")
  }

  module.exports={login,signup}