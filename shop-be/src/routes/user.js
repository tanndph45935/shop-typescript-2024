import express from 'express'
import { login, register } from '../controllers/auth'
const routerUser = express.Router()

// routerUser.get('/', login)
routerUser.post('/register', register)
routerUser.post('/login', login)
export default routerUser   