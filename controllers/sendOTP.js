const redis = require('../dbConnection');
const sendMail = require('../functions/mailer');
const generateOTP = require('../functions/otpGenerator');
const User = require('../models/Users')

// function for sending otp to mail
const sendOTP = async(req,res) =>{
    try {
        const {email} = req.body;
        if(!email){
            return res.status(400).json({message:"email is missing"})
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        const otp = generateOTP();
        sendMail(email, otp);
        const setRedis = redis.set(email, otp, 'EX', 600)
        if(!setRedis){
            return res.status(400).json({message:"otp not set on redis"})
        }
        return res.status(200).json({message:"Email sent successfully"})
    } catch (err) {
        return res.status(500).json({message:err})
    }
}

module.exports = sendOTP;