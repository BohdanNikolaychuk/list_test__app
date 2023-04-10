import axios from 'axios'
import { BASE_URL, actionByID } from '../utils/axios'

export const getAllProduct = () => {
	return axios.get(BASE_URL + 'product')
}

export const createNewProduct = (data: any) => {
	return axios.post(BASE_URL + 'product', data)
}

export const deleteProduct = (id: string | undefined) => {
	return axios.delete(actionByID(id))
}

export const getProductByID = (id: string) => {
	return axios.get(actionByID(id))
}
