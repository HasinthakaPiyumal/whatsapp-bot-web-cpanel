import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import requests from "../../util/requests";
import alertRequest from "../../services/alertRequest";
import {
	Button,
	Divider,
	Flex,
	HStack,
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useDisclosure,
} from "@chakra-ui/react";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import AlertBox from "../../components/AlertBox";
import { FaTimes } from "react-icons/fa";

function extractNumber(text) {
	const regex = /\d+/;
	const match = text.match(regex);
	if (match) {
		return match[0];
	} else {
		return null;
	}
}
function splitArray(arr) {
	const chunkSize = 10; // set the size of the subarrays
	const nestedArr = arr.reduce((acc, curr, index) => {
		const chunkIndex = Math.floor(index / chunkSize); // calculate the index of the subarray
		if (!acc[chunkIndex]) {
			acc[chunkIndex] = []; // create a new subarray if it doesn't exist yet
		}
		acc[chunkIndex].push(curr); // add the current element to the current subarray
		return acc;
	}, []);

	return nestedArr;
}
const FormView = (prop) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { row, markAsRead } = prop;
	return (
		<>
			<Button onClick={onOpen} size="sm">
				View
			</Button>
			<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Submitted data</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text fontWeight="bold" mb="1rem">
							Mobile number - {extractNumber(row.whatsapp_id)}
						</Text>
						<Divider my="10px" />
						<pre>{row.message}</pre>
						<Divider my="10px" />
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={onClose}
							size="sm"
						>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

const UserSubmission = () => {
	const [table, setTable] = useState([]);
	const [number, setNumber] = useState();
	const [currentPageIndex, setCurrentPageIndex] = useState(0);
	const [staticTable, setStaticTable] = useState([]);
	async function getTable() {
		const data = await requests.post("/form/list", {}, { state: 0 });
		setTable(data.data);
		setStaticTable(data.data);
	}
	useEffect(() => {
		getTable();
	}, []);

	function searchTable() {
		return staticTable.filter(
			(item) =>
				item.whatsapp_id.includes(number) ||
				item.title_1.toLowerCase().includes(number)
		);
	}
	useEffect(() => {
		setTable(searchTable());
	}, [number]);
	function markAsRead(id) {
		alertRequest.post("/form/mark", { id: id }, getTable);
	}
	function remove(id) {
		alertRequest.post("/form/remove", { id: id }, getTable);
	}
	return (
		<Container>
			<FormInput
				label="Find Submissions by Number or Course"
				placeholder="search"
				onChange={(e) => {
					setNumber(e.target.value);
				}}
				value={number}
				type="text"
			/>
			<TableContainer
				color="white"
				border="1px solid #2A2D3A"
				borderRadius="4px"
				mt={2}
			>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th
								color="#6c7293"
								fontWeight="bold"
								fontSize="14px"
								borderBottomColor="#2A2D3A"
								width="10px"
								borderRight="1px solid #2A2D3A"
							>
								#
							</Th>
							<Th
								color="#6c7293"
								fontWeight="bold"
								fontSize="14px"
								borderBottomColor="#2A2D3A"
							>
								Number
							</Th>
							<Th
								color="#6c7293"
								fontWeight="bold"
								fontSize="14px"
								borderBottomColor="#2A2D3A"
							>
								Course
							</Th>
							<Th
								color="#6c7293"
								fontWeight="bold"
								fontSize="14px"
								borderBottomColor="#2A2D3A"
							>
								Data
							</Th>
							<Th
								color="#6c7293"
								fontWeight="bold"
								fontSize="14px"
								borderBottomColor="#2A2D3A"
							>
								Remove
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{splitArray(table)[currentPageIndex] &&
							splitArray(table)[currentPageIndex].map(
								(row, id) => (
									<Tr>
										<Td
											py="10px"
											color="#6c7293"
											borderBottomColor="#2A2D3A"
											borderRight="1px solid #2A2D3A"
											width="10px"
										>
											{id +
												1 +
												(currentPageIndex || 0) * 10}
										</Td>

										<Td
											py="10px"
											color="#6c7293"
											borderBottomColor="#2A2D3A"
											borderRight="1px solid #2A2D3A"
										>
											{extractNumber(row.whatsapp_id)}
										</Td>
										<Td
											py="10px"
											color="#6c7293"
											borderBottomColor="#2A2D3A"
											borderRight="1px solid #2A2D3A"
										>
											{row.title_1}
										</Td>
										<Td
											py="10px"
											color="#6c7293"
											borderBottomColor="#2A2D3A"
											borderRight="1px solid #2A2D3A"
											width="10px"
										>
											<FormView
												markAsRead={markAsRead}
												row={row}
											/>
										</Td>

										<Td
											py="10px"
											color="#6c7293"
											borderBottomColor="#2A2D3A"
											borderRight="1px solid #2A2D3A"
											width="10px"
										>
											<AlertBox
												title="Delete this Form"
												description="Do you want to delete this form? This action is irreversible."
												onSuccess={() => {
													remove(row.id);
												}}
											>
												<Flex
													width="full"
													justifyContent="center"
												>
													<IconButton
														size="sm"
														aria-label="Remove"
														icon={<FaTimes />}
													/>
												</Flex>
											</AlertBox>
										</Td>
									</Tr>
								)
							)}
					</Tbody>
				</Table>
			</TableContainer>
			<HStack spacing={2} mt={2}>
				<Button
					leftIcon={<ChevronLeftIcon />}
					borderRadius="4px"
					size="sm"
					onClick={() => {
						setCurrentPageIndex(
							currentPageIndex > 0
								? currentPageIndex - 1
								: currentPageIndex
						);
					}}
				>
					Prev
				</Button>
				{splitArray(table).map((item, index) => (
					<Button
						borderRadius="4px"
						size="sm"
						key={index}
						onClick={() => setCurrentPageIndex(index)}
						variant={
							index === currentPageIndex ? "solid" : "outline"
						}
					>
						{index + 1}
					</Button>
				))}
				<Button
					size="sm"
					borderRadius="4px"
					rightIcon={<ChevronRightIcon />}
					onClick={() => {
						setCurrentPageIndex(
							currentPageIndex < splitArray(table).length - 1
								? currentPageIndex + 1
								: currentPageIndex
						);
					}}
				>
					Next
				</Button>
			</HStack>
		</Container>
	);
};

export default UserSubmission;
