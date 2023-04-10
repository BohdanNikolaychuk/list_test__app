import { createSelector } from '@reduxjs/toolkit'
import { Product } from '../../@types/product.type'
import { RootStore } from '../types'

const selectProductData = (state: RootStore) => state.product

export const selectedProductByID = (id: string | undefined) => {
	return createSelector(selectProductData, state =>
		state.products.find((sneakers: Product) => sneakers._id === id)
	)
}
