const joi = require("joi")

const createItemSchema = joi.object({
    name: joi.string().required().min(2)
    .messages({
        "string.min":"Name must be at least 2 characters",
        "any.required": "Name is required"
    }),
    description: joi.string().required().min(10)
    .messages({
        "string.min":"Description must be at least 10 characters",
        "any.required": "Description is required"
    }),
    price: joi.number().required().min(1)
    .messages({
        "number.min":"Price must be greater than 0",
        "any.required": "Price is required",
    }),

    category: joi.string().required()
    .valid("starter","main","dessert","drinks")
    .messages({
        "any.required":"Category is required",
        "any.only": "Category must be one of: starter, main, dessert, drinks"
    }),
    badge: joi.string().optional()
    .valid("vegetarian", "gluten-free", "popular")
    .allow(null)
    .messages({
        "any.only": "Badge must be one of: vegetarian, gluten-free, popular"
    }),
    image: joi.string().uri().allow("").optional()
.messages({
    "string.uri": "Image must be a valid URL"
}),
    emoji: joi.string().allow("").optional(),
    status: joi.string().optional().default("active")
    .valid("active","out-of-stock")
    .messages({"any.only":"Status must be either active or out-of-stock"}),
});

const updateItemSchema = joi.object({
    name: joi.string().min(2).trim()
    .messages({"string.min":"Name must be at least 2 characters"}),
    description: joi.string().min(10)
    .messages({"string.min":"Description must be at least 2 characters"}),
    price: joi.number().min(1).messages({
        "number.min":"Price must be greater than 0"
    }),
    category: joi.string().valid("starter","main","dessert","drinks")
    .messages({
        "any.only": "Category must be one of: starter, main, dessert, drinks"
    }),
    badge: joi.string().optional().allow(null)
.valid("vegetarian", "gluten-free", "popular")
.messages({
        "any.only": "Badge must be one of: vegetarian, gluten-free, popular"
    }),
    image: joi.string().uri().allow("").optional()
.messages({
    "string.uri": "Image must be a valid URL"
}),
    emoji: joi.string().allow("").optional(),
    status: joi.string().optional().default("active")
    .valid("active","out-of-stock")
    .messages({"any.only":"Status must be either active or out-of-stock"}),

})
module.exports = {createItemSchema , updateItemSchema};