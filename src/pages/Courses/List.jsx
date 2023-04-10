import React, { useEffect, useState } from "react";
import Container from "../../components/Container";

import FullTable from "../../components/FullTable";
import requests from "../../util/requests";
import { Button, HStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const tableColumns = [
	{ head: "title", key: "title_1" },
	{ head: "type", key: "type_text" },
	{ head: "age type", key: "age_type_text" },
	{ head: "status", key: "status" },
	{ head: "action", key: "status" },
];
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

	async function getTable() {
		const data = await requests.get("/course/list");
		setTable(data.data);
	}
	useEffect(() => {
		getTable();
	}, []);

	return (
		<Container>
			<FullTable
				table={table}
				tableId={2}
				currentPageIndex={currentPageIndex}
				loadTable={getTable}
				columns={tableColumns}
				editPath="/courses/edit"
			/>
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
