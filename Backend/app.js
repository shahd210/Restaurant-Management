require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")

const authRoutes =require("./routes/authRoutes")
const menuRoutes = require("./routes/menuRoutes")
const dbconnection = require("./config/db")
const morgan = require("morgan")

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
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
app.use("/api/menu",menuRoutes)


const errorMiddleware =require("./middlewares/errorMiddleware")
app.use(errorMiddleware)
const port = process.env.PORT || 5000 ;
app.listen(port , ()=>{
    console.log(`Server Is Running On Port ${port}`)
})
