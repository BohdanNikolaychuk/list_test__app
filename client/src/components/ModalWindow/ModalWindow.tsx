import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useToast,
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import { FetchCreateProduct } from '../../store/asyncAction/product.action'
import { useAppDispatch } from '../../store/hooks/redux.hook'

type Props = {
	isOpen: boolean
	onClose: () => void
}

const clearData = {
	name: '',
	imageUrl: '',
	count: 0,
	size: {
		width: 0,
		height: 0,
	},
	weight: '',
}

export const ModalWindow: FC<Props> = ({ isOpen, onClose }) => {
	const [data, setData] = useState(clearData)

	const toast = useToast({
		position: 'top',
	})
	const dispatch = useAppDispatch()
	const createNewProduct = async () => {
		if (
			!data.name ||
			!data.count ||
			!data.imageUrl ||
			!data.size.height ||
			!data.size.width ||
			!data.weight
		) {
			toast({
				description: 'Empty field',
				status: 'error',
				duration: 4000,
				isClosable: true,
			})
		} else {
			await dispatch(FetchCreateProduct(data))
				.unwrap()
				.then(product => {
					toast({
						description: 'You created your product',
						status: 'success',
						duration: 4000,
						isClosable: true,
					})
					onClose()
					setData(clearData)
				})
				.catch(error => {
					toast({
						description: 'Wow.... problem with request',
						status: 'error',
						duration: 4000,
						isClosable: true,
					})
				})
		}
	}

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create your product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl id='name'>
							<FormLabel>Product Name</FormLabel>
							<Input
								variant='primary'
								placeholder='Product name'
								value={data.name}
								onChange={e =>
									setData(prev => ({
										...prev,
										name: e.target.value,
									}))
								}
								type='text'
							/>
						</FormControl>
						<FormControl id='image'>
							<FormLabel>Product image</FormLabel>
							<Input
								variant='primary'
								placeholder='Product image'
								type='text'
								value={data.imageUrl}
								onChange={e =>
									setData(prev => ({
										...prev,
										imageUrl: e.target.value,
									}))
								}
							/>
						</FormControl>
						<FormControl id='count'>
							<FormLabel>Product count</FormLabel>
							<Input
								variant='primary'
								placeholder='Product count'
								type='number'
								value={data.count}
								onChange={e =>
									setData(prev => ({
										...prev,
										count: e.target.valueAsNumber,
									}))
								}
							/>
						</FormControl>
						<FormControl id='size'>
							<FormLabel>Product size</FormLabel>
							<Flex>
								<Text display='flex' alignItems='center'>
									width
								</Text>
								<Input
									variant='primary'
									placeholder='Product width'
									type='number'
									value={data.size.width}
									onChange={e =>
										setData(prev => ({
											...prev,
											size: {
												...prev.size,
												width: e.target.valueAsNumber,
											},
										}))
									}
									m={2}
								/>
								<Text display='flex' alignItems='center'>
									height
								</Text>
								<Input
									m={2}
									variant='primary'
									placeholder='Product height'
									type='number'
									value={data.size.height}
									onChange={e =>
										setData(prev => ({
											...prev,
											size: {
												...prev.size,
												height: e.target.valueAsNumber,
											},
										}))
									}
								/>
							</Flex>
						</FormControl>
						<FormControl id='weight'>
							<FormLabel>Product weight</FormLabel>
							<Input
								variant='primary'
								value={data.weight}
								placeholder='Product weight'
								type='string'
								onChange={e =>
									setData(prev => ({
										...prev,
										weight: e.target.value,
									}))
								}
							/>
						</FormControl>
					</ModalBody>
					<ModalFooter display='flex' justifyContent='space-around'>
						<Button variant='primary' onClick={() => createNewProduct()}>
							Create
						</Button>
						<Button variant='secondary' onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
