const Settlement = require('../models/settlements')


class settlementController{
    static async reqLiquida(req,res){
        const settlement=new Settlement(req.body)
        
       try{
            settlement.save();
            res.status(201).json({settlement});
        }catch(error){
            res.status(500).json(error)
        }

        
        
    }
}
module.exports=settlementController