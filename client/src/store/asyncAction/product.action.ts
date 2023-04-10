import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	createNewProduct,
	deleteProduct,
	editProduct,
	getAllProduct,
} from '../../services/product.service'
import { ProductAction } from '../slices/product.slice'

export const FetchAllProduct = createAsyncThunk(
	'product/getAllProduct',
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const res = await getAllProduct()
			return res
		} catch (error) {
			if (error) {
				return rejectWithValue(error)
			}
		}
	}
)

export const FetchCreateProduct = createAsyncThunk(
	'product/createNewProduct',
	async (data: any, { dispatch, rejectWithValue }) => {
		try {
			const res = await createNewProduct(data)
			dispatch(ProductAction.addProduct(res.data))
			return res
		} catch (error) {
			if (error) {
				return rejectWithValue(error)
			}
		}
	}
)

export const FetchRemoveProduct = createAsyncThunk(
	'product/removeProduct',
	async (id: string | undefined, { dispatch, rejectWithValue }) => {
		dispatch(ProductAction.removeProduct(id))
		const res = await deleteProduct(id)
		return res
	}
)

export interface UpdateProduct {
	_id: string
	name: string | undefined
	imageUrl: string | undefined
	count: number | undefined
	size: {
		width: number
		height: number
	}
	weight: string | undefined
}

export const FetchEditProduct = createAsyncThunk(
	'product/editProduct',
	async (data: UpdateProduct, { dispatch }) => {
		dispatch(ProductAction.editProduct(data))
		const res = await editProduct(data)

		return res
	}
)
