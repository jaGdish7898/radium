const UserModel= require("../models/userModel.js")

const createUser= async function (req, res) {
    var newData= req.body
    let savedUser= await UserModel.create(newData)
    res.send({msg:savedUser })    
        
}


const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
} 



module.exports.createUser= createUser
module.exports.getUsersData= getUsersData

