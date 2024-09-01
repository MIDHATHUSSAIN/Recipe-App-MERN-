const UserModel = require('../models/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userReg = async(req,res)=>{
    const {name , email ,  password} = req.body;
    const UserEmail = await UserModel.findOne({email})
    if(UserEmail){
        return res.json({messge:`user exists with ${email}`})
    }

    const passwordhassing = await  bcrypt.hash(password,10) 

    const newUser = new UserModel({name,email,password: passwordhassing})
    await newUser.save()
    return  res.json({message: 'user register successfully'})
}


const userLog = async(req,res)=>{
  const {email,password} = req.body
  const findEmail = await UserModel.findOne({email})
  if(!findEmail){
    return res.json({message:"user do not exsist"})
  }
  
  const Ispassword = await bcrypt.compare(password,findEmail.password)

  if(!Ispassword){
    return res.json({message:"user or password is incorrect"})
  }

  const token = jwt.sign({id:findEmail._id},"I_am_a_secret")
  return res.json({token,userId:findEmail._id})

}




module.exports = {userReg,userLog}