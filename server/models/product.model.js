const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	count: {
		type: Number,
		required: true,
	},
	size: {
		width: {
			type: Number,
			required: true,
		},
		height: {
			type: Number,
			required: true,
		},
	},
	weight: {
		type: String,
		required: true,
	},
	comments: [
		{
			type: String,
		},
	],
})

const ProductModel = mongoose.model('products', ProductSchema)

module.exports = { ProductModel }
