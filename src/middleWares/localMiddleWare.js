const jwt=require("jsonwebtoken")
let tokenCheaker=async function(req,res,next){
    let token=req.headers["x-auth-token"]
    if(token){
        
        const validToken=await jwt.verify(token,"radium")
        
        if(validToken){
            if(validToken._id==req.params.userId){
                next();
            }else{
                res.send("provided token and user id not matched")
            }
        }else{
            res.send("invalid Token")
        }

    }else{
        res.send("mandetory header is not present")
    }
    
    
}
module.exports.tokenCheaker=tokenCheaker