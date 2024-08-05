const route = require('express').Router()
const {checkAuthentication} = require('../middlewares/auth');
import Product from "../controllers/productcontroller"






route.post('/create', checkAuthentication, Product.createProduct)
route.put('/update',  checkAuthentication,Product.updateProduct)
route.delete('/delete', checkAuthentication, Product.deleteProduct)
route.get('/findall',  checkAuthentication,Product.getAllProducts)
route.get('/findone',  checkAuthentication, Product.getProductById)


module.exports = route





 
















module.exports = route