import express from 'express'
import { create, get, getDetail, remove, update } from '../controllers/product'
import upload from '../models/upload'
const routerProduct = express.Router()
import fs from 'fs'
import { checkPromission } from '../middlewares/checkPromission'


routerProduct.get('/', get)
routerProduct.get('/image/:filename', (req, res) => {
    const filename = req.params.filename
    const image = fs.readFileSync(`./src/uploads/${filename}`)
    res.contentType('image/jpeg')
    res.send(image)
})
routerProduct.get('/:id', getDetail)
routerProduct.post('/', checkPromission, upload.single('image') ,create)
// routerProduct.post('/',create)
routerProduct.put('/:id', checkPromission, upload.single('image') , update)
routerProduct.delete('/:id',checkPromission, remove)
export default routerProduct