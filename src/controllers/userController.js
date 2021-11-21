const UserModel= require("../models/userModel.js")

const createUser= async function (req, res) {
    var data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})    
}


const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
} 

const justChill= async function (req, res) {
    

// let output=await UserModel.find().populate("favAuthor");
let ans=await UserModel.find().populate("favAuthor").populate("publisherInfo").sort({firstName:1})
// let ans=await UserModel.find().sort({firstName:1})
res.send(ans) 
}
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.justChill= justChill
