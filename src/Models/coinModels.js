
const mongoose=require('mongoose')

const CoinSchema=new mongoose.Schema({
    symbol:{
        type:String,
        unique:true
    },
    name:{
        type:String,
        unique:true
    },
    arketCapUsd:{
        type:String
       
    },
    priceUsd:{
        type:String
        
    }
}, {timestamps: true} )

module.exports=mongoose.model('Coin',CoinSchema)