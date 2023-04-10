import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from '../../@types/product.type'
import {
	FetchAllProduct,
	FetchRemoveProduct,
} from '../asyncAction/product.action'
import { ProductState } from '../types'

const initialState: ProductState = {
	products: [],
	status: 'init',
}

const ProductSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct(state, action: PayloadAction<Product>) {
			state.products.push(action.payload)
		},
		removeProduct(state, action) {
			state.products = state.products.filter(
				product => product._id !== action.payload
			)
		},
		editProduct(state, action) {
			const index = state.products.findIndex(
				element => element._id === action.payload._id
			)
			state.products[index] = action.payload
		},

		sortingProduct(state, action) {
			if (action.payload === 'name') {
				state.products = state.products.sort((a, b) => {
					if (a.name < b.name) {
						return -1
					}
					if (a.name > b.name) {
						return 1
					}
					return 0
				})
			}
			if (action.payload === 'count') {
				state.products = state.products.sort((a, b) => {
					return b.count - a.count
				})
			}
		},
		addComments(state, action) {
			const findProduct = state.products.find(
				product => product._id === action.payload.productId
			)
			findProduct?.comments.push(action.payload)
		},
		deleteComments(state, action) {
			const findProduct = state.products.find(
				product => product._id === action.payload.productId
			)

			findProduct?.comments.splice(
				findProduct?.comments.findIndex(
					element => element.id === action.payload._id
				),
				1
			)
		},
	},

	extraReducers: builder => {
		builder

			// fetch all products

			.addCase(FetchAllProduct.pending, state => {
				state.status = 'loading'
			})
			.addCase(FetchAllProduct.fulfilled, (state, action) => {
				state.status = 'success'
				state.products = action.payload?.data
			})
			.addCase(FetchAllProduct.rejected, state => {
				state.status = 'error'
			})

			// delete product

			.addCase(FetchRemoveProduct.pending, state => {
				state.status = 'loading'
			})
			.addCase(FetchRemoveProduct.fulfilled, (state, action) => {
				state.status = 'success'
			})
			.addCase(FetchRemoveProduct.rejected, state => {
				state.status = 'error'
			})
	},
})

export const { reducer: ProductReducer, actions: ProductAction } = ProductSlice
