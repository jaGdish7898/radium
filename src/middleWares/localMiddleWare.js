const jwt=require("jsonwebtoken")
let tokenCheaker=async function(req,res,next){
    //cheaking wheathe header is give with token value or not
    let token=req.headers["x-auth-token"]
    if(token){
        //now header is present and we have value of token in variable "token"
        //now cheaking token is valid or not
        const validToken=await jwt.verify(token,"radium")
        //if token is valid then "validToken" will have object {'619d15ee0df7d8df2e77624f',and value of iat} this object will contain the _id of user for which this token was generated
        if(validToken){
            //checking that id provided in request is match with _id for which token is created...
            req.validToken=validToken
            //in this way we can send this variable called "validToken" to the next fuction where controll is going because we need this variable there..
            next();
        }else{
            res.send("invalid Token")
        }

    }else{
        res.send("mandetory header is not present")
    }
    
    
}
module.exports.tokenCheaker=tokenCheaker