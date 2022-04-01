const router=require('express').Router()
const sellerController=require('../controllers/sellerController')





router.post('/',sellerController.createSeller);
router.get('/:id',sellerController.getById);
router.get('/',sellerController.getSellerPage);
router.patch('/:id',sellerController.updateSeller);
router.post('/dummy-data',sellerController.createDummyData);





module.exports=router