import {
	Button,
	Container,
	Flex,
	Select,
	SimpleGrid,
	useDisclosure,
} from '@chakra-ui/react'
import { Card, ModalWindow } from '../../components'
import { useAppSelector } from '../../store/hooks/redux.hook'

export const Home = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const products = useAppSelector(state => state.product.products)

	return (
		<>
			<Container maxW='1200px'>
				<Flex justifyContent='center' p={2}>
					<Button onClick={onOpen} mr='2' variant='primary'>
						Add new product
					</Button>
					<Select w='20%' variant='primary'>
						<option>Sort by Name</option>
						<option>Sort By Count</option>
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
