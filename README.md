# radium
Repository for backend cohort - Radium


# step 1
install mongoose : npm i mongoose (from parent folder)


# step 2
use MOdel to interact with DB


#step 3
break your code into correct folder structure 
const addNewOrder= async function (req, res) {
    let isFreeOrNot=req.headers.isfreeapp;
    // res.send({free:isFreeOrNot})
    //k=datail coming in body
    let k=req.body
    let productDetail=await productModel.findById(k.productId)
     let userDetail=await userModel.findById(k.userId)
    if(isFreeOrNot==="true"){//imp point
        k.amount=productDetail.price
        k.isFreeAppUser=true
        console.log(k)
        res.send(k)
        
    }else{
        if(userDetail.balance>productDetail.price){
            k.amount=productDetail.price
            k.isFreeAppUser=false
            let remainingBalance=userDetail.balance-productDetail.price
            // let remainingBalance=
            await userModel.findOneAndUpdate({_id:k.userId},{balance:remainingBalance})
            res.send(k)
        }
        else{
            res.send("you have insufficient balance")
        }
}
}
module.exports.addNewOrder=addNewOrder;