const mongoose = require("mongoose")

const dbconnection = async () =>{
try {
    
    await mongoose.connect(process.env.MONGO_URL)
    console.log("DB is connected");
    
}  catch (error) {
    console.error("DB Connection Failed:", error.message)
    process.exit(1);
}
}

module.exports = dbconnection;