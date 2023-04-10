import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from '../../@types/product.type'
import { FetchAllProduct } from '../asyncAction/product.action'
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
	},
})

export const { reducer: ProductReducer, actions: ProductAction } = ProductSlice
