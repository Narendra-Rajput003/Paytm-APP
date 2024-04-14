const User = require("../model/user_model");
const Account=require("../model/account_model")
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const zod=require('zod');


// zod package is used to validate the request body and zod.object is used to validate the object.
const UserSchema=zod.object({ 
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string(),
    email:zod.string().email(),
})



exports.singUp=async(req,res)=>{
    try {

        // safeParse method is used to validate the request body.
        const body=req.body;

        // success return true or false.
        const {success}=UserSchema.safeParse(body);
        console.log("success",success);

        if(!success){
            return res.status(400).json({
                success:false,
                message:"Invalid data"
            })
        }

        const user=await User.findOne({
            email:body.email
        });
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exist"
            })
        }
        const hashedPassword=await bcrypt.hash(body.password,10);
     
        // insert hash password into database

        const newUser=await User.create({
            email:body.email,
            firstName:body.firstName,
            lastName:body.lastName,
            password:hashedPassword
        });

        const userId=newUser._id;
        console.log("userId",userId);

        const accountData=await Account.create({
            userId:userId,
            balance: 1 + Math.random() * 10000
        });

        const token=jwt.sign({userId:userId},process.env.JWT_SECRET_KEY,{
            expiresIn:"1d"
        });

        return res.status(201).json({
            success:true,
            message:"User created successfully",
            token:token
            
        });   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
        
    }

}




const signinBody = zod.object({
    email: zod.string().email(),
	password: zod.string()
})

exports.singIn = async(req, res) => {
    try {
        const {success}=signinBody.safeParse(req.body);
        if(!success){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }
        const user = await User.findOne({ email: req.body.email });
        if(!user){
                return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY, {
            expiresIn: "1d"
        });
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token: token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}