const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/product.controller')

router.get('/product', ProductController.getAllProduct)
router.get('/product/:id', ProductController.getProductById)
router.post('/product', ProductController.createNewProduct)
router.delete('/product/:id', ProductController.deleteProduct)
router.patch('/product/:id', ProductController.editProduct)
module.exports = router
