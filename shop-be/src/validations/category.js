import joi from 'joi'

export const cateValid = joi.object({
    name: joi.string().required().min(6).messages({
        "any.required": "Không được bỏ trống",
        "string.min": "name ít nhất 6 kí tự"
    }),
    slug: joi.string().required().messages({
        "any.required": "Không được bỏ trống"
    })

})