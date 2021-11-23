const mongoose=require('mongoose')
let ObjectId=mongoose.Schema.Types.ObjectId

const userSchema=new mongoose.Schema({
    name:String,
    balance:{
        type:Number,
        default:100
    },
    address:String,
    age: Number,
    gender: {type: String, enum: ['male', 'female', 'LGBTQ']},
    
    

}, {timestamps: true} )

module.exports=mongoose.model('User',userSchema)