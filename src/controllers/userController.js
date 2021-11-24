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
        //here need to give {-id:user._id} this will be dynamic solution,by doing this it will automatically select value for _id=_id in user,but we give _id manually as after validation of token i need the output like this:
        // const validToken={"619d15ee0df7d8df2e77624f",iat:1637689153},but i was not getting the id here
        let token=await jwt.sign({_id:"619d15ee0df7d8df2e77624f"},"radium")//here token is generated for the for user havinf _id="619d15ee0df7d8df2e77624f"
        res.setHeader("x-auth-token",token) //sending token in header at key called ""
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

