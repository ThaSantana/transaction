const mongoose=require('mongoose')
const uuidv4=require('uuidv4')

const data=mongoose.Schema({
    settlementId:{type:String,require:true},
    settlementDate:{type:Date,require:true},
    startDate:{type:Date,require:true},
    endDate:{type:Date,require:true},
    sellersCount:{type:Number,require:true},
    transactionsCount:{type:Number,require:true},
    elapsedMiliseconds: {type:Number,require:true}
},
{
    timestamps:true  
})

module.exports=mongoose.model('data',data)