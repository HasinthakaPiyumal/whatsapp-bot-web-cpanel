import React, { useEffect, useState } from "react";
import Container from "../../components/Container";

import FullTable from "../../components/FullTable";
import requests from "../../util/requests";

const tableColumns = [
	{ head: "title", key: "title_1" },
	{ head: "type", key: "type_text"},
	{ head: "status", key: "status" },
	{ head: "action", key: "status" },
];
const List = () => {
	const [table, setTable] = useState([]);

	async function getTable() {
		const data = await requests.get("/course/list");
		setTable(data.data);
	}
	useEffect(() => {
		getTable();
	}, []);

	return (
		<Container>
			<FullTable table={table} tableId={2} loadTable={getTable} columns={tableColumns} editPath="/courses/edit"/>
		</Container>
	);
};

export default List;
