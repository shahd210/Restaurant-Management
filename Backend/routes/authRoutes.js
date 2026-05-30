const express = require("express")
const router = express.Router();
const validate = require("../middlewares/validate")
const {registerSchema,loginSchema} = require("../middlewares/validation/authValidation")
const {register , login} = require("../controllers/authController")

router.post("/register",validate(registerSchema),register)
router.post("/login",validate(loginSchema),login)

module.exports = router;