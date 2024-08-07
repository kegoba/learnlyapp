const ProductModel = require('../models/productModel');
const path = require('path');

class ProductService {
static async createProduct(data, file) {
    if (file && file.path) {
      const imagePath = path.join('/uploads/', file.filename);
      data.imageURL = imagePath;
      const product = new ProductModel(data);
      return await product.save();
    } else {
      console.error('File or file path is undefined');
      return "No data";
    }
  }
  static async getProductById(id) {
    return await ProductModel.findById(id).populate('createdBy', 'username email');
  }

  static async updateProduct(id, data, file) {
    if (file) {
      const imagePath = path.join('/uploads/', file.filename);
      data.imageURL = imagePath;
    }
    return await ProductModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteProduct(id) {
    return await ProductModel.findByIdAndDelete(id);
  }
  static async getAllProducts(page = 1, limit = 10) {
    try {
      const skip = (page - 1) * limit;
      const products = await ProductModel.find().skip(skip).limit(limit);
      const totalProducts = await ProductModel.countDocuments();
      const totalPages = Math.ceil(totalProducts / limit);

      return {
        products,
        totalPages,
        currentPage: page,
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
}

module.exports = ProductService;