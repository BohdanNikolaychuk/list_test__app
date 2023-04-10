import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from '@chakra-ui/react'
import { FC } from 'react'

interface PropsAlert {
	isOpen: boolean

	onClose: () => void
	deleteProduct: () => void
}
export const Alert: FC<PropsAlert> = ({
	isOpen,

	onClose,
	deleteProduct,
}) => {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Remove product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text> Are you sure? You can't undo this action afterwards.</Text>
					</ModalBody>

					<ModalFooter>
						<Button
							border='1px solid #333333'
							variant='secondary'
							mr={3}
							onClick={onClose}
						>
							Close
						</Button>
						<Button onClick={() => deleteProduct()} variant='primary'>
							Remove
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
