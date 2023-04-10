import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { FetchAllProduct } from './store/asyncAction/product.action'
import { useAppDispatch } from './store/hooks/redux.hook'

function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(FetchAllProduct())
	}, [])

	return <RouterProvider router={router}></RouterProvider>
}

export default App
