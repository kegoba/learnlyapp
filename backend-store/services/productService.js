const Product = require('../models/productModel');
const path = require('path');

class ProductService {
  static async createProduct(data, file) {
    if (file) {
      const imagePath = path.join('/uploads/', file.filename);
      data.imageURL = imagePath;
    }
    const product = new Product(data);
    return await product.save();
  }

  static async getAllProducts(page, limit) {
    const skip = (page - 1) * limit;
    const products = await Product.find().populate('createdBy', 'username email').skip(skip).limit(limit);
    const totalProducts = await Product.countDocuments();
    return { products, totalPages: Math.ceil(totalProducts / limit), currentPage: page };
  }

  static async getProductById(id) {
    return await Product.findById(id).populate('createdBy', 'username email');
  }

  static async updateProduct(id, data, file) {
    if (file) {
      const imagePath = path.join('/uploads/', file.filename);
      data.imageURL = imagePath;
    }
    return await Product.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
  }
}

module.exports = ProductService;