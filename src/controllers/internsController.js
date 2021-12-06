//const mongoose = require('mongoose')
//const ObjectId = mongoose.Types.ObjectId
const collegeModel = require('../models/collegeModel')
const internModel = require('../models/internsModel')


const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}



const createInterns = async function (req, res) {
    try{
        if (!isValidRequestBody(req.body)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide collage details' })
        
        }
        let collegeDetail=await collegeModel.findOne({name:req.body.collegeName});
            let {_id}=collegeDetail;
            req.body["collegeId"]=_id
            let savedIntern= await internModel.create(req.body)
            res.status(200).send({ status: true, data: savedIntern})
            }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: err })
    }
   }




module.exports = { createInterns }

