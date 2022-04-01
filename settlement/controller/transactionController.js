const Transactions=require('../models/transactions')
const {v4}=require('uuid')


class transactionController{
    static async createDummyData(req,res){
        console.log("AQUIII")
        console.log(v4())
        
       try{
            for(let i=0;i<100;i++){
            const transactions=new Transactions({
        
            transactionId:v4(),
            timeStamp:"2022-03-01",//date.now(),
            sellerId:i+1,
            settlementDate:"2022-03-01",
            amount: 2000
           })
        


            transactions.save();
            
        }
        res.status(201).json({message:"DEU CERTO"})
        }catch(error){
            res.status(500).json(error)
        }

    
    }
    static async getTansaction(req,res){
        
        const listTransactions = await Transactions.aggregate([ {$match:{settlementDate:Date}},

            { $group: { _id: "$sellerId",  amount: {$sum: "$amount"}  }}

        ]).sort({_id: 1});
        console.log(listTransactions)
        //const transactions=await Transactions.find({settlementDate: "2002-03-01"})
        
       /* if(!transactions){
            res.status(500).json({
                message:"Não encontrado"
            })
            return
        }*/
        //console.log(transactions)
        res.status(200).json({listTransactions})

    }
//UUID => Identificador único universal
}
module.exports=transactionController;