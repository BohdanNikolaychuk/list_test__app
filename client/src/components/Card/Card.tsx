import { Box, Center, Heading, Image, Stack } from '@chakra-ui/react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Product } from '../../@types/product.type'
import { routes } from '../../router/routes'

export const Card: FC<Product> = props => {
	const navigate = useNavigate()

	const navigateToProduct = () => {
		navigate(routes.PRODUCTBYID(props._id))
	}

	return (
		<Center py={12}>
			<Box
				cursor='pointer'
				onClick={navigateToProduct}
				role={'group'}
				p={6}
				boxShadow={'2xl'}
				rounded={'lg'}
				pos={'relative'}
				zIndex={1}
				sx={{ maxWidth: 400, height: 400 }}
			>
				<Image
					rounded={'lg'}
					height={230}
					width={282}
					objectFit={'cover'}
					src={props.imageUrl}
				/>

				<Stack>
					<Heading py={2} fontSize={20} color={'#696969'} fontWeight={700}>
						{props.name}
					</Heading>
					<Heading fontSize={17} color={'#696969'} fontWeight={500}>
						count: {props.count}
					</Heading>
					<Heading fontSize={17} color={'#696969'} fontWeight={500}>
						width: {props.size.width} x height: {props.size.height}
					</Heading>
					<Heading fontSize={17} color={'#696969'} fontWeight={500}>
						weight: {props.weight}
					</Heading>
				</Stack>
			</Box>
		</Center>
	)
}
