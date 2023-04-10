import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Stack,
	StackDivider,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

import { Alert, ModalWindowForEdit } from '../../components'
import { routes } from '../../router/routes'
import { FetchRemoveProduct } from '../../store/asyncAction/product.action'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux.hook'
import { selectedProductByID } from '../../store/selectors/product.selector'

export const Info = () => {
	const { id } = useParams()
	const modal1 = useDisclosure()
	const modal2 = useDisclosure()
	const navigate = useNavigate()

	const dispatch = useAppDispatch()
	const productById = useAppSelector(selectedProductByID(id))

	const deleteProduct = () => {
		dispatch(FetchRemoveProduct(id!))
		modal1.onClose()
		navigate(routes.main)
	}

	return (
		<Container minHeight='100vh' maxW={'1200px'}>
			<Button mt='5' mb='10' variant='primary' as={NavLink} to={routes.main}>
				Back to Main
			</Button>
			<Flex>
				<Image
					mixBlendMode='multiply'
					w='100%'
					maxW='600px'
					h='auto'
					margin={{ md: '0 auto' }}
					src={productById?.imageUrl}
				/>

				<Box mt='4'>
					<Heading color='#696969'>{productById?.name}</Heading>

					<Stack divider={<StackDivider />} spacing='4'>
						<Box>
							<Text color='#696969' textTransform='uppercase' fontWeight='500'>
								Count:{productById?.count}
							</Text>
							<Text color='#696969' textTransform='uppercase' fontWeight='500'>
								width:{productById?.size.width} x height:
								{productById?.size.height}
							</Text>

							<Text color='#696969' textTransform='uppercase' fontWeight='500'>
								Weight:{productById?.weight}g
							</Text>
						</Box>
					</Stack>
					<Button onClick={modal1.onOpen} variant='primary' mt='10' p='6'>
						<Text textTransform='uppercase'>Delete</Text>
					</Button>
					<Button onClick={modal2.onOpen} variant='primary' mt='10' p='6'>
						<Text textTransform='uppercase'>Edit</Text>
					</Button>
				</Box>
			</Flex>
			<Text color='#696969' textTransform='uppercase' fontWeight='500'>
				Comments:
			</Text>
			<Alert
				isOpen={modal1.isOpen}
				onClose={modal1.onClose}
				deleteProduct={deleteProduct}
			/>
			<ModalWindowForEdit
				isOpen={modal2.isOpen}
				onClose={modal2.onClose}
				id={productById?._id}
			/>
		</Container>
	)
}
