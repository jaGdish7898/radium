const mongoose = require("mongoose");
const ObjectId=mongoose.Schema.Types.ObjectId


let publisherSchema=new mongoose.Schema({
    name:String,
    contactInfo:String,
    headQuerter:String
})
module.exports=mongoose.model('publisher',publisherSchema)
