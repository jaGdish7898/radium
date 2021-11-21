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
 //1)populating only favAuthor
// let output=await UserModel.find().populate("favAuthor");
//2) populating favAuthor and publisherInfo
let ans=await UserModel.find().populate("favAuthor").populate("publisherInfo").sort({firstName:1})
// 3)how to use select with the populated info:
// let ans=await UserModel.find().populate("favAuthor",{firstName:1,lastName:1,_id:0}).populate("publisherInfo",{firstName:1,age:1,_id:0})
res.send(ans) 
}
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.justChill= justChill
