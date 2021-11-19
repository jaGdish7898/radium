const mongoose = require("mongoose");
const ObjectId=mongoose.Schema.Types.ObjectId


let bookSchema=new mongoose.Schema({
    bookName:String,
    price:Number,
    rating:Number,
    author:{            //at this key we want author to be showed
        type:ObjectId,  //type:ObjectId:means we will give id of author here while entry   
                        //of book
        ref:"MyAuthor"  //it means serch the given author id in storage called  "MyAuthor" 

    }


     
})
module.exports=mongoose.model('MyBook',bookSchema)
