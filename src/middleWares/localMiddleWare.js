const jwt=require("jsonwebtoken")
let tokenCheaker=async function(req,res,next){
    let token=req.headers["x-auth-token"]
    if(token){
        // res.send({token:token})
        const validToken=await jwt.verify(token,"radium")
        // res.send(validToken)
        if(validToken){
            
            req.validToken=validToken
            next();
        }else{
            res.send("invalid Token")
        }

    }else{
        res.send("mandetory header is not present")
    }
    
    
}
module.exports.tokenCheaker=tokenCheaker