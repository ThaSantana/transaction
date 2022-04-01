const Seller=require('../models/sellerModels')
const yup = require('yup')



class sellerController{


    static async createSeller(req, res)
    {
        //validação 
        
        let schema = yup.object().shape({
           
            seller_id: yup.number().required(),
            name: yup.string().email().required(),
            cnpj: yup.string().required(),
            bankCode: yup.number().required(),
            bankAccount: yup.number().required(),
            notes: yup.string()
        })
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
              error: true,
              message: "Dados inválidos"
            })
        }
        //verificar se cnpj já existe
        let sellerExist = await Seller.findOne({cnpj:req.body.cnpj})
      if(sellerExist){
        return res.status(400).json({
          error:true,
          message:'Esse vendedor já existe no sistema'
        })
      }
        
        const seller=new Seller(req.body)
        try{
            seller.save();
            res.status(201).json({seller});
        }catch(error){
            res.status(500).json(error)
        }
        
    }
    static async getById(req,res)
    {
        const id = req.params.id;
        const seller = await Seller.findOne({ seller_id : id });
        res.status(200).json({seller});
    }
    static async updateSeller(req, res)
    {
        const atual = req.body; 
        const id = req.params.id;
        
        try {
            await Seller.updateOne({ seller_id : id }, { $set: atual }); 
            res.status(200).json({message:"OK"});
        } catch (err) {
            console.log(`Error: ${err}`);
            res.status(500).json({ message: err });
        }
        
    }
        static async getSellerPage(req,res)
        {
            const {page,pageSize,...filter}=req.query;
            const NumPage=(page-1)*pageSize
            const result = await Seller.find(filter).skip(NumPage).limit(pageSize) 
            const total=result.length
            let totalPg=Math.ceil(await Seller.countDocuments()/pageSize)
            totalPg=totalPg>0 ? totalPg:1
            res.status(200).json({page,pageSize,total,totalPg,result})

        }
        static async createDummyData(req,res){
            
            try{
                for(let i=0;i<10;i++){
                    const seller=new Seller({
                        seller_id:i+1,
                        name:"Mc Donalds" +i,
                        cnpj:"12345678901",
                        bankCode:33,
                        bankAccount:1000,
                        notes:""
                    })                 
                seller.save();
                
                        
                    
            }
              res.status(201).json();
             }catch(error){
                res.status(500).json({error})
        }
    }   



}
module.exports=sellerController
