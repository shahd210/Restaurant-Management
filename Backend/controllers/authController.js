const User = require("../models/User")
const generateToken = require("../utils/generateToken")

const register = async (req ,res ,next )=>{
    try {
        const {username , email , password} =req.body;
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({
            message:"User already exists"
        })

        const user = await User.create({
            username, email , password 
        }) 

        const token = generateToken(user._id , user.role);

        res.status(201).json({
            message:"Account created successfully",
            token,
            user:{
                id:user._id,
                username:user.username,
                email:user.email,
                role:user.role
            }
        });
    } catch (error) {
        next(error)
    }

}


const login = async (req ,res ,next)=>{
   try {
     const {email ,password}=req.body;
    const user = await User.findOne({email});

    if(!user) return res.status(400).json({
         message:"Invalid email or password"
    });

    const isMatched = await user.comparePassword(password);
    if(!isMatched) {
        return res.status(400).json({
            message:"Invalid email or password"
        });
    }

    const token = generateToken(user._id ,user.role)

  res.status(200).json({
    message:"Login Successful",
    token,
    user:{
        id:user._id,
        username:user.username,
        email:user.email,
        role: user.role
    }
  })  
   } catch (error) {
    next(error)
   }
}

module.exports = {register , login}