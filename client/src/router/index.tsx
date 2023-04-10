import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components'
import { Home, Info } from '../pages'
import { routes } from './routes'

export const router = createBrowserRouter([
	{
		path: routes.main,
		element: <Layout />,
		errorElement: <> HTTP Error</>,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				element: <Info />,
				path: routes.PRODUCTBYID(),
			},
		],
	},
])
