const authorModel= require("../models/authorModel.js")

const createAuthor= async function (req, res) {
    var data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg:savedData})    
}

const getById=async function(req,res){
    let id =req.body.id
    let ans=await authorModel.findById(id)
    res.send(ans)
}





module.exports.createAuthor= createAuthor
module.exports.getById= getById