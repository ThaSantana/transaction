const sellerSettlement=require('../models/sellerSettlements')

class sellerSettlementController{
    static async recSeller(req,res){
        
        const SellerSettlement= new sellerSettlement(req.body)
        try{
            SellerSettlement.save()
            res.status(201).json({SellerSettlement});

        }catch(error){
            res.status(500).json(error)
        }
        
}
    
    
}
module.exports=sellerSettlementController