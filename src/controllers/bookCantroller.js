const Mongoose = require("mongoose");
const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");

let addThisBook=async function(req,res){
    let newData=req.body;
    let id=req.body.author;
    let presentOrNot=await authorModel.findById(id)

    if (presentOrNot){
        let savedData=await bookModel.create(newData);
        res.send(`your saved data is:${savedData}`)

    }else{
        res.send("author id must be valid")
    }
    
    // let savedData=await bookModel.create(newData);
    // res.send(`your saved data is:${savedData}`)

}
const getAllBook= async function (req, res) {
    let allBooks= await bookModel.find().populate("author")
    res.send({msg: allBooks})                              
}                                                          
                                                       
module.exports.addThisBook=addThisBook;
module.exports.getAllBook=getAllBook;
