const express = require('express');
const route = express.Router();



const {updateUser,getUsers,logout}=require("../controller/user_controller");
const {authMiddleware}=require("../middleware/auth");



route.put('/updateUser',authMiddleware,updateUser);
route.get("/bulk",authMiddleware,getUsers);
route.delete('/logout',authMiddleware,logout);

module.exports=route;