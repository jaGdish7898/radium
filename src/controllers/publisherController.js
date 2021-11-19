
const publisherModel= require("../models/publisherModel")


let addPublisher=async function(req,res){
    let newData=req.body();
    let savedData=await publisherModel.create(newData)
    res.send({newAddedPublisher:savedData})
}
module.exports.addPublisher=addPublisher