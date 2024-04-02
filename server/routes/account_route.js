const express = require('express');
const route = express.Router();



const {getBalance,transfer}=require("../controller/account_controller");

const {authMiddleware}=require("../middleware/auth");


route.get('/balance',authMiddleware,getBalance);
route.post('/transfer',authMiddleware,transfer);






module.exports=route;