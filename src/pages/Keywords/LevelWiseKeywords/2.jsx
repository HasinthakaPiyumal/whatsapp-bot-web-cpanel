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
		const data = await requests.get("/level/list", {}, { level: 2 });
		setData(data.data);
	}
	useEffect(() => {
		getLevelsData();
	}, []);

	return (
		<Container>
			{data &&
				data.map((item,index) => (
					<Accordion allowToggle>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as="span" flex="1" textAlign="left">
										Level 02 - OPTION {index+1}
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<LevelWiseAccordion data={item} />
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				))}
		</Container>
	);
};

export default LevelWiseKeywords;
