const mongoose =require("mongoose")
const bcrypt = require("bcrypt")
const { required } = require("joi")

const UserSchema = new mongoose.Schema({
    username:{
        type:String ,
        required:[true ,"Username is required"],
        trim:true,
    },
    email:{
         type:String ,
        required:[true ,"email is required"],
        trim:true,
        unique:true,
        lowercase:true,

    },
    password:{
        type:String,
        required:[true , "password is required"],
        minlength:[6, "password must be at least 6 chatacters"],
        
    },
    role:{
        type:String,
        enum:["customer" , "admin"],
        default:"customer",
    },
    savedAddresses:[{
        street:String, 
        city:String,
        zipcode:String
    }]
}, {timestamps:true})

UserSchema.pre("save" , async function (next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password , 10);
  next();
} )

UserSchema.methods.comparePassword = async function (matchedPassword){
    return await bcrypt.compare(matchedPassword , this.password)

}


module.exports = mongoose.model("User" ,UserSchema)