const { required } = require("joi")
const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
    name:{
        type:String ,
        required:[true , "Name Is Required"],
        trim:true,
    },
    Description:{
         type:String ,
        required:[true , "Description Is Required"],
    },
    price:{
        type:Number,
        required:[true , "price Is Required"],
        min:[0 , "Price Cannot be negative"]
    },
    categorey:{
        type:String,
        required:[true , "categorey Is Required"],
        enum:["starter", "main", "dessert", "drinks" ]
    },
    badge:{
        type:String,
        enum: ["vegetarian", "gluten-free", "popular", null],
        default: null,
    },
    emoji:{
        type:String,
    },
    status:{
        type:String,
        enum: ["active", "out-of-stock"],
        default: "active",
    },

},{timestamps:true});

module.exports = mongoose.model("MenuItem" ,ItemSchema)
