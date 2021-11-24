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
    // res.send(user)
    if (user){
        // let payload={_id:user._id}
        let token=await jwt.sign({_id:"619d15ee0df7d8df2e77624f"},"radium")
        res.setHeader("x-auth-token",token)
        res.send({status:true})
        // 
    }else{
        res.send({
            status:false,
            msg:"invalid Credentials"
        })
    }
        
}
const getUser=async function(req,res){
    
    if (req.validToken._id==req.params.userId){
        
        let user=await UserModel.findOne({_id:req.params.userId})
        
        if(user){
            res.send({status:true,data:user})
        }else{
            res.send("user not found")
        }
        
    }else{
        res.send("not authorised")
    }
}

const update=async function(req,res){
    // res.send("ok")
    if (req.validToken._id==req.params.userId){
        
        let user=await UserModel.findOne({_id:req.params.userId})
        
        if(user){
            let updatedUser=await UserModel.findOneAndUpdate({_id:req.params.userId},{email:req.body.email})
            res.send({status:true,data:updatedUser})
        }else{
            res.send("user not found")
        }
    }else{
        res.send("not authorised")
    }
}





module.exports.createUser= createUser
module.exports.login= login
module.exports.getUser=getUser
module.exports.update=update

// module.exports.getUsersData= getUsersData

