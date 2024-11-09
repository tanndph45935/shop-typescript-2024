import multer from 'multer'
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './src/uploads')
    },
    filename: (req, file, cb) => {
        const abc = Date.now()
        cb(null, abc + file.originalname)
    }
})
const upload = multer({ storage: storage })
export default upload