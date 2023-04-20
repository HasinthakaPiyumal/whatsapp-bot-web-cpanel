import React, { useEffect, useState } from "react";
import Container from "../../components/Container";

import requests from "../../util/requests";
import {
	Button,
	Flex,
	HStack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import FormInput from "../../components/FormInput";

const countries = ["Sri lanka", "India", "bangladesh", "singapore"];
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
const List = () => {
	const [table, setTable] = useState([]);
	const [currentPageIndex, setCurrentPageIndex] = useState(0);
	const [search, setSearch] = useState("");
	const [tempTable, setTempTable] = useState([]);

	async function getTable() {
		const data = await requests.get("/user");
		setTable(data.data);
		setTempTable(data.data);
	}
	useEffect(() => {
		getTable();
	}, []);
	useEffect(() => {
		setTable(tempTable.filter((item) => item.whatsapp_id.includes(search)));
	}, [search]);

	return (
		<Container>
            <Flex alignItems="start">
				<FormInput
					placeholder="Search Number"
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					value={search}
					type="number"
				/>
			</Flex>
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
								Country
							</Th>
							<Th
								color="#6c7293"
								fontWeight="bold"
								fontSize="14px"
								borderBottomColor="#2A2D3A"
							>
								Last Active Time
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{splitArray(table)[currentPageIndex] &&
							splitArray(table)[currentPageIndex].map(
								(row, id) => {
									const date = new Date(
										parseFloat(row.last_active_time)
									);
									return (
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
													(currentPageIndex || 0) *
														10}
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
												{countries[
													parseInt(row.country) - 1
												] || "Not Selected"}
											</Td>
											<Td
												py="10px"
												color="#6c7293"
												borderBottomColor="#2A2D3A"
												borderRight="1px solid #2A2D3A"
												width="10px"
											>
												{date.toLocaleString()}
											</Td>
										</Tr>
									);
								}
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

export default List;
