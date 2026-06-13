const express =require("express")
const router = express.Router();

const protect = require("../middlewares/protect")
const authorizeRole = require("../middlewares/authorizeRole")
const validate = require("../middlewares/validate")

const {createItemSchema , updateItemSchema}=require("../middlewares/validation/menuValidation")
const {  getItems ,getItemById , createItem , updateItem , deleteItem} =
 require("../controllers/menuController")

router.get("/",protect ,getItems)
router.get("/:id" , protect , getItemById)
router.post("/",protect ,authorizeRole("admin"),validate(createItemSchema) ,createItem)
router.put("/:id" ,protect ,authorizeRole("admin"),validate(updateItemSchema),updateItem)
router.delete("/:id" , protect , authorizeRole("admin") ,deleteItem)

module.exports = router ;