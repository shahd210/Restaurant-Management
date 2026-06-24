const menuItem =require("../models/MenuItem")
const Cart =require("../models/Cart")

const getCart = async (req,res,next)=>{
    try {
    
    const cart = await Cart.findOne({user: req.user._id}).populate(
        "items.menuItem"
        , "name price emoji status")
    
if(!cart){
  return  res.status(200).json({
        success:true,
        data:{items:[],totalPrice:0},
   });
}
   
    const totalPrice = cart.items.reduce((acc,item)=>{
        return item.menuItem.price * item.quantity
    },0)
    
   res.status(200).json({
    success:true,
    data: {...cart.toObject(),totalPrice },
   })

    } catch (error) {
        next(error)
    }
}
