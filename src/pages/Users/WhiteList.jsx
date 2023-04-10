import React, { useEffect, useState } from "react";
import Container from "../../components/Container";

import requests from "../../util/requests";
import {
	Flex,
	IconButton,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import alertRequest from "../../services/alertRequest";
import { FaTimes } from "react-icons/fa";
import AlertBox from "../../components/AlertBox";
const WhiteList = () => {
	const [table, setTable] = useState([]);
	const [number, setNumber] = useState();

	async function getTable() {
		const data = await requests.post("/number/list", {}, { type: 1 });
		setTable(data.data);
	}
	useEffect(() => {
		getTable();
	}, []);

	function clear() {
		setNumber("");
		getTable();
	}
	function submit(type = 1, nb) {
		const data = { number: nb ? nb : number, type: type };
		alertRequest.post("/number/add", data, clear);
	}
	return (
		<Container>
			<Flex alignItems="end" gap={2}>
				<FormInput
					label="Add to White List"
					placeholder="Whatsapp Number"
					onChange={(e) => {
						setNumber(e.target.value);
					}}
					value={number}
					type="number"
					required
				/>
				<FormButton
					onClick={() => submit()}
					sx={{ h: "38px", w: "100px" }}
				>
					Add
				</FormButton>
			</Flex>
			<TableContainer
				color="white"
				border="1px solid #2A2D3A"
				borderRadius="4px"
				mt={5}
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
										{row.number}
									</Td>
									<Td
										py="10px"
										color="#6c7293"
										borderBottomColor="#2A2D3A"
										borderRight="1px solid #2A2D3A"
										width="10px"
									>
										<AlertBox
											title="Remove number from Whitelist"
											description="Do you want to Remove this number from whitelist? This action is irreversible."
											onSuccess={() => {
												submit(-1, row.number);
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
							))}
					</Tbody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default WhiteList;
