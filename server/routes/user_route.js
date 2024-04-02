const express = require('express');
const route = express.Router();



const {updateUser,getUsers}=require("../controller/user_controller");
const {authMiddleware}=require("../middleware/auth");



route.put('/updateUser',authMiddleware,updateUser);
route.get("/bulk",authMiddleware,getUsers);

module.exports=route;