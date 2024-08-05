const route = require('express').Router()
import User from "../controllers/userController"






route.post('/register',  User.register)


route.post('/login', User.login) 




 
















module.exports = route