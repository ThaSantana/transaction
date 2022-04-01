const mongoose = require('mongoose')
const uuidv4=require('uuidv4')



const dataBase=mongoose.Schema({
    transactionId:{type:String,require:true},
    timeStamp: {type:Date,require:true},
    sellerId:{type:Number,require:true},
    settlementDate:{type:Date,require:true},
    amount:{type:Number,require:true} 
},
{
    timeStamp:true
})
module.exports=mongoose.model('dataBase',dataBase)