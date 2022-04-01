const router=require('express').Router()
const transactionController = require('../controller/transactionController');
const settlementController=require('../controller/settlementController')
const sellerSettlementController=require('../controller/sellerSettlementController')

router.post('/dummy-data',transactionController.createDummyData)
router.post('/',settlementController.reqLiquida)
router.get('/',transactionController.getTansaction)
router.post('/gravar',sellerSettlementController.recSeller)

module.exports=router;