import mongoose from 'mongoose'

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
        min:2,
    },
    category:{
        type:String,
        required:true,
    },
    rating:{
        type:Number
    },
    supply:Number,
},{timestamps:true})

const Product=mongoose.model("Product",ProductSchema)

export default Product