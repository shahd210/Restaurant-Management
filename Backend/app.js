require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes =require("./routes/authRoutes")
const dbconnection = require("./config/db")
const morgan = require("morgan")

//middlewares
app.use(express.json());
//loggger
if(process.env.NODE_ENV === "development"){
app.use(morgan("dev"))
}

//DB
dbconnection();


//routes
app.use("/api/auth" ,authRoutes);

const port = process.env.PORT || 5000 ;
app.listen(port , ()=>{
    console.log(`Server Is Running On Port ${port}`)
})
