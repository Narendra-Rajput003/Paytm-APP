const express = require('express');
const  cors = require('cors');
const authRoutes = require("./routes/auth_route");
const userRoutes = require("./routes/user_route");
const accountRoutes = require("./routes/account_route");
const dbConnect = require("./config/db");


const app = express();
require("dotenv").config();
const PORT=process.env.PORT || 5000;



app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/account",accountRoutes);






dbConnect();
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})