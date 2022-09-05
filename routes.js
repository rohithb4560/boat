const router = require("express").Router();

const controller  = require('./controller')

router.post('/allProducts',controller.getAllProducts)
router.post('/createProduct',controller.createProduct)
module.exports = router;
