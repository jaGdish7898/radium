const mongoose=require('mongoose')


const productSchema=new mongoose.Schema({
    name:String,
    catagery:String,
    price:{
        type:Number,
        required:true
    }
}, {timestamps: true} )

module.exports=mongoose.model('Product',productSchema)