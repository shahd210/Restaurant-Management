const joi =require("joi")

const addToCartSchema = joi.object({
    menuItemId:joi.string().hex().length(24).required()
.messages({
        "string.hex": "Invalid menu item ID",
        "string.length": "Invalid menu item ID",
        "any.required": "Menu item ID is required",
    }),
    quantity:joi.number().integer().min(1).max(50).required()
    .messages({
        "number.base": "Quantity must be a number",
        "number.integer": "Quantity must be a whole number",
        "number.min": "Quantity must be at least 1",
        "number.max": "Quantity cannot exceed 50",
        "any.required": "Quantity is required",
    }),
});

const updateCartItemSchema = joi.object({
        menuItemId:joi.string().hex().length(24).required()
.messages({
        "string.hex": "Invalid menu item ID",
        "string.length": "Invalid menu item ID",
        "any.required": "Menu item ID is required",
    }),
    quantity:joi.number().integer().min(1).max(50).required()
    .messages({
        "number.base": "Quantity must be a number",
        "number.integer": "Quantity must be a whole number",
        "number.min": "Quantity must be at least 1",
        "number.max": "Quantity cannot exceed 50",
        "any.required": "Quantity is required",
    }),
});

module.exports ={addToCartSchema,updateCartItemSchema};