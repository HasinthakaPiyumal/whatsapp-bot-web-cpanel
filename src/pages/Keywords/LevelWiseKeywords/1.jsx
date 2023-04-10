import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Heading,
} from "@chakra-ui/react";
import LevelWiseAccordion from "../../../components/LevelWiseAccordion";
import requests from "../../../util/requests";
import FormButton from "../../../components/FormButton";

const LevelWiseKeywords = () => {
	const [data, setData] = useState([]);
	async function getLevelsData() {
		const data = await requests.get("/level/list", {}, { level: 1 });
		setData(data.data);
	}
	useEffect(() => {
		getLevelsData();
	}, []);

	return (
		<Container>
			<Heading size={10} mb={5}>
				Update Main Menu
			</Heading>
			{data.length > 0 && <LevelWiseAccordion data={data && data[0]} />}
		</Container>
	);
};

export default LevelWiseKeywords;
