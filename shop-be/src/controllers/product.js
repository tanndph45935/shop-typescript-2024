import Product from '../models/product'
import Category from '../models/category'
import { validPro } from '../validations/product.js'


export const get = async (req, res) => {
    try {
        const products = await Product.find()
        if (products.length === 0) {
            return res.status(400).json({
                message: 'Khong co san pham'
            })
        }
        return res.status(200).json({
            message: 'Tim thanh cong',
            datas: products,
        })
    }
    catch (err) {
        return res.status(500).json({
            message: 'Loi server'
        })
    }
}
export const create = async (req, res) => {
    try {
        // Check if a file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        
        // Parse request body
        const { name, price, description, categoryId } = req.body;
        console.log(name, price, description, categoryId,  req.file.filename  )

        // Create the product
        const product = await Product.create({
            name, 
            price,
            description,
            categoryId,
            image: req.file.filename  // Assuming Multer saves the image to 'uploads/' directory
        });

        // Handle product creation success
        if (!product) {
            return res.status(404).json({
                message: "Thêm sản phẩm thất bại",
            });
        } else {
            // Update category with the newly created product
            const updateCate = await Category.findByIdAndUpdate(categoryId, {
                $addToSet: {
                    products: product._id,
                }
            });

            // Handle category update success
            if (!updateCate) {
                return res.status(404).json({
                    message: "Update danh mục thất bại",
                });
            }

            // Respond with success message and data
            return res.status(200).json({
                message: "Thêm sản phẩm thành công",
                data: product
            });
        }
    } catch (error) {
        // Handle errors
        return res.status(500).json({
            message: error.message
        });
    }
}
// export const update = async (req, res) => {
//     try {
//         const { error } = validPro.validate(req.body)
//         if (error) {
//             return res.status(400).json({
//                 message: error.details[0].message
//             })
//         }
//         const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//             new: true
//         })
//         if (!product) {
//             return res.status(400).json({
//                 message: 'update khong thanh cong'
//             })
//         }
//         return res.status(200).json({
//             message: 'update thanh cong',
//             datas: product,
//         })
//     }
//     catch (err) {
//         return res.status(500).json({
//             message: 'Loi server'
//         })
//     }
// }

export const update = async (req, res) => {
    try {
        // Check if a file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Parse request body
        const { name, price, description, categoryId } = req.body;
        console.log(name, price, description, categoryId, req.file.filename);

        // Update the product
        const product = await Product.findByIdAndUpdate(req.params.id, {
            name,
            price,
            description,
            categoryId,
            image: req.file.filename // Assuming Multer saves the image to 'uploads/' directory
        }, { new: true });

        // Handle product update success
        if (!product) {
            return res.status(404).json({
                message: "Update sản phẩm thất bại",
            });
        } else {
            // Update category with the newly updated product
            const updateCate = await Category.findByIdAndUpdate(categoryId, {
                $addToSet: {
                    products: product._id,
                }
            });

            // Handle category update success
            if (!updateCate) {
                return res.status(404).json({
                    message: "Update danh mục thất bại",
                });
            }

            // Respond with success message and data
            return res.status(200).json({
                message: "Cập nhật sản phẩm thành công",
                data: product
            });
        }
    } catch (error) {
        // Handle errors
        return res.status(500).json({
            message: error.message
        });
    }
}

export const getDetail = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(400).json({
                message: 'Khong tim thay san pham'
            })
        }
        return res.status(200).json({
            message: 'Tim thanh cong',
            datas: product,
        })
    }
    catch (err) {
        return res.status(500).json({
            message: 'Loi server'
        })
    }
}
export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(400).json({
                message: 'Xoa khong thanh cong'
            })
        }
        return res.status(200).json({
            message: 'Xoa thanh cong',
            datas: product,
        })
    }
    catch (err) {
        return res.status(500).json({
            message: 'Loi server'
        })
    }
} 