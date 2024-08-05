const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Response, Request} = require("express")
const UserModel = require('../models/userModel');
const {comparePassword , hashPassword} = require("../helpFunction/utils")
const { 
    emailValidation,
    passwordValidation,
    inputValidation,
  } = require("../helpFunction/validationService");
const { getSingleUser } = require('../controllers/userController');



 class User {

  static async login  (email, password)  {
    if (!emailValidation(email) || !passwordValidation(password)) {
      throw new Error('Invalid Input');
    }

    const userInfo = await UserModel.findOne({ email });
    if (!userInfo) {
      throw new Error('User Not Found');
    }
  
    const isPasswordCorrect = comparePassword(userInfo.password, password);
    if (!isPasswordCorrect) {
      throw new Error('Invalid Password or Email');
    }
    const token = jwt.sign(
      { id: userInfo._id, role: userInfo.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
  
    const data = {
      token: token,
    };
  
    return data;
  };

  static async register (data)  {
    // Validate input data
    if (!inputValidation(data.username) || 
        !emailValidation(data.email) || 
        !passwordValidation(data.password)) {
      return { success: false, message: "Invalid Input" };
    }
  
    try {
      // Check if user already exists
      const userFound = await UserModel.findOne({ email: data.email });
      if (userFound) {
        return { success: false, message: "Email Exists" };
      }
      // Hash the password
      const hashedPassword = await hashPassword(data.password)
      // Create new user
      const userInfo = new User({
        name: data.username,
        email: data.email,
        password: hashedPassword
      });
  
      // Save the user
      const info = await userInfo.save();
      // Return user information
      return { success: true, data: "User saved" };
    } catch (error) {
      // Handle any other errors
      return { success: false, message: error.message };
    }
  };

}


export default User
          


