import express from 'express'
import { addCate, deleteCate, getAllCate, getCateOne, updateCate } from '../controllers/category';
import { checkPromission } from '../middlewares/checkPromission';
const routerCategory = express.Router()

routerCategory.get('/', getAllCate);
routerCategory.get('/:id', getCateOne);
routerCategory.post('/',checkPromission, addCate);
routerCategory.put('/:id',checkPromission, updateCate);
routerCategory.delete('/:id',checkPromission, deleteCate);
export default routerCategory;