import User from "../models/user.js"
import { loginValid, registerValid } from "../validations/user.js"
import jwt from "jsonwebtoken"
import bcryptjs from 'bcryptjs'
import "dotenv/config"
const { KEY } = process.env

export const register = async (req, res) => {
    try {
        const { email, password } = req.body
        const { error } = registerValid.validate(req.body)
        console.log(error);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            })
        }
        const checkEmail = await User.findOne({ email })
        if (checkEmail) {
            return res.status(400).json({
                message: "Email da ton tai"
            })
        }
        const hashedPassword = await bcryptjs.hash(password, 10)
        const user = await User.create({
            ...req.body,
            password: hashedPassword,
        })
        user.password = undefined
        if (!user) {
            return res.status(400).json({
                message: 'Dang ky thanh cong'
            })
        }
        return res.status(200).json({
            message: 'Them thanh cong',
            datas: user,
        })
    }
    catch (err) {
        return res.status(500).json({
            message: 'Loi server'
        })
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const { error } = loginValid.validate(req.body)
        if (error) {
            return res.status(403).json({
                message: error.details[0].message
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(403).json({
                message: "Email không chính xác"
            })
        }
        console.log(user);
        const checkPass = await bcryptjs.compare(password, user.password)
        console.log(checkPass);
        if (!checkPass) {
            return res.status(403).json({
                message: "Mật khẩu không khớp"
            })
        }
        
        const token = jwt.sign({ _id: user._id }, KEY)
        console.log(token);
        user.password = undefined
        return res.status(200).json({
            message: "Đăng nhập thành công",
            datas: {
                ...user.toObject(), accessToken: token
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        })
    }
}