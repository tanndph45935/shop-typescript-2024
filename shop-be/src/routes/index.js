import express from 'express'
import routerProduct from './product.js'
import routerUser from './user.js'
import routerCategory from './category.js'
import routerUpload from './upload.js'
const router = express.Router()

router.use('/products', routerProduct)
router.use('/users', routerUser)
router.use('/categorys', routerCategory)
// router.use('/products', routerUpload)

export default router