const mongoose=require('mongoose')
let ObjectId=mongoose.Schema.Types.ObjectId

const userSchema=new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: Number,
        unique: true,
        required: true
    },
    emailId: String, 
    gender: {type: String, enum: ['male', 'female', 'LGBTQ']}, 
    age: Number,
    isIndian: Boolean, 
    bookHave:Number,
    favAuthor:{
        type:ObjectId,
        ref:"MyAuthor"
    },
    publisherInfo:{
        type:ObjectId,
        ref:"publisher"
    }
    
    // parentsInfo : { motherName: String, fatherName: String , siblingName: String },
    // cars: [ String ]

}, {timestamps: true} )

module.exports=mongoose.model('User',userSchema)