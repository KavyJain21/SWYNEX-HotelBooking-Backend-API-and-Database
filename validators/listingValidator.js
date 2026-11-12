
const Joi = require("joi");

const listingSchema = Joi.object({
    title: Joi.string().trim().min(3).max(100).required(),
    description: Joi.string().trim().max(1000).required(),
    image: Joi.string().uri().allow("").optional(),
    price: Joi.number().positive().required(),
    location: Joi.string().trim().required(),
    country: Joi.string().trim().required(),
    amenities: Joi.array().items(Joi.string().trim()).optional(),
    available: Joi.boolean().optional()
});

module.exports = listingSchema;
