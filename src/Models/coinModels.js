
const mongoose=require('mongoose')

const CoinSchema=new mongoose.Schema({
    symbol:{
        type:String,
        unique:false
    },
    name:{
        type:String,
        unique:false
    },
    marketCapUsd:{
        type:String 
       
    },
    priceUsd:{
        type:String
        
    }
}, {timestamps: true} )

module.exports=mongoose.model('Bitcoin',CoinSchema)