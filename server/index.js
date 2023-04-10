const express = require('express')
const morgan = require('morgan')

const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

//router

const Product_Router = require('./routers/product.router')

app.use('/', Product_Router)

const start = async () => {
	try {
		app.listen(8080)
		await mongoose.connect(
			'mongodb+srv://admin:admin@cluster0.kco23ib.mongodb.net/?retryWrites=true&w=majority'
		)
		console.log(`Server run 8080`)
	} catch (err) {
		console.error(`Error on server startup: ${err.message}`)
	}
}

start()
