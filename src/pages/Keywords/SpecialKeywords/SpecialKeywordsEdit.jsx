import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import {
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Input,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
} from "@chakra-ui/react";
import FormInput from "../../../components/FormInput";
import FormButton from "../../../components/FormButton";
import alertRequest from "../../../services/alertRequest";
import FormTextArea from "../../../components/FormTextArea";
import { useLocation } from "react-router-dom";
import requests from "../../../util/requests";

const SpecialKeywords = () => {
	const [message1, setMessage1] = useState();
	const [messageId1, setMessageId1] = useState();
	// const [messageOptions1, setMessageOptions1] = useState([]);
	// const [messageOption1, setMessageOption1] = useState();
	const [message2, setMessage2] = useState();
	const [messageId2, setMessageId2] = useState();
	// const [messageOptions2, setMessageOptions2] = useState([]);
	// const [messageOption2, setMessageOption2] = useState();
	const [message3, setMessage3] = useState();
	const [messageId3, setMessageId3] = useState();
	// const [messageOptions3, setMessageOptions3] = useState([]);
	// const [messageOption3, setMessageOption3] = useState();

	const [keyword, setKeyword] = useState();
	const [keywords, setKeywords] = useState([]);

	const [selectedFile1, setSelectedFile1] = useState(null);
	const [selectedFile2, setSelectedFile2] = useState(null);
	const [selectedFile3, setSelectedFile3] = useState(null);
	const [fileName1, setFileName1] = useState();
	const [fileName2, setFileName2] = useState();
	const [fileName3, setFileName3] = useState();

	function addMessage(language) {
		let text;
		let callBack;
		let messageId;
		const formData = new FormData();
		switch (language) {
			case 1:
				text = message1;
				messageId = messageId1;
				formData.append("file", selectedFile1);
				callBack = (data) => {
					setMessageId1(data.id);
				};
				break;
			case 2:
				text = message2;
				messageId = messageId2;
				formData.append("file", selectedFile2);
				callBack = (data) => setMessageId2(data.id);
				break;
			case 3:
				text = message3;
				messageId = messageId3;
				formData.append("file", selectedFile3);
				callBack = (data) => setMessageId3(data.id);
				break;

			default:
				break;
		}
		formData.append("text", text);
		formData.append("language", language);
		formData.append("id", messageId);
		// const data = { text: text, language: language, id: messageId };
		alertRequest.post(
			"/special-messages/" +
				(messageId ? "update-message" : "add-message"),
			formData,
			messageId ? () => {} : callBack,
			{},
			false
		);
	}
	// function handleOptionAdd(data, language) {
	// 	const newOptions1 = [...messageOptions1, data];
	// 	const newOptions2 = [...messageOptions2, data];
	// 	const newOptions3 = [...messageOptions3, data];
	// 	switch (language) {
	// 		case 1:
	// 			setMessageOptions1(newOptions1);
	// 			setMessageOption1("");
	// 			break;
	// 		case 2:
	// 			setMessageOptions2(newOptions2);
	// 			setMessageOption2("");
	// 			break;
	// 		case 3:
	// 			setMessageOptions3(newOptions3);
	// 			setMessageOption3("");
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }
	// function addMessageOption(language) {
	// 	let text;
	// 	let id;
	// 	switch (language) {
	// 		case 1:
	// 			text = messageOption1;
	// 			id = messageId1;
	// 			break;
	// 		case 2:
	// 			text = messageOption2;
	// 			id = messageId2;
	// 			break;
	// 		case 3:
	// 			text = messageOption3;
	// 			id = messageId3;
	// 			break;

	// 		default:
	// 			break;
	// 	}
	// 	const data = { text: text, language: language, messageId: id };
	// 	alertRequest.post(
	// 		"/special-messages/add-message-option",
	// 		data,
	// 		(data) => {
	// 			handleOptionAdd(data, language);
	// 		}
	// 	);
	// }
	// function onFinishRemoveOption(id, language) {
	// 	let newOptions1 = [...messageOptions1];
	// 	let newOptions2 = [...messageOptions2];
	// 	let newOptions3 = [...messageOptions3];
	// 	newOptions1 = newOptions1.filter((item) => item.id !== id);
	// 	newOptions2 = newOptions2.filter((item) => item.id !== id);
	// 	newOptions3 = newOptions3.filter((item) => item.id !== id);
	// 	switch (language) {
	// 		case 1:
	// 			setMessageOptions1(newOptions1);
	// 			break;
	// 		case 2:
	// 			setMessageOptions2(newOptions2);
	// 			break;
	// 		case 3:
	// 			setMessageOptions3(newOptions3);
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }
	// function removeMessageOption(id, language) {
	// 	alertRequest.post(
	// 		"/special-messages/remove-message-option",
	// 		{
	// 			id: id,
	// 		},
	// 		() => onFinishRemoveOption(id, language)
	// 	);
	// }
	// function onChangeOption(text, id, language) {
	// 	let newOptions1 = [];
	// 	let newOptions2 = [];
	// 	let newOptions3 = [];
	// 	messageOptions1.map((option) => {
	// 		if (option.id === id) {
	// 			option.display_text = text;
	// 			newOptions1.push(option);
	// 		} else {
	// 			newOptions1.push(option);
	// 		}
	// 	});
	// 	messageOptions2.map((option) => {
	// 		if (option.id === id) {
	// 			option.display_text = text;
	// 			newOptions2.push(option);
	// 		} else {
	// 			newOptions2.push(option);
	// 		}
	// 	});
	// 	messageOptions3.map((option) => {
	// 		if (option.id === id) {
	// 			option.display_text = text;
	// 			newOptions3.push(option);
	// 		} else {
	// 			newOptions3.push(option);
	// 		}
	// 	});
	// 	switch (language) {
	// 		case 1:
	// 			setMessageOptions1(newOptions1);
	// 			break;
	// 		case 2:
	// 			setMessageOptions2(newOptions2);
	// 			break;
	// 		case 3:
	// 			setMessageOptions3(newOptions3);
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }
	// function updateMessageOption(id, text) {
	// 	alertRequest.post("/special-messages/update-message-option", {
	// 		id: id,
	// 		text: text,
	// 	});
	// }

	function onFinishAddKeyword(data) {
		const tempKeywords = [...keywords, data];
		setKeyword("");
		setKeywords(tempKeywords);
	}

	function addKeyword() {
		const data = { query: keyword };
		alertRequest.post(
			"/special-messages/add-keyword",
			data,
			onFinishAddKeyword
		);
	}
	function onChangeKeyword(text, id) {
		let newKeywords = [];
		keywords.map((option) => {
			if (option.id === id) {
				option.keyword = text;
				newKeywords.push(option);
			} else {
				newKeywords.push(option);
			}
		});
		setKeywords(newKeywords);
	}
	function updateMessageKeyword(id, text) {
		alertRequest.post("/special-messages/update-keyword", {
			id: id,
			query: text,
		});
	}
	function onFinishRemoveKeyword(id) {
		let newKeywords = [...keywords];
		newKeywords = newKeywords.filter((item) => item.id !== id);
		setKeywords(newKeywords);
	}
	function removeKeyword(id) {
		alertRequest.post(
			"/special-messages/remove-keyword",
			{
				id: id,
			},
			() => onFinishRemoveKeyword(id)
		);
	}
	function onActivateKeyword(id, status) {
		let newKeywords = [];
		keywords.forEach((keyword) => {
			if (keyword.id === id) {
				keyword.status = status;
				newKeywords.push(keyword);
			} else {
				newKeywords.push(keyword);
			}
		});
		setKeywords(newKeywords);
	}
	function activateKeyword(id, status) {
		alertRequest.post(
			"/special-messages/activate",
			{
				keywordId: id,
				messageId1: messageId1,
				messageId2: messageId2,
				messageId3: messageId3,
				status: status,
			},
			() => onActivateKeyword(id, status)
		);
	}

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
	async function getData(id) {
		let data = await requests.post(
			"/special-messages/view",
			{},
			{ id: id }
		);
		data = data.data;
		setMessage1(data.lang1.text);
		setMessageId1(data.lang1.id);
		setFileName1(
			data.lang1.original_file_name === "null"
				? ""
				: data.lang1.original_file_name
		);

		setMessage2(data.lang2.text);
		setMessageId2(data.lang2.id);
		setFileName2(
			data.lang2.original_file_name === "null"
				? ""
				: data.lang2.original_file_name
		);

		setMessage3(data.lang3.text);
		setMessageId3(data.lang3.id);
		setFileName2(
			data.lang3.original_file_name === "null"
				? ""
				: data.lang3.original_file_name
		);

		setKeyword("");
		setKeywords([
			{ id: data.id, keyword: data.keyword, status: data.status },
		]);
	}
	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const id = params.get("id");
		getData(parseInt(id));
	}, []);
	function removeImg(id, callback) {
		alertRequest.post(
			"/special-messages/remove-image",
			{ id: id },
			callback
		);
	}
	return (
		<Container>
			{/* ================================ */}
			{/*      message section start       */}
			{/* ================================ */}
			<Heading size={10} mb={5}>
				Add Special Response Message
			</Heading>
			<Tabs isFitted variant="enclosed">
				<TabList mb="1em">
					<Tab>English</Tab>
					<Tab>සිංහල</Tab>
					<Tab>தமிழ்</Tab>
				</TabList>
				<TabPanels>
					<TabPanel padding={0}>
						<Flex width="full" gap="4%">
							<VStack
								justifyContent="left"
								alignItems="left"
								w="48%"
							>
								<FormTextArea
									label="Response Message ENGLISH"
									placeholder="Enter message"
									value={message1}
									onChange={(e) => {
										setMessage1(e.target.value);
										e.target.style.height = "auto";
										e.target.style.height = `${e.target.scrollHeight}px`;
									}}
									sx={{ h: "auto" }}
								/>
								<Flex
									background="#2A3038"
									padding="5px"
									gap="10px"
									alignItems="center"
								>
									<Input
										type="file"
										id="file1"
										name="file1"
										onChange={handleFileChange1}
										display="none"
									/>
									<FormButton
										sx={{ width: "fit-content" }}
										as={"label"}
										background="whiteAlpha.400"
										color="whiteAlpha.900"
										htmlFor="file1"
									>
										Attach File
									</FormButton>
									<Text
										isTruncated
										color="whiteAlpha.700"
										fontSize={13}
									>
										{fileName1}
									</Text>
									{fileName1 && (
										<Button
											width="70px"
											h="20px"
											fontSize="11px"
											background="red.500"
											_hover={{ background: "red.600" }}
											onClick={() =>
												removeImg(messageId1, () => {
													setFileName1("");
													setSelectedFile1("");
												})
											}
										>
											Remove
										</Button>
									)}
								</Flex>
								<FormButton
									sx={{ mt: 4, width: "fit-content" }}
									onClick={() => addMessage(1)}
								>
									{!messageId1
										? "Add message"
										: "Update Message"}
								</FormButton>
								{/* {messageId1 && (
									<>
										<HStack>
											<Text
												fontSize={14}
												fontWeight="bold"
											>
												Add Options to Message
											</Text>
										</HStack>
										<HStack
											alignItems="end"
											cursor="not-allowed"
										>
											<FormInput
												placeholder="Enter option display text"
												value={messageOption1}
												onChange={(e) =>
													setMessageOption1(
														e.target.value
													)
												}
											/>

											<FormButton
												sx={{ height: "38px" }}
												onClick={() =>
													addMessageOption(1)
												}
											>
												ADD
											</FormButton>
										</HStack>
									</>
								)}
								{messageOptions1.map((option, index) => (
									<HStack
										alignItems="end"
										cursor="not-allowed"
										key={index}
									>
										<FormInput
											placeholder="Enter option display text"
											value={option.display_text}
											onChange={(e) =>
												onChangeOption(
													e.target.value,
													option.id,
													1
												)
											}
										/>
										<FormButton
											sx={{
												height: "38px",
												background: "#FC424A",
											}}
											onClick={() =>
												removeMessageOption(
													option.id,
													1
												)
											}
										>
											Remove
										</FormButton>
										<FormButton
											sx={{ height: "38px" }}
											onClick={() =>
												updateMessageOption(
													option.id,
													option.display_text
												)
											}
										>
											Save
										</FormButton>
									</HStack>
								))} */}
							</VStack>
							<VStack w="48%">
								<Text fontSize={14} fontWeight="bold">
									Preview of Response
								</Text>
								<Box
									width="90%"
									height=""
									background="#075E54"
									borderRadius={5}
									padding={2}
									marginTop={0}
									minH={9}
								>
									<Text fontSize={14}>
										<pre style={{ whiteSpace: "pre-wrap" }}>
											{message1}
											{/* {"\n"}
											{messageOptions1.map(
												(option, index) =>
													"[" +
													(index + 1) +
													"] " +
													option.display_text +
													"\n"
											)} */}
										</pre>
									</Text>
								</Box>
							</VStack>
						</Flex>
					</TabPanel>
					<TabPanel padding={0}>
						<Flex width="full" gap="4%">
							<VStack
								justifyContent="left"
								alignItems="left"
								w="48%"
							>
								<FormTextArea
									label="Response Message SINHALA"
									placeholder="Enter message"
									value={message2}
									onChange={(e) => {
										setMessage2(e.target.value);
										e.target.style.height = "auto";
										e.target.style.height = `${e.target.scrollHeight}px`;
									}}
									sx={{ h: "auto" }}
								/>
								<Flex
									background="#2A3038"
									padding="5px"
									gap="10px"
									alignItems="center"
								>
									<Input
										type="file"
										id="file2"
										name="file2"
										onChange={handleFileChange2}
										display="none"
									/>
									<FormButton
										sx={{ width: "fit-content" }}
										as={"label"}
										background="whiteAlpha.400"
										color="whiteAlpha.900"
										htmlFor="file2"
									>
										Attach File
									</FormButton>
									<Text
										isTruncated
										color="whiteAlpha.700"
										fontSize={13}
									>
										{fileName2}
									</Text>
									{fileName2 && (
										<Button
											width="70px"
											h="20px"
											fontSize="11px"
											background="red.500"
											_hover={{ background: "red.600" }}
											onClick={() =>
												removeImg(messageId2, () => {
													setFileName2("");
													setSelectedFile2("");
												})
											}
										>
											Remove
										</Button>
									)}
								</Flex>
								<FormButton
									sx={{ mt: 2, width: "fit-content" }}
									onClick={() => addMessage(2)}
								>
									{!messageId2
										? "Add message"
										: "Update Message"}
								</FormButton>
								{/* {messageId2 && (
									<>
										<HStack>
											<Text
												fontSize={14}
												fontWeight="bold"
											>
												Add Options to Message
											</Text>
										</HStack>
										<HStack
											alignItems="end"
											cursor="not-allowed"
										>
											<FormInput
												placeholder="Enter option display text"
												value={messageOption2}
												onChange={(e) =>
													setMessageOption2(
														e.target.value
													)
												}
											/>

											<FormButton
												sx={{ height: "38px" }}
												onClick={() =>
													addMessageOption(2)
												}
											>
												ADD
											</FormButton>
										</HStack>
									</>
								)}
								{messageOptions2.map((option, index) => (
									<HStack
										alignItems="end"
										cursor="not-allowed"
										key={index}
									>
										<FormInput
											placeholder="Enter option display text"
											value={option.display_text}
											onChange={(e) =>
												onChangeOption(
													e.target.value,
													option.id,
													2
												)
											}
										/>
										<FormButton
											sx={{
												height: "38px",
												background: "#FC424A",
											}}
											onClick={() =>
												removeMessageOption(
													option.id,
													2
												)
											}
										>
											Remove
										</FormButton>
										<FormButton
											sx={{ height: "38px" }}
											onClick={() =>
												updateMessageOption(
													option.id,
													option.display_text
												)
											}
										>
											Save
										</FormButton>
									</HStack>
								))} */}
							</VStack>
							<VStack w="48%">
								<Text fontSize={14} fontWeight="bold">
									Preview of Response
								</Text>
								<Box
									width="90%"
									height=""
									background="#075E54"
									borderRadius={5}
									padding={2}
									marginTop={0}
									minH={9}
								>
									<Text fontSize={14}>
										<pre style={{ whiteSpace: "pre-wrap" }}>
											{message2}
											{/* {"\n"}
											{messageOptions2.map(
												(option, index) =>
													"[" +
													(index + 1) +
													"] " +
													option.display_text +
													"\n"
											)} */}
										</pre>
									</Text>
								</Box>
							</VStack>
						</Flex>
					</TabPanel>
					<TabPanel padding={0}>
						<Flex width="full" gap="4%">
							<VStack
								justifyContent="left"
								alignItems="left"
								w="48%"
							>
								<FormTextArea
									label="Response Message TAMIL"
									placeholder="Enter message"
									value={message3}
									onChange={(e) => {
										setMessage3(e.target.value);
										e.target.style.height = "auto";
										e.target.style.height = `${e.target.scrollHeight}px`;
									}}
									sx={{ h: "auto" }}
								/>
								<Flex
									background="#2A3038"
									padding="5px"
									gap="10px"
									alignItems="center"
								>
									<Input
										type="file"
										id="file3"
										name="file3"
										onChange={handleFileChange3}
										display="none"
									/>
									<FormButton
										sx={{ width: "fit-content" }}
										as={"label"}
										background="whiteAlpha.400"
										color="whiteAlpha.900"
										htmlFor="file3"
									>
										Attach File
									</FormButton>
									<Text
										isTruncated
										color="whiteAlpha.700"
										fontSize={13}
									>
										{fileName3}
									</Text>
									{fileName3 && (
										<Button
											width="70px"
											h="20px"
											fontSize="11px"
											background="red.500"
											_hover={{ background: "red.600" }}
											onClick={() =>
												removeImg(messageId3, () => {
													setFileName3("");
													setSelectedFile3("");
												})
											}
										>
											Remove
										</Button>
									)}
								</Flex>
								<FormButton
									sx={{ mt: 2, width: "fit-content" }}
									onClick={() => addMessage(3)}
								>
									{!messageId3
										? "Add message"
										: "Update Message"}
								</FormButton>
								{/* {messageId3 && (
									<>
										<HStack>
											<Text
												fontSize={14}
												fontWeight="bold"
											>
												Add Options to Message
											</Text>
										</HStack>
										<HStack
											alignItems="end"
											cursor="not-allowed"
										>
											<FormInput
												placeholder="Enter option display text"
												value={messageOption3}
												onChange={(e) =>
													setMessageOption3(
														e.target.value
													)
												}
											/>

											<FormButton
												sx={{ height: "38px" }}
												onClick={() =>
													addMessageOption(3)
												}
											>
												ADD
											</FormButton>
										</HStack>
									</>
								)} */}
								{/* {messageOptions3.map((option, index) => (
									<HStack
										alignItems="end"
										cursor="not-allowed"
										key={index}
									>
										<FormInput
											placeholder="Enter option display text"
											value={option.display_text}
											onChange={(e) =>
												onChangeOption(
													e.target.value,
													option.id,
													3
												)
											}
										/>
										<FormButton
											sx={{
												height: "38px",
												background: "#FC424A",
											}}
											onClick={() =>
												removeMessageOption(
													option.id,
													3
												)
											}
										>
											Remove
										</FormButton>
										<FormButton
											sx={{ height: "38px" }}
											onClick={() =>
												updateMessageOption(
													option.id,
													option.display_text
												)
											}
										>
											Save
										</FormButton>
									</HStack>
								))} */}
							</VStack>
							<VStack w="48%">
								<Text fontSize={14} fontWeight="bold">
									Preview of Response
								</Text>
								<Box
									width="90%"
									height=""
									background="#075E54"
									borderRadius={5}
									padding={2}
									marginTop={0}
									minH={9}
								>
									<Text fontSize={14}>
										<pre style={{ whiteSpace: "pre-wrap" }}>
											{message3}
											{/* {"\n"}
											{messageOptions3.map(
												(option, index) =>
													"[" +
													(index + 1) +
													"] " +
													option.display_text +
													"\n"
											)} */}
										</pre>
									</Text>
								</Box>
							</VStack>
						</Flex>
					</TabPanel>
					<TabPanel padding={0}>
						<VStack justifyContent="left" alignItems="left">
							<FormTextArea
								label="Response Message SINHALA"
								placeholder="Enter message"
								value={message2}
								onChange={(e) => setMessage2(e.target.value)}
							/>
							<FormButton
								sx={{ mt: 2, width: 120 }}
								onClick={() => addMessage(2)}
							>
								{!messageId1 ? "Add message" : "Update Message"}
							</FormButton>
						</VStack>
					</TabPanel>
					<TabPanel padding={0}>
						<VStack justifyContent="left" alignItems="left">
							<FormTextArea
								label="Response Message TAMIL"
								placeholder="Enter message"
								value={message3}
								onChange={(e) => setMessage3(e.target.value)}
							/>
							<FormButton
								sx={{ mt: 2, width: 120 }}
								onClick={() => addMessage(3)}
							>
								{!messageId3 ? "Add message" : "Update Message"}
							</FormButton>
						</VStack>
					</TabPanel>
				</TabPanels>
			</Tabs>
			{/* ================================ */}
			{/*      message section end       */}
			{/* ================================ */}
			{messageId1 && messageId2 && messageId3 ? (
				<>
					<Heading size={10} mb={5} mt={10}>
						Add Special Keywords
					</Heading>
					<HStack alignItems="end" cursor="not-allowed">
						<FormInput
							placeholder="Enter keyword"
							value={keyword}
							onChange={(e) => {
								setKeyword(e.target.value);
							}}
						/>
						<FormButton
							sx={{ height: "38px" }}
							onClick={addKeyword}
						>
							ADD
						</FormButton>
					</HStack>
					{keywords.map((option, index) => (
						<HStack
							alignItems="end"
							cursor="not-allowed"
							key={index}
							mt={2}
						>
							<FormInput
								placeholder="Enter keyword"
								value={option.keyword}
								onChange={(e) =>
									onChangeKeyword(e.target.value, option.id)
								}
							/>
							<FormButton
								sx={{
									height: "38px",
									background:
										option.status === 1
											? "#FFAB00"
											: "#00D25B",
								}}
								onClick={() =>
									activateKeyword(
										option.id,
										option.status === 1 ? 0 : 1
									)
								}
							>
								{option.status === 0
									? "Activate"
									: "Deactivate"}
							</FormButton>
							<FormButton
								sx={{
									height: "38px",
									background: "#FC424A",
								}}
								onClick={() => removeKeyword(option.id)}
							>
								Remove
							</FormButton>
							<FormButton
								sx={{ height: "38px" }}
								onClick={() =>
									updateMessageKeyword(
										option.id,
										option.keyword
									)
								}
							>
								Save
							</FormButton>
						</HStack>
					))}
				</>
			) : (
				<Text
					size={8}
					sx={{
						fontStyle: "italic",
						color: "#ffffffaa",
						fontSize: 13,
					}}
					mt={5}
				>
					* To add special keywords, please add messages in the three
					languages mentioned above.
				</Text>
			)}
		</Container>
	);
};

export default SpecialKeywords;
