const mongoose = require('mongoose');

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageURL: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

// Create and export the model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
