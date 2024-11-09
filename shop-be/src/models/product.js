import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
})
export default mongoose.model('Product', productSchema)