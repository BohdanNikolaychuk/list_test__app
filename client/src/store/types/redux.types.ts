import { Product } from '../../@types/product.type'
import type { store } from '../root'

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface ProductState {
	products: Product[]
	status: 'init' | 'loading' | 'error' | 'success'
}
