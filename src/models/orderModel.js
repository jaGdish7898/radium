const mongoose = require('mongoose')
let ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: ObjectId,
    productId: ObjectId,
    amount: Number,
    isFreeAppUser:Boolean
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)