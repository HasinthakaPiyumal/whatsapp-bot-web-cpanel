import React, { useState } from "react";
import FormTextArea from "./FormTextArea";
import {
	Button,
	Divider,
	Flex,
	HStack,
	Image,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import alertRequest from "../services/alertRequest";
import { useRef } from "react";

const LevelWiseAccordion = (prop) => {
	const [data, setData] = useState(prop.data);

	const [selectedFile1, setSelectedFile1] = useState(null);
	const [selectedFile2, setSelectedFile2] = useState(null);
	const [selectedFile3, setSelectedFile3] = useState(null);
	const [fileName1, setFileName1] = useState(prop.data.image_1==="null"?"":prop.data.image_1);
	const [fileName2, setFileName2] = useState(prop.data.image_2==="null"?"":prop.data.image_2);
	const [fileName3, setFileName3] = useState(prop.data.image_3==="null"?"":prop.data.image_3);

	const handleFileChange1 = (event) => {
		setSelectedFile1(event.target.files[0]);
		setFileName1(event.target.files[0].name);
	};
	const handleFileChange2 = (event) => {
		setSelectedFile2(event.target.files[0]);
		setFileName2(event.target.files[0].name);
	};
	const handleFileChange3 = (event) => {
		setSelectedFile3(event.target.files[0]);
		setFileName3(event.target.files[0].name);
	};
	function handleDataChange(val, key) {
		let newData = { ...data };
		newData[key] = val;
		setData(newData);
	}
	function onUpdate() {
		// id, text1, text2, text3, image1, image2, image3
		// const formData = {
		// 	id: data.id,
		// 	text1: data.text_1,
		// 	text2: data.text_2,
		// 	text3: data.text_3,
		// 	image1: data.image_1,
		// 	image2: data.image_3,
		// 	image3: data.image_3,
		// };
		const formData = new FormData();
		formData.append("id", data.id);
		formData.append("text1", data.text_1);
		formData.append("text2", data.text_2);
		formData.append("text3", data.text_3);
		formData.append("file1", selectedFile1);
		formData.append("file2", selectedFile2);
		formData.append("file3", selectedFile3);

		alertRequest.post("/level/update", formData, () => {}, {}, false);
	}
	function removeImg(language, callback) {
		alertRequest.post(
			"/level/remove-image",
			{ id: data.id, language: language },
			callback
		);
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
							Attachment
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
							{
								<>
									<Text fontSize={14}>
										Drop file to upload
									</Text>
									<Text fontSize={10}>or</Text>
									<Input
										type="file"
										id="file1"
										name="file1"
										onChange={handleFileChange1}
										display="none"
									/>
									<Button
										width="100px"
										h="30px"
										fontSize="13px"
										variant="solid"
										as="label"
										htmlFor="file1"
									>
										Select File
									</Button>
									<Text fontSize={10} mt={1} color="gray.400">
										{!fileName1
											? "Maximum upload file size: 1 GB"
											: fileName1.substring(0, 30) +
											  (fileName1.length > 30
													? "..."
													: "")}
									</Text>
									{fileName1 && (
										<Button
											width="70px"
											h="20px"
											fontSize="11px"
											background="red.500"
											_hover={{ background: "red.600" }}
											onClick={() =>
												removeImg(1, () => {
													setFileName1("");
													setSelectedFile1("");
												})
											}
										>
											Remove
										</Button>
									)}
								</>
							}
						</Flex>
					</Flex>
				</Flex>
				{/* {data.data.map((item, index) => (
					<FormInput
						placeholder="Enter option display text"
						label={index === 0 ? "Selection Data" : undefined}
						sx={{ mt: "5px" }}
						value={item && item.text_1}
						onChange={(e) => console.log(e)}
					/>
				))} */}
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
							Attachment
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
							{
								<>
									<Text fontSize={14}>
										Drop file to upload
									</Text>
									<Text fontSize={10}>or</Text>
									<Input
										type="file"
										id="file2"
										name="file2"
										onChange={handleFileChange2}
										display="none"
									/>
									<Button
										width="100px"
										h="30px"
										fontSize="13px"
										variant="solid"
										as="label"
										htmlFor="file2"
									>
										Select File
									</Button>
									<Text fontSize={10} mt={1} color="gray.400">
										{!fileName2
											? "Maximum upload file size: 1 GB"
											: fileName2.substring(0, 30) +
											  (fileName2.length > 30
													? "..."
													: "")}
									</Text>
									{fileName2 && (
										<Button
											width="70px"
											h="20px"
											fontSize="11px"
											background="red.500"
											_hover={{ background: "red.600" }}
											onClick={() =>
												removeImg(2, () => {
													setFileName2("");
													setSelectedFile2("");
												})
											}
										>
											Remove
										</Button>
									)}
								</>
							}
						</Flex>
					</Flex>
				</Flex>
				{/* {data.data.map((item, index) => (
					<FormInput
						placeholder="Enter option display text"
						label={index === 0 ? "Selection Data" : undefined}
						sx={{ mt: "5px" }}
						value={item && item.text_2}
						onChange={(e) => console.log(e)}
					/>
				))} */}
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
							Attachment
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
							{
								<>
									<Text fontSize={14}>
										Drop file to upload
									</Text>
									<Text fontSize={10}>or</Text>
									<Input
										type="file"
										id="file3"
										name="file3"
										onChange={handleFileChange3}
										display="none"
									/>
									<Button
										width="100px"
										h="30px"
										fontSize="13px"
										variant="solid"
										as="label"
										htmlFor="file3"
									>
										Select File
									</Button>

									<Text fontSize={10} mt={1} color="gray.400">
										{!fileName3
											? "Maximum upload file size: 1 GB"
											: fileName3.substring(0, 30) +
											  (fileName3.length > 30
													? "..."
													: "")}
									</Text>
									{fileName3 && (
										<Button
											width="70px"
											h="20px"
											fontSize="11px"
											background="red.500"
											_hover={{ background: "red.600" }}
											onClick={() =>
												removeImg(3, () => {
													setFileName3("");
													setSelectedFile3("");
												})
											}
										>
											Remove
										</Button>
									)}
								</>
							}
						</Flex>
					</Flex>
				</Flex>
				{/* {data.data.map((item, index) => (
					<FormInput
						placeholder="Enter option display text"
						label={index === 0 ? "Selection Data" : undefined}
						sx={{ mt: "5px" }}
						value={item && item.text_3}
						onChange={(e) => console.log(e)}
					/>
				))} */}
			</Flex>
			<Divider orientation="horizontal" marginY="30px" />
			<Flex justifyContent="end">
				<FormButton onClick={onUpdate} sx={{ width: "120px" }}>
					Update Level
				</FormButton>
			</Flex>
		</div>
	);
};

export default LevelWiseAccordion;
