const collegeModel = require('../models/collegeModel');
//const Url = require('mongoose-type-url');
//const jwt = require('jsonwebtoken')



const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}

const createCollege = async function (req, res) {
    try{
        if (!isValidRequestBody(req.body)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide collage details' })
        
        }
    let createdCollege= await collegeModel.create(req.body)
    res.status(201).send({ status:true, msg:createdCollege})
    
} 
catch(err){
    res.status(500).send({status:false, msg:"something went wrong",err});
    console.log(err)
}
}



module.exports = { createCollege }
