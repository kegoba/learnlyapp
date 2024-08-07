const ProductService= require( '../services/productService')
const upload =require( '../helpFunction/upload');

class ProductController {
  static async createProduct(req, res) {

    if (!req.user || !req.body) {
        return res.status(401).send({ message: 'Login Required' });
      }
      try {
        const data = {
          createdBy: req.user.createdBy,
          name: req.body.name,
          description: req.body.description,
          price: req.body.price
        };
    
        // Pass data and file to the service method
        const product = await ProductService.createProduct(data, req.file);
    
        // Send the created product as the response
        res.status(201).send(product);
      } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send({ message: 'Internal Server Error', error });
      }
  }
  static async getAllProducts(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const result = await ProductService.getAllProducts(page, limit);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error', error });
    }
  }

  static async getProductById(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      if (!product) {
        return res.status(404).send({ message: 'Product not found' });
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error', error });
    }
  }

  static updateProduct(req, res) {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).send({ message: err });
      }
      try {
        const product = await ProductService.updateProduct(req.params.id, req.body, req.file);
        if (!product) {
          return res.status(404).send({ message: 'Product not found' });
        }
        res.status(200).send(product);
      } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error });
      }
    });
  }

  static async deleteProduct(req, res) {
    try {
      const product = await ProductService.deleteProduct(req.params.id);
      if (!product) {
        return res.status(404).send({ message: 'Product not found' });
      }
      res.status(200).send({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error', error });
    }
  }
}

module.exports = ProductController;
