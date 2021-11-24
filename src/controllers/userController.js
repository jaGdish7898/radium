const UserModel= require("../models/userModel.js")
const jwt=require("jsonwebtoken")


const createUser= async function (req, res) {
    var newData= req.body
    let savedUser= await UserModel.create(newData)
    res.send({msg:savedUser })    
        
}

const login= async function (req, res) {
    let loginBody=req.body;
    let user=await UserModel.find({$and:[{name:loginBody.name},{password:loginBody.password},{isDeleted:false}]})
    if (user){
        let token=await jwt.sign({_id:user[0]._id},"radium")
        res.setHeader('x-auth-token',token)
        res.send({status:true})
    }else{
        res.send({
            status:false,
            msg:"invalid Credentials"
        })
    }
        
}


const getUser=async function(req,res){
    let user=await UserModel.findOne({_id:req.params.userId})
        if(user){
            res.send({status:true,data:user})
        }else{
            res.send("user not found")
        }
}

const update=async function(req,res){
    let user=await UserModel.findOne({_id:req.params.userId})
        if(user){
            user.email=req.body.email
            res.send({status:true,data:user})
        }else{
            res.send("user not found")
        }
}    

const getThis=async function(req,res){
    let body=req.body;
    user=await UserModel.findOne({name:body.name})
    res.send(user)
}



module.exports.createUser= createUser
module.exports.login= login
module.exports.getUser=getUser
module.exports.update=update
module.exports.getThis=getThis


// module.exports.getUsersData= getUsersData

