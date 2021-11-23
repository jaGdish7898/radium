const mongoose=require('mongoose')
let ObjectId=mongoose.Schema.Types.ObjectId

const newUserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isDeleted:{
    
        default:false
    }
       
    

}, {timestamps: true} )

module.exports=mongoose.model('User',newUserSchema)