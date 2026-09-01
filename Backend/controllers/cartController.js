const MenuItem =require("../models/MenuItem")
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
        return acc+ item.menuItem.price * item.quantity
    },0)
    
   res.status(200).json({
    success:true,
    data: {...cart.toObject(),totalPrice },
   })

    } catch (error) {
        next(error)
    }
}
const addToCart = async (req,res,next)=>{
    try {
        const { menuItemId , quantity} = req.body;

         const menuItem = await MenuItem.findById(menuItemId);
         if(!menuItem){
            return res.status(404).json({
                success:false,
                message: "Menu item not found",
            });
         }

         if(menuItem.status === "out-of-stock"){
            return res.status(400).json({
                success:false,
                message:"This item is out of stock"
            })
         }

         let cart = await Cart.findOne({user: req.user._id});
         if (!cart){
            cart = await Cart.create({
                user: req.user._id ,
                items: [{menuItem: menuItemId , quantity}]
            })
         }else{
            const existingItem = cart.items.find(
                (item)=> item.menuItem.toString() === menuItemId
            );
            if(existingItem){
                existingItem.quantity += quantity;
            } else {
                cart.items.push({menuItem: menuItemId , quantity})
            }
            await cart.save();
         }

         await cart.populate("items.menuItem" , "name price emoji status");

         const totalPrice = cart.items.reduce((acc,item)=>{
            return acc + item.menuItem.price * item.quantity;
         },0);

         res.status(200).json({
            success:true ,
            message:"Item added to cart",
            data: { ...cart.toObject() , totalPrice},
         })
         
    } catch (error) {
        next(error)
    }
}

const updateCartItem = async (req ,res ,next)=>{
    try {

    const {menuItemId ,quantity} =req.body ;
    const cart = await Cart.findOne({user: req.user._id})
    if(!cart){
        return res.status(404).json({
                success: false,
                message: "Cart not found",
            });
    }
  const item = cart.items.find(
    (item)=> item.menuItem.toString() === menuItemId
  )
  if(!item){
      return res.status(404).json({
                success: false,
                message: "Item not found in cart",
            });
  }

  item.quantity = quantity;
  await cart.save();

  await cart.populate("items.menuItem","name price emoji status")
  const totalPrice = cart.items.reduce((acc,item)=>{
    return acc + item.menuItem.price * item.quantity
  },0)


  res.status(200).json({
    success:true ,
    message: "Cart updated",
    data :{ ...cart.toObject() , totalPrice},
  })

    } catch (error) {
        next(error)
    }
    
}

const removeFromCart = async (req ,res ,next)=>{
    try {
        const cart = await Cart.findOne({user: req.user._id})
        if(!cart){
            return res.status(404).json({
                success: false,
                message: "Cart not found",
            });
        }

        cart.items = cart.items.filter(
            (item)=> item.menuItem.toString() !== req.params.menuItemId
        )
        await cart.save();
        await cart.populate("items.menuItem" , "name price emoji status");

        const totalPrice = cart.items.reduce((acc,item)=>{
            return acc + item.menuItem.price * item.quantity;
        },0)

        res.status(200).json({
            success: true,
            message: "Item removed from cart",
            data:{...cart.toObject() , totalPrice },
        });
    } catch (error) {
        next(error)
    }
}

const clearCart = async (req ,res ,next)=>{
try {
    
    const cart = await Cart.findOne({user:req.user._id})

    if(!cart){
        return res.status(404).json({
                success: false,
                message: "Cart not found",
            });
    }
    cart.items =[];
    await cart.save();
     res.status(200).json({
            success: true,
            message: "Cart cleared",
            data: { items: [], totalPrice: 0 },
        });
} catch (error) {
    next(error)
}};

module.exports = {getCart , addToCart , updateCartItem ,
    removeFromCart , clearCart
}