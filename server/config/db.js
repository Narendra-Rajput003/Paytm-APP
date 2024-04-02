const mongoose = require('mongoose');



const connectDB = ()=>{
    mongoose.connect(process.env.MOGODB_URI).then(()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDB;