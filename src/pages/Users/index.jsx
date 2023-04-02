import React, { useEffect, useState } from "react";
import Container from "../../components/Container";

import requests from "../../util/requests";
import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";



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

const List = () => {
	const [table, setTable] = useState([]);

	async function getTable() {
		const data = await requests.get("/user");
		setTable(data.data);
	}
	useEffect(() => {
		getTable();
	}, []);

	return (
		<Container>
			<TableContainer
				color="white"
				border="1px solid #2A2D3A"
				borderRadius="4px"
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
									>
										{countries[parseInt(row.country) - 1] ||
											"Not Selected"}
									</Td>
									<Td
										py="10px"
										color="#6c7293"
										borderBottomColor="#2A2D3A"
										borderRight="1px solid #2A2D3A"
										width="10px"
									></Td>
									
								</Tr>
							))}
					</Tbody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default List;
