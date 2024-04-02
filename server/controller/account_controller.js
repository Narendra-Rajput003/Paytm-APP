const { default: mongoose } = require("mongoose");
const Account = require("../model/account_model");



exports.getBalance=async(req,res)=>{
    try {
        const account = await Account.findOne({userId: req.userId});
        if(!account) {
            return res.status(404).json({
                success: false,
                message: "Account not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: {
                balance: account.balance
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}


exports.transfer=async(req,res)=>{
    try {

        const session = await mongoose.startSession();  

        session.startTransaction();
        const {amount,to}=req.body;

        const account = await Account.findOne({userId: req.userId});

        if(!account || account.balance<amount) {
            await session.abortTransaction();
            session.endSession();
            return res.status(404).json({
                success:false,
                message:"Account not found"
            });
        }
        
        const toAccount = await Account.findOne({userId: to}).session(session);
        if(!toAccount) {
            await session.abortTransaction();
            session.endSession();
            return res.status(404).json({
                success:false,
                message:"Account not found"
            });
        }

        //perform the transfer
        // $inc stand for increment or decrement
        await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session);
        await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session);

        // commit the transaction 
        await session.commitTransaction();

        res.json({
        success:true,
        message:"Transfer successful"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"error in transfer the money"
        })
    }
}