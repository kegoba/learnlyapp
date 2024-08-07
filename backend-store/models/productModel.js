const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageURL: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', required: true },
}, { timestamps: true });

// Create and export the model
const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel
