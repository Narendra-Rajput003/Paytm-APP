const express=require('express');
const route=express.Router();



const {singUp,singIn}=require('../controller/auth_controller');



route.post('/signup',singUp);
route.post('/signin',singIn);


module.exports=route;