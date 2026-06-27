const Order = require("../models/Order");
const Cart = require("../models/Cart");

const createOrder = async (req,res,next)=>{
    try {
        const cart = await Cart.findOne({user: req.user._id}).populate(
            "items.menuItem" ,"name price status"
        );
        if(!cart || cart.items.length === 0){
            return res.status(400).json({
                success: false,
                message: "Your cart is empty",
            });
        };
        const outOfStockItem = cart.items.find(
            (item)=> item.menuItem.status === "out-of-stock"
        )
        if(outOfStockItem){
            return res.status(400).json({
                success:false,
                message: `${outOfStockItem.menuItem.name} is out of stock`,
            })
        }
        const orderItems = cart.items.map((item)=>({
    menuItem: item.menuItem._id,
    quantity: item.quantity,
    price: item.menuItem.price
        }));

        const totalPrice = orderItems.reduce((acc,item)=>{
            return acc + item.price * item.quantity
        },0);

        const order = await Order.create({
            user:req.user._id ,
            items: orderItems,
            totalPrice,
            deliveryAddress: req.body.deliveryAddress,
        });

        cart.item =[];
        await cart.save();

        res.status(201).json({
            success: true,
            message: "Order placed successfully",
            data: order,
        });
    } catch (error) {
        next(error)
    }
}

const getMyOrders = async (req ,res , next)=>{
    try {
        const orders = await Order.find({user: req.user._id})
        .populate("items.menuItem" ,"name emoji")
        .sort({createdAt: -1});

        res.status(200).json({
            success: true,
            count: orders.length,
            data: orders,
        });
    } catch (error) {
        next(error)
    }
}

const getOrderById = async (req ,res ,next)=>{
    try {
        const order = await Order.findById(req.params.id).populate(
            "items.menuItem" ,"name emoji"
        );

        if(!order){
             return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }
    if(order.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
         return res.status(403).json({
                success: false,
                message: "Access denied",
            });
    }
    res.status(200).json({
            success: true,
            data: order,
        });
    } catch (error) {
        next(error)
    }
}

const getAllOrders = async(req ,res ,next) =>{
    try {
        const orders = await Order.find()
        .populate("user" , "name email")
        .populate("items.menuItem", "name emoji")
        .sort({createdAt:-1})

         res.status(200).json({
            success: true,
            count: orders.length,
            data: orders,
        });
    } catch (error) {
        next(error)
    }
}

const updateOrderStatus = async (req ,res ,next)=>{
    try {
        const order = await Order.findById(req.params.id)

        if(!order){
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }
        order.status = req.body.status;
        await order.save();

         res.status(200).json({
            success: true,
            message: "Order status updated",
            data: order,
        });
    } catch (error) {
        next(error)
    }
}
module.exports ={ createOrder ,getMyOrders , getOrderById ,getAllOrders,
    updateOrderStatus
};