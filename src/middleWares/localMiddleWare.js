let mid1=function (req,res,next){
    let present=req.headers.isfreeapp
    if(present){
        // res.send("present")
        next();
    }else{
        res.send("mandetary header is not present")
    }
}

let mid2=function (req,res,next){
    let present=req.headers.isfreeapp
    if(present){
        next();
    }else{
        res.send("mandetary header is not present")
    }
}

module.exports.mid1=mid1
module.exports.mid2=mid2