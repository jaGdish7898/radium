const Mongoose = require("mongoose");
const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");


let addThisBook=async function(req,res){
    let newData=req.body;
    let savedData=await bookModel.create(newData);
    res.send(`your saved data is:${savedData}`)

}



// solution 1: to get chetan bhagat books only
let getChetanBhagatBooks= async function (req, res) {
    let bhagatDetail= await authorModel.find({author_name:"Chetan Bhagat"})

    // [{
        // author_id:1,
        // author_name:"Chetan Bhagat",
        // age:25,
        // address:"New delhi"
    // }
    let ans1=await bookModel.find({author_id:bhagatDetail[0].author_id})
    res.send({msg: ans1})
}








let updatePrice=async function(req,res){
    //task 1:finding name of author of book two states
    
    let ans=await bookModel.find({name:"Two states"});//ans={two states book detail,with user_id=1, now we will find author with samw id will be author of the book two states}
    let ans1=ans[0].author_id;   // ans=1
    let ans2= await authorModel.find({author_id:ans1});  //ans2={detail of author with id =1,we need his name}
    let ans3=ans2[0].author_name;//ans3="chetan bhagat"==>author of aur book

    //task2:updating the price of book two state
    await bookModel.updateMany({name:"Two states"},{price:100})
    let [{price}]=ans;
    res.send({"authorName":ans3,"updatedPrice":price})
    
}

let bookInRange=async function(req,res){
    // let ans1=await bookModel.find({"price":{$in:[50,100]}})
    let ans1=await bookModel.find({"price":{$in:[50,100]}})
    let len=ans1.length
    let array=[];    //[1,2,3,4,]
    let array1=[];
    for (let element of ans1){
        let a=element.author_id;
        let b=element.name;
        array.push(a)
        array1.push(b)
    }
    console.log(array);
    let arrayOfNames=[];
    for(let element of array){
        let name=await authorModel.find({author_id:element});
        arrayOfNames.push(name[0].author_name)

    }
    res.send({"books":array1,"authors":arrayOfNames})
    
   

}
module.exports.getChetanBhagatBooks=getChetanBhagatBooks;
module.exports.updatePrice=updatePrice;
module.exports.bookInRange=bookInRange;
module.exports.addThisBook=addThisBook;
