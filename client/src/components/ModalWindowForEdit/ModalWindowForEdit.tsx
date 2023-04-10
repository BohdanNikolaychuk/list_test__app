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
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux.hook'
import { selectedProductByID } from '../../store/selectors/product.selector'
import { ProductAction } from '../../store/slices/product.slice'

type Props = {
	isOpen: boolean
	onClose: () => void
	id: string | undefined
}

export const ModalWindowForEdit: FC<Props> = ({ isOpen, onClose, id }) => {
	const productById = useAppSelector(selectedProductByID(id))
	const dispatch = useAppDispatch()
	const [data, setData] = useState({
		name: productById?.name,
		imageUrl: productById?.imageUrl,
		count: productById?.count,
		size: {
			width: productById?.size.width,
			height: productById?.size.height,
		},
		weight: productById?.weight,
	})

	const editProduct = () => {
		const updateProduct = {
			_id: productById?._id,
			...data,
		}
		dispatch(ProductAction.editProduct(updateProduct))
		onClose()
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
								value={data.imageUrl}
								type='text'
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
									value={data.size.width}
									placeholder='Product width'
									type='number'
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
									value={data.size.height}
									placeholder='Product height'
									type='number'
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
						<Button variant='primary' onClick={() => editProduct()}>
							Edit
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
