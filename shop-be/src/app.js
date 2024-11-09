import express from 'express'
import cors from 'cors'
import router from './routes'
import  mongoose  from 'mongoose'
import 'dotenv/config'
const { DB } = process.env
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', router)
console.log(DB);
mongoose.connect(DB)
export const viteNodeApp = app