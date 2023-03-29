import React, { useState } from "react";
import FormTextArea from "./FormTextArea";
import {
	Button,
	Divider,
	Flex,
	HStack,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import alertRequest from "../services/alertRequest";

const LevelWiseAccordion = (prop) => {
	const [data, setData] = useState(prop.data);
	function handleDataChange(val, key) {
		let newData = { ...data };
		newData[key] = val;
		setData(newData);
	}
	function onUpdate() {
		// id, text1, text2, text3, image1, image2, image3
		const formData = {
			id: data.id,
			text1: data.text_1,
			text2: data.text_2,
			text3: data.text_3,
			image1: data.image_1,
			image2: data.image_3,
			image3: data.image_3,
		};
		alertRequest.post("/level/update", formData);
	}
	return (
		<div>
			<Flex flexDirection="column">
				<Flex gap={5} justifyContent="space-between">
					<FormTextArea
						label="Response Message ENGLISH"
						placeholder="Enter message"
						value={data.text_1}
						onChange={(e) => {
							handleDataChange(e.target.value, "text_1");
							e.target.style.height = "auto";
							e.target.style.height = `${
								e.target.scrollHeight > 170
									? e.target.scrollHeight
									: 170
							}px`;
						}}
						areaSx={{ h: "170px" }}
						sx={{ h: "auto", width: "calc(100% - 200px)" }}
					/>
					<Flex w="170px" alignItems="start" flexDirection="column">
						<Text fontSize={12} lineHeight="26px" color="blue.200">
							Message Image
						</Text>
						<Flex
							border="1px dashed"
							flexDirection="column"
							background="gray.800"
							borderRadius="5px"
							overflow="hidden"
							width="170px"
							height="170px"
							position="relative"
							justifyContent="center"
							alignItems="center"
							textAlign="center"
						>
							{1 == 2 ? (
								<>
									<Image
										boxSize="170px"
										objectFit="cover"
										src="https://bit.ly/dan-abramov"
										alt="Dan Abramov"
									/>

									<Button
										position="absolute"
										zIndex="modal"
										bottom={0}
										width="80%"
										variant="solid"
									>
										Change
									</Button>
								</>
							) : (
								<>
									<Text fontSize={14}>
										Drop file to upload
									</Text>
									<Text fontSize={10}>or</Text>
									<Button width="80%" variant="solid">
										Select File
									</Button>
									<Text fontSize={10} mt={1} color="gray.400">
										Maximum upload file size: 10 MB
									</Text>
								</>
							)}
						</Flex>
					</Flex>
				</Flex>
				{data.data.map((item, index) => (
					<FormInput
						placeholder="Enter option display text"
						label={index === 0 ? "Selection Data" : undefined}
						sx={{ mt: "5px" }}
						value={item && item.text_1}
						onChange={(e) => console.log(e)}
					/>
				))}
			</Flex>
			<Divider orientation="horizontal" marginY="30px" />

			<Flex flexDirection="column">
				<Flex gap={5} justifyContent="space-between">
					<FormTextArea
						label="Response Message SINHALA"
						placeholder="Enter message"
						value={data.text_2}
						onChange={(e) => {
							handleDataChange(e.target.value, "text_2");
							e.target.style.height = "auto";
							e.target.style.height = `${
								e.target.scrollHeight > 170
									? e.target.scrollHeight
									: 170
							}px`;
						}}
						areaSx={{ h: "170px" }}
						sx={{ h: "auto", width: "calc(100% - 200px)" }}
					/>
					<Flex w="170px" alignItems="start" flexDirection="column">
						<Text fontSize={12} lineHeight="26px" color="blue.200">
							Message Image
						</Text>
						<Flex
							border="1px dashed"
							flexDirection="column"
							background="gray.800"
							borderRadius="5px"
							overflow="hidden"
							width="170px"
							height="170px"
							position="relative"
							justifyContent="center"
							alignItems="center"
							textAlign="center"
						>
							{1 == 2 ? (
								<>
									<Image
										boxSize="170px"
										objectFit="cover"
										src="https://bit.ly/dan-abramov"
										alt="Dan Abramov"
									/>

									<Button
										position="absolute"
										zIndex="modal"
										bottom={0}
										width="80%"
										variant="solid"
									>
										Change
									</Button>
								</>
							) : (
								<>
									<Text fontSize={14}>
										Drop file to upload
									</Text>
									<Text fontSize={10}>or</Text>
									<Button width="80%" variant="solid">
										Select File
									</Button>
									<Text fontSize={10} mt={1} color="gray.400">
										Maximum upload file size: 10 MB
									</Text>
								</>
							)}
						</Flex>
					</Flex>
				</Flex>
				{data.data.map((item, index) => (
					<FormInput
						placeholder="Enter option display text"
						label={index === 0 ? "Selection Data" : undefined}
						sx={{ mt: "5px" }}
						value={item && item.text_2}
						onChange={(e) => console.log(e)}
					/>
				))}
			</Flex>
			<Divider orientation="horizontal" marginY="30px" />

			<Flex flexDirection="column">
				<Flex gap={5} justifyContent="space-between">
					<FormTextArea
						label="Response Message TAMIL"
						placeholder="Enter message"
						value={data.text_3}
						onChange={(e) => {
							handleDataChange(e.target.value, "text_3");
							e.target.style.height = "auto";
							e.target.style.height = `${
								e.target.scrollHeight > 170
									? e.target.scrollHeight
									: 170
							}px`;
						}}
						areaSx={{ h: "170px" }}
						sx={{ h: "auto", width: "calc(100% - 200px)" }}
					/>
					<Flex w="170px" alignItems="start" flexDirection="column">
						<Text fontSize={12} lineHeight="26px" color="blue.200">
							Message Image
						</Text>
						<Flex
							border="1px dashed"
							flexDirection="column"
							background="gray.800"
							borderRadius="5px"
							overflow="hidden"
							width="170px"
							height="170px"
							position="relative"
							justifyContent="center"
							alignItems="center"
							textAlign="center"
						>
							{1 == 2 ? (
								<>
									<Image
										boxSize="170px"
										objectFit="cover"
										src="https://bit.ly/dan-abramov"
										alt="Dan Abramov"
									/>

									<Button
										position="absolute"
										zIndex="modal"
										bottom={0}
										width="80%"
										variant="solid"
									>
										Change
									</Button>
								</>
							) : (
								<>
									<Text fontSize={14}>
										Drop file to upload
									</Text>
									<Text fontSize={10}>or</Text>
									<Button width="80%" variant="solid">
										Select File
									</Button>
									<Text fontSize={10} mt={1} color="gray.400">
										Maximum upload file size: 10 MB
									</Text>
								</>
							)}
						</Flex>
					</Flex>
				</Flex>
				{data.data.map((item, index) => (
					<FormInput
						placeholder="Enter option display text"
						label={index === 0 ? "Selection Data" : undefined}
						sx={{ mt: "5px" }}
						value={item && item.text_3}
						onChange={(e) => console.log(e)}
					/>
				))}
			</Flex>
			<Divider orientation="horizontal" marginY="30px" />
			<Flex justifyContent="end">
				<FormButton
					onClick={onUpdate}
					sx={{ width: "120px" }}
				>
					Update Level
				</FormButton>
			</Flex>
		</div>
	);
};

export default LevelWiseAccordion;
