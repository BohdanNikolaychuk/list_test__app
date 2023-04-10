import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { ProductReducer } from './slices/product.slice'

const rootReducer = combineReducers({
	product: ProductReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
