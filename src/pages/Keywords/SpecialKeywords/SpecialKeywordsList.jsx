import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";

import FullTable from "../../../components/FullTable";
import requests from "../../../util/requests";

const tableColumns = [
	{ head: "Keyword", key: "keyword" },
	{ head: "status", key: "status" },
	{ head: "action", key: "status" },
];
const SpecialKeywordsList = () => {
	const [table, setTable] = useState([]);

	async function getTable() {
		const data = await requests.get("/special-messages/list");
		setTable(data.data);
	}
	useEffect(() => {
		getTable();
	}, []);

	return (
		<Container>
			<FullTable table={table} tableId={1} loadTable={getTable} columns={tableColumns} editPath="/special-keywords-edit"/>
		</Container>
	);
};

export default SpecialKeywordsList;
