require("dotenv").config();

const express = require("express");
const app = express();

const dbconnection = require("./config/db")

app.use(express.json());

const morgan = require("morgan")
if(process.env.NODE_ENV === "development"){
app.use(morgan("dev"))
}


dbconnection();

const port = process.env.PORT || 5000 ;

app.listen(port , ()=>{
    console.log(`Server Is Running On Port ${port}`)
})
