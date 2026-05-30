const joi = require("joi")

const registerSchema = joi.object({
    username: joi.string().min(3).max(30).trim().required(),
    email: joi.string().email().required().trim().lowercase(),
    password: joi.string().min(6).required(),

});

const loginSchema = joi.object({
    email: joi.string().email().required().lowercase(),
    password: joi.string().required(),
});

module.exports = {registerSchema , loginSchema};