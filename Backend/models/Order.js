const mongoose = require("mongoose")
const MenuItem = require("./MenuItem")

const OrderSchema = new mongoose.Schema({
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
},
items:[
    {
        menuItem:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"MenuItem",
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
            min: [1, "Quantity must be at least 1"],
        },
        price:{
            type:Number,
            required:true,
        }
    }
],
totalPrice:{
    type: Number,
    required:true,
},
status:{
    type: String,
    enum: ["pending", "in-kitchen", "out-for-delivery", "delivered"],
    default: "pending",
},
  deliveryAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        zipCode: { type: String, required: true },
    },
},{timestamps:true});
const Order = mongoose.model("Order",OrderSchema)
module.exports = Order;