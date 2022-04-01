const mongoose=require('mongoose')

const base=mongoose.Schema({
    sellerId:{type:String,require:true},
    settlementId:{type:String,require:true},
    amount:{type:Number,require:true},
    taxValue:{type:Number,require:true},
    bankCode:{type:Number,require:true},
    bankAccount:{type:Number,require:true}
})
module.exports=mongoose.model('base',base)