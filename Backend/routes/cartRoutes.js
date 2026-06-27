const express = require("express")
const router = express.Router()

const protect =require("../middlewares/protect")
const validate = require("../middlewares/validate")
const {addToCartSchema, updateCartItemSchema} =
require("../middlewares/validation/cartValidation")

const { getCart, addToCart, updateCartItem, removeFromCart, clearCart } =
require("../controllers/cartController")

router.get("/",protect ,getCart)
router.post("/add" ,protect , validate(addToCartSchema) ,addToCart)
router.patch("/update",protect ,validate(updateCartItemSchema) ,updateCartItem)
router.delete("/remove/:menuItemId",protect ,removeFromCart)
router.delete("/clear",protect,clearCart)

module.exports =router