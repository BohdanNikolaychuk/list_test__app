export interface Product {
	_id: string
	imageUrl: string
	name: string
	count: number
	size: {
		width: number
		height: number
	}
	weight: string
	comments: Comments[]
}

export interface Comments {
	id: string
	productId: string
	description: string
}
