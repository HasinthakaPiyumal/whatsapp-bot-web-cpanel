import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const AlertBox = (prop) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();
	function onSuccess() {
		if (prop.onSuccess) {
			prop.onSuccess();
		}
		onClose();
	}
	return (
		<>
			<Button sx={prop.button.sx} onClick={onOpen}>
				{prop.button.body}
			</Button>
			<AlertDialog
				motionPreset="slideInBottom"
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				isOpen={isOpen}
				isCentered
			>
				<AlertDialogOverlay />

				<AlertDialogContent
					borderRadius="4px"
					bg="brand.800"
					color="white"
				>
					<AlertDialogHeader>{prop.title}?</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>{prop.description}</AlertDialogBody>
					<AlertDialogFooter>
						<Button
							h={35}
							borderRadius="4px"
							_hover={{ bg: "gray.600" }}
							bg="gray.700"
							ref={cancelRef}
							onClick={onClose}
						>
							No
						</Button>
						<Button
							h={35}
							borderRadius="4px"
							colorScheme="red"
							ml={3}
							onClick={onSuccess}
						>
							Yes
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
};

export default AlertBox;
