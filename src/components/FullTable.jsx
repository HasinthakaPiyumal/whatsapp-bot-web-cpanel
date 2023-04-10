import {
	Badge,
	Box,
	Center,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React from "react";
import ActionDotsVert from "./ActionDotsVert";

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
									{id + 1 + (prop.currentPageIndex || 0) * 10}
								</Td>
								{prop.columns.map((column) => {
									if (column.cell) {
										return (
											<Td
												py="10px"
												color="#6c7293"
												borderBottomColor="#2A2D3A"
											>
												{column.cell(row)}
											</Td>
										);
									}
									if (
										column.key === "status" &&
										column.head.toLowerCase() === "status"
									) {
										let item;
										if (row[column.key] === 1) {
											item = (
												<div
													style={{
														padding: 8,
														background: "#00d25bee",
														width: 70,
														fontSize: 13,
														fontWeight: "bold",
														color: "white",
														display: "flex",
														justifyContent:
															"center",
														alignItems: "Center",
														borderRadius: "4px",
														lineHeight: "12px",
													}}
												>
													Running
												</div>
											);
										} else if (row[column.key] === 0) {
											item = (
												<div
													style={{
														padding: 8,
														background: "#FC424Aee",
														width: 70,
														fontSize: 13,
														fontWeight: "bold",
														color: "white",
														display: "flex",
														justifyContent:
															"center",
														alignItems: "Center",
														borderRadius: "4px",
														lineHeight: "12px",
													}}
												>
													Disabled
												</div>
											);
										}
										return (
											<Td
												py="10px"
												color="#6c7293"
												borderBottomColor="#2A2D3A"
												width={100}
											>
												{item}
											</Td>
										);
									}
									if (
										column.head.toLowerCase() === "action"
									) {
										return (
											<Td
												py="1px"
												color="#6c7293"
												borderBottomColor="#2A2D3A"
												width={20}
												textAlign="center"
											>
												<ActionDotsVert
													id={row.id}
													tableId={prop.tableId}
													loadTable={prop.loadTable}
													editPath={prop.editPath}
												/>
											</Td>
										);
									}
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
