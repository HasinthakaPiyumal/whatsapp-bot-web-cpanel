import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import requests from "../../util/requests";
import alertRequest from "../../services/alertRequest";
import {
	Button,
	Divider,
	Flex,
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
import { CheckIcon } from "@chakra-ui/icons";

function extractNumber(text) {
	const regex = /\d+/;
	const match = text.match(regex);
	if (match) {
		return match[0];
	} else {
		return null;
	}
}

const UserSubmission = () => {
	const [table, setTable] = useState([]);
	const [number, setNumber] = useState();
	const { isOpen, onOpen, onClose } = useDisclosure();

	async function getTable() {
		const data = await requests.post("/form/list", {}, { state: 1 });
		setTable(data.data);
	}
	useEffect(() => {
		getTable();
	}, []);

	function markAsRead(id) {
		alertRequest.post("/form/mark", { id: id },getTable);
	}
	return (
		<Container>
			<FormInput
				label="Find Submissions by Number"
				placeholder="search Number"
				onChange={(e) => {
					setNumber(e.target.value);
				}}
				value={number}
				type="number"
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
								Data
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
								Remove
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{table &&
							table.map((row, id) => (
								<Tr>
									<Td
										py="10px"
										color="#6c7293"
										borderBottomColor="#2A2D3A"
										borderRight="1px solid #2A2D3A"
										width="10px"
									>
										{id + 1}
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
										width="10px"
									>
										<Button onClick={onOpen} size="sm">
											View
										</Button>
										<Modal
											blockScrollOnMount={false}
											isOpen={isOpen}
											onClose={onClose}
										>
											<ModalOverlay />
											<ModalContent>
												<ModalHeader>
													Submitted data
												</ModalHeader>
												<ModalCloseButton />
												<ModalBody>
													<Text
														fontWeight="bold"
														mb="1rem"
													>
														Mobile number -{" "}
														{extractNumber(
															row.whatsapp_id
														)}
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
													<Button
														leftIcon={<CheckIcon />}
														variant="ghost"
														size="sm"
														onClick={async () => {
															await markAsRead(
																row.id
															);
															onClose();
														}}
													>
														Mark As Read
													</Button>
												</ModalFooter>
											</ModalContent>
										</Modal>
									</Td>
									<Td
										py="10px"
										color="#6c7293"
										borderBottomColor="#2A2D3A"
										borderRight="1px solid #2A2D3A"
										width="10px"
									>
										<Flex
											width="full"
											justifyContent="center"
										></Flex>
									</Td>
								</Tr>
							))}
					</Tbody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default UserSubmission;
