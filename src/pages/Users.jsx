import React from "react";
import Container from "../components/Container";
import FullTable from "../components/FullTable";

const Users = () => {
	return (
		<Container>
			<FullTable
				table={[...Array(5)].map(() => ({
					name: "hasi",
					age: 20,
					grade: "A",
					asd: "asd",
				}))}
				columns={[
					{ head: "Name", key: "name" },
					{ head: "Grade", key: "grade" },
					{ head: "Age", key: "age" },
				]}
			/>
		</Container>
	);
};

export default Users;
