import {
	Button,
	Container,
	Flex,
	Select,
	SimpleGrid,
	useDisclosure,
} from '@chakra-ui/react'
import { Card, ModalWindow } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux.hook'
import { ProductAction } from '../../store/slices/product.slice'

export const Home = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const sortArray = (type: string) => {
		dispatch(ProductAction.sortingProduct(type))
	}

	const products = useAppSelector(state => state.product.products)

	const dispatch = useAppDispatch()

	return (
		<>
			<Container maxW='1200px'>
				<Flex justifyContent='center' p={2}>
					<Button onClick={onOpen} mr='2' variant='primary'>
						Add new product
					</Button>
					<Select
						onChange={e => sortArray(e.target.value)}
						w='20%'
						variant='primary'
					>
						<option value='name'>Sort by Name</option>
						<option value='count'>Sort By Count</option>
					</Select>
				</Flex>
				<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing='20px'>
					{products.map(element => (
						<Card key={element._id} {...element} />
					))}
				</SimpleGrid>
			</Container>
			<ModalWindow isOpen={isOpen} onClose={onClose} />
		</>
	)
}
