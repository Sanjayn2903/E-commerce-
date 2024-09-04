const User = require('../models/Users')
const bcrypt = require('bcryptjs')
const {createAccessToken, createRefreshToken} = require('../functions/jwt')
const redis = require('../dbConnection')

// signup function
const signup = async(req,res) =>{
    try{
        const {name, email, otp, password} = req.body;
        if(!name|| !email|| !password|| !otp){
            console.log('All feilds are mandatory');
            return res.status(400).json({message:"All feilds are mandatory."})
        }
        
        const redisValue = await redis.get(email);
        console.log(redisValue);
        
        if(redisValue!=otp){
            return res.status(400).json({message:"Incorrect OTP."})
        }

        redis.del(email)

        const isExisting = await User.findOne({email:email})
        if(isExisting){
            return res.status(400).json({message:"User already exists."})
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const user = await User.create({name:name, email:email, password:hashPassword});
        
        if(user){
            const accessToken = createAccessToken(user._id)
            const refreshToken = createRefreshToken(user._id)
            return res.status(200).json({message:"User created successfully.", accessToken, refreshToken})
        }
        else{
            return res.status(400).json({message:"Not able to create user."})
        }

    }catch(err){
        return res.status(500).json({message:err})
    }
}

module.exports = signup;