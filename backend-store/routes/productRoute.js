const route = require('express').Router()
const multer = require('multer');
const {checkAuthentication} = require('../middlewares/auth');
const Product = require( "../controllers/productcontroller")

const upload = multer({ dest: 'uploads/' })




route.post('/create', checkAuthentication,upload.single('file'), Product.createProduct)
route.put('/update',  checkAuthentication,Product.updateProduct)
route.delete('/delete', checkAuthentication, Product.deleteProduct)
route.get('/findall'     ,Product.getAllProducts)
route.get('/findone',  checkAuthentication, Product.getProductById)


module.exports = route





 
















module.exports = route