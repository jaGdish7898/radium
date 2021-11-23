const UserModel= require("../models/userModel.js")

const createUser= async function (req, res) {
    var newData= req.body
    let savedUser= await UserModel.create(newData)
    res.send({msg:savedUser })    
        
}

const login= async function (req, res) {
    let loginBody=req.body;
    let isPresent=await UserModel.find({$and:[{name:loginBody.name},{password:loginBody.password}]})
    if (isPresent && isPresent.isDeleted==false){
        res.send({
            status:true,
            data:isPresent
        })
    }else{
        res.send({
            status:false,
            msg:"invalid id or account is deleted"
        })
    }
        
}
const getUser=async function(req,res){
    let id=req.params.UserId;
    let UserId=id.toString()
    let isPresent=await UserModel.findById(UserId)
    if (isPresent){
        res.send(isPresent)
    }else{
        res.send("invalid user id")

        
    }
}

const update=async function(req,res){
    let updateBody=req.body
    let id=req.params.UserId;
    let UserId=id.toString()
    let isPresent=await UserModel.findById(UserId)
    if(isPresent){
        await UserModel.findOneAndUpdate({_id:UserId},{email:updateBody.email})
        res.send("update done hai")
    }else{
        res.send("invalid id")
    }
}





module.exports.createUser= createUser
module.exports.login= login
module.exports.getUser=getUser
module.exports.update=update

// module.exports.getUsersData= getUsersData

