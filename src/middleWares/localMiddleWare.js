const jwt=require("jsonwebtoken")
let tokenCheaker=async function(req,res,next){
    let token=req.headers["x-auth-token"]
    if(token){
        
        const validToken=await jwt.verify(token,"radium")
        //in previous question we did upto this step of validaiting the token in miidleware
        //but here in updated que:we need to chech the id provided is match with token id or not in same middleware.     and all other thing is same to do ,but will do that in cantroller function.
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