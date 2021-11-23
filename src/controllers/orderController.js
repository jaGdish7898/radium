const orderModel= require("../models/orderModel")
const productModel= require("../models/productModel")
const userModel= require("../models/userModel.js")

const addNewOrder= async function (req, res) {
    let isFreeOrNot=req.headers.isfreeapp;
    //k=datail coming in body
    let k=req.body
    let productDetail=await productModel.findById(k.productId)
    let userDetail=await userModel.findById(k.userId)
    if (userDetail && productDetail){
        if(isFreeOrNot==="true"){//imp point
            k.amount=0;
            k.isFreeAppUser=true
            let ans=await orderModel.create(k)
            res.dend({newOrderEnetry:ans})
            
        }else{
            if(userDetail.balance>productDetail.price){
                k.amount=productDetail.price
                k.isFreeAppUser=false
                let remainingBalance=userDetail.balance-productDetail.price
                // let remainingBalance=
                await userModel.findOneAndUpdate({_id:k.userId},{balance:remainingBalance})
                let ans=await orderModel.create(k)
                res.send({newOrderEnetry:ans})
            }
            else{
                res.send("you have insufficient balance")
            }
        }

    }else if(userDetail && !(productDetail)){
        res.send("productId is not valid")
    }else if(!(userDetail) && productDetail){
        res.send("userId is not valid")
    }else{
        res.send(`Both ("userId" & "productId") are not valid`)

    }
    
}
module.exports.addNewOrder=addNewOrder;