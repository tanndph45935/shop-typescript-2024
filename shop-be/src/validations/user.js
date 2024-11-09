import joi from 'joi'

export const registerValid = joi.object({
    username: joi.string().required().messages({
        "any.required": "Không được bỏ trống",
        "string.min": "username ít nhất 6 kí tự"
    }),
    email: joi.string().required().email().messages({
        "any.email": "email không hợp lệ",
        "any.required": "Không được bỏ trống",
        "string.min": "giá ít nhất 1000"
    }),
    password: joi.string().required().messages({
        "any.required": "Không được bỏ trống",
    }),
    confirmpassword: joi.string().required().valid(joi.ref("password"))

})
export const loginValid = joi.object({
    email: joi.string().required().email().messages({
        "any.email": "email không hợp lệ",
        "any.required": "Không được bỏ trống",
        "string.min": "giá ít nhất 1000"
    }),
    password: joi.string().required().messages({
        "any.required": "Không được bỏ trống",
    }),
    role: joi.string()

})