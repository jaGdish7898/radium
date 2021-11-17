const mongoose = require("mongoose");


let bookSchema=new mongoose.Schema({
    name:String,
    author_id:{
        type:Number,
        required:true
    },
    price:Number,
    rating:Number
     
})
module.exports=mongoose.model('Boook',bookSchema)
