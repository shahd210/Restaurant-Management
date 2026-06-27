const express = require("express")
const router = express.Router();

const authorizeRole = require("../middlewares/authorizeRole")
const protect = require("../middlewares/protect")

const  {createOrderSchema , updateOrderStatusSchema} =require("../middlewares/validation/orderValidation")
const validate =require("../middlewares/validate")
const { createOrder ,getMyOrders , getOrderById ,getAllOrders,updateOrderStatus}=require("../controllers/orderController")

router.post("/" ,protect,validate(createOrderSchema),createOrder);
router.get("/my-orders",protect ,getMyOrders);
router.get("/",protect , authorizeRole("admin") , getAllOrders)
router.get("/:id",protect , getOrderById)
router.patch("/:id/status" ,protect , authorizeRole("admin"),validate(updateOrderStatusSchema) ,updateOrderStatus)

module.exports = router;