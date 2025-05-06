const Joi = require('joi');

const validator_dto = Joi.object({
    name: Joi.string().min(2).max(22).required().messages({
        "string.min": "Name should be at least 2 characters long",
        "string.max": "Name exceeded the maximum character limit",
        "any.required": "Name is required"
    }),
    email: Joi.string().email({ tlds: { allow: ['com'] } }).required().messages({
        "string.email": "Email must be a valid email address",
        "any.required": "Email is required"
    }),
    password: Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).required().messages({
        "string.pattern.base": "Password must be at least 8 characters and include a letter, number, and special character",
        "any.required": "Password is required"
    }),
    confirmPassword: Joi.string().equal(Joi.ref('password')).required().messages({
        "any.only": "Passwords and confirmPassword do not match",
        "any.required": "Confirm password is required"
    }),
    phone: Joi.string().regex(/^(?:\+?977[-\s]?)?(98\d{8}|97\d{8}|96\d{8}|0\d{1,3}\d{5,7})$/).allow(null, '').optional(),
    address: Joi.object({
        billingaddress: Joi.string().max(100).allow(null, '').default(null),
        shippingaddress: Joi.string().max(100).allow(null, '').default(null)
    }).allow(null, '').default(null),
    role: Joi.string().pattern(/^(customer|admin|seller)$/).default('customer'),
    gender: Joi.string().pattern(/^(male|female|others)$/).optional().default(null),
    image: Joi.string().allow(null, '').optional().default(null)
});

module.exports = { validator_dto };
