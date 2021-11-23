const productModel= require("../models/productModel")

const createProduct= async function (req, res) {
    var newProduct= req.body
    let savedProduct= await productModel.create(newProduct)
    res.send({data:savedProduct })    
        
}
module.exports.createProduct=createProduct