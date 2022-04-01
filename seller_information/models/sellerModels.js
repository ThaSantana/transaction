const mongoose=require('mongoose')



const seller=mongoose.Schema({
    seller_id:{type:Number,required:true},
    name:{type:String,required:true},
    cnpj:{type:String,required:true},
    bankCode:{type:Number,required:true},
    bankAccount:{type:Number,require:true},
    notes:{type:String}
},
{
    timestamps:true  
})


module.exports=mongoose.model('seller',seller)