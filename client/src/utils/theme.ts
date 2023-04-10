import { extendTheme } from '@chakra-ui/react'
export const theme = extendTheme({
	components: {
		Button: {
			variants: {
				primary: {
					rounded: 'none',
					bg: '#333333',
					color: 'white',
					border: '2px',
					borderColor: '#333333',
					_hover: {
						background: 'inherit',
						color: '#333333',
						border: '2px',
						borderColor: '#333333',
					},
					textTransform: 'uppercase',
				},
				secondary: {
					rounded: 'none',
					bg: 'inherit',
					border: '2px',
					borderColor: '#333333',
					color: '#333333',
					_hover: { background: '#333333', color: 'white' },
					textTransform: 'uppercase',
				},
			},
		},
		Select: {
			variants: {
				primary: {
					field: {
						rounded: 'none',
						bg: '#f7f7f7',
					},
				},
			},
		},
		Input: {
			variants: {
				primary: {
					field: {
						rounded: 'none',
						bg: '#f7f7f7',
					},
				},
			},
		},
	},
})
