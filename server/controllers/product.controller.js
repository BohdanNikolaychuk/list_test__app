const { ProductModel } = require('../models/product.model')

class ProductController {
	async getAllProduct(req, res, next) {
		try {
			await ProductModel.find().then(product => {
				res.send(product)
			})
		} catch (error) {
			res.send(error)
		}
	}

	async getProductById(req, res, next) {
		try {
			await ProductModel.findById({ _id: req.params.id }).then(productByID => {
				res.send(productByID)
			})
		} catch (error) {
			res.send(error)
		}
	}
	async createNewProduct(req, res, next) {
		try {
			const newProduct = new ProductModel(req.body)
			await newProduct.save().then(product => {
				res.send(product)
			})
		} catch (error) {
			res.send(error)
		}
	}

	async deleteProduct(req, res, next) {
		try {
			await ProductModel.findByIdAndDelete({ _id: req.params.id }).then(
				product => {
					res.send(product)
				}
			)
		} catch (error) {
			res.send(error)
		}
	}

	async editProduct(req, res, next) {
		try {
			await ProductModel.findOneAndUpdate(
				{ _id: req.params.id },
				{ $set: req.body }
			).then(updateProduct => {
				res.send(updateProduct)
			})
		} catch (error) {
			res.send(error)
		}
	}
}

module.exports = new ProductController()
