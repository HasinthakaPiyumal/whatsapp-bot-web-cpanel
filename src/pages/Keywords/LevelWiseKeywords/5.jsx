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
        
		const data = await requests.get("/level/list",{}, { level: 1 });
		setData(data.data);
		console.log(data.data);
	}
	useEffect(() => {
		getLevelsData();
	}, []);

	return (
		<Container>
			<Heading size={10} mb={5}>
				Level 01 - Main Menu
			</Heading>
			{data.length>0 && <LevelWiseAccordion data={data && data[0]} />}
			{/* <Accordion allowToggle>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Level 01 - MAIN MENU
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Section 2 title
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion> */}
		</Container>
	);
};

export default LevelWiseKeywords;
