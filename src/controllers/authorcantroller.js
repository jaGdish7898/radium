const Mongoose = require("mongoose");
const authorModel = require("../models/authorModel");



let addThisAuthor=async function(req,res){
    let newAuthor=req.body;
    let savedData=await authorModel.create(newAuthor);
    res.send(`your saved Author is:${savedData}`)

}
module.exports.addThisAuthor=addThisAuthor;
