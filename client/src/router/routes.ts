export const routes = {
	main: '/',
	PRODUCTBYID: (id?: string) => (id ? `/product/${id}` : '/product/:id'),
}
