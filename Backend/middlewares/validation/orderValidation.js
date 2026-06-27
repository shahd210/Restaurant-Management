const joi = require("joi")

const createOrderSchema = joi.object({
     deliveryAddress: joi.object({
            street: joi.string().required()
            .messages({
                "any.required": "Street is required",
            }),
            city: joi.string().required()
            .messages({
                "any.required": "City is required",
            }),
            zipCode: joi.string().required()
            .messages({
                "any.required": "Zip code is required",
            }),
        }).required()
        .messages({
            "any.required": "Delivery address is required",
        }),
});

const updateOrderStatusSchema = joi.object({
     status: joi.string()
            .valid("pending", "in-kitchen", "out-for-delivery", "delivered")
            .required()
            .messages({
                "any.only": "Status must be one of: pending, in-kitchen, out-for-delivery, delivered",
                "any.required": "Status is required",
            }),
})
module.exports = {createOrderSchema , updateOrderStatusSchema}