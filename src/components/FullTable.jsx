import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React from "react";

const FullTable = (prop) => {
	return (
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
						{prop.columns.map((column) => {
							return (
								<Th
									color="#6c7293"
									fontWeight="bold"
									fontSize="14px"
									borderBottomColor="#2A2D3A"
								>
									{column.head}
								</Th>
							);
						})}
					</Tr>
				</Thead>
				<Tbody>
					{prop.table &&
						prop.table.map((row, id) => (
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
								{prop.columns.map((column) => {
									return (
										<Td
											py="10px"
											color="#6c7293"
											borderBottomColor="#2A2D3A"
										>
											{row[column.key]}
										</Td>
									);
								})}
							</Tr>
						))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default FullTable;
