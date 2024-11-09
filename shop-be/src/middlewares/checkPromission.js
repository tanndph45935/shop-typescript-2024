import 'dotenv/config'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import 'dotenv/config'
const { KEY } = process.env
export const checkPromission = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token) {
            return res.status(403).json({
                message: 'Bạn chưa đăng nhập'
            })
        }
        const decoded = jwt.verify(token, KEY)
        const user = await User.findById(decoded._id);
        if (!user) {
            return res.status(403).json({
                message: "Token lỗi"
            });
        }
        // Kiểm tra quyền
        if (user.role != "admin") {
            return res.status(403).json({
                message: "Bạn không có quyền thực hiện chức năng này",
            });
        }
        //
        next();
    } catch (error) {
        return res.status(403).json({
            message: "Token không hợp lệ"
        })
    }
} 
