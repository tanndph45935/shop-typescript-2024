import joi from "joi";

export const validPro = joi.object({
    name: joi.string().required(),
    price: joi.number().required().min(1000),
    description: joi.string().required()
})