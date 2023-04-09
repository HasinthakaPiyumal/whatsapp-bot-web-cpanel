import React, { useEffect, useState } from "react";
import FormInput from "../../components/FormInput";
import Container from "../../components/Container";
import {
	Button,
	Divider,
	Flex,
	HStack,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";
import FormSelect from "../../components/FormSelect";
import FormButton from "../../components/FormButton";
import FormTextArea from "../../components/FormTextArea";
import alertRequest from "../../services/alertRequest";
import { useLocation } from "react-router-dom";
import requests from "../../util/requests";
import { useNavigate } from "react-router-dom";
const Edit = () => {
	const [title1, setTitle1] = useState();
	const [title2, setTitle2] = useState();
	const [title3, setTitle3] = useState();
	const [type, setType] = useState();
	const [age, setAge] = useState();
	const [description1, setDescription1] = useState();
	const [description2, setDescription2] = useState();
	const [description3, setDescription3] = useState();

	const [selectedFile1, setSelectedFile1] = useState(null);
	const [selectedFile2, setSelectedFile2] = useState(null);
	const [selectedFile3, setSelectedFile3] = useState(null);
	const [fileName1, setFileName1] = useState();
	const [fileName2, setFileName2] = useState();
	const [fileName3, setFileName3] = useState();

	const [id, setId] = useState();

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
	function clear() {}

	function submit() {
		const formData = new FormData();
		formData.append("id", id);
		formData.append("title1", title1);
		formData.append("title2", title2);
		formData.append("title3", title3);
		formData.append("type", type);
		formData.append("age", age);
		formData.append("description1", description1);
		formData.append("description2", description2);
		formData.append("description3", description3);
		formData.append("file1", selectedFile1);
		formData.append("file2", selectedFile2);
		formData.append("file3", selectedFile3);
		alertRequest.post("/course/update", formData, clear, {}, false);
	}
	function removeImg(language, callback) {
		alertRequest.post(
			"/course/remove-image",
			{ id: id, language: language },
			callback
		);
	}
	const location = useLocation();
	const navigate = useNavigate();

	async function getData(id) {
		let data = await requests.post("/course/view", {}, { id: id });
		data = data.data && data.data[0];
		if (!data) {
			navigate("/courses/list");
			return;
		}
		setTitle1(data.title_1);
		setTitle2(data.title_2);
		setTitle3(data.title_3);
		setDescription1(data.description_1);
		setDescription2(data.description_2);
		setDescription3(data.description_3);
		setFileName1(data.image_1);
		setFileName2(data.image_2);
		setFileName3(data.image_3);
		setType(data.type);
		setAge(data.age);
		setId(data.id);
	}
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const id = params.get("id");
		getData(parseInt(id));
	}, []);

	return (
		<Container>
			<VStack spacing="10px">
				<FormInput
					label="course name"
					placeholder="course name english"
					onChange={(e) => {
						setTitle1(e.target.value);
					}}
					value={title1}
					required
				/>
				<FormInput
					placeholder="course title sinhala"
					onChange={(e) => {
						setTitle2(e.target.value);
					}}
					value={title2}
				/>
				<FormInput
					placeholder="course title tamil"
					onChange={(e) => {
						setTitle3(e.target.value);
					}}
					value={title3}
				/>
				<FormTextArea
					label="Course description"
					placeholder="Course description ENGLISH"
					value={description1}
					onChange={(e) => {
						setDescription1(e.target.value);
						e.target.style.height = "auto";
						e.target.style.height = `${e.target.scrollHeight}px`;
					}}
					required
				/>
				<FormTextArea
					placeholder="Course description SINHALA"
					value={description2}
					onChange={(e) => {
						setDescription2(e.target.value);
						e.target.style.height = "auto";
						e.target.style.height = `${e.target.scrollHeight}px`;
					}}
				/>
				<FormTextArea
					placeholder="Course description TAMIL"
					value={description3}
					onChange={(e) => {
						setDescription3(e.target.value);
						e.target.style.height = "auto";
						e.target.style.height = `${e.target.scrollHeight}px`;
					}}
				/>

				<Divider orientation="horizontal" marginY="30px" />
				<Text
					textAlign="left"
					width="full"
					fontSize="14px"
					lineHeight="10px"
					fontWeight="bold"
				>
					Attach files for ENGLISH
				</Text>
				<Flex
					background="#2A3038"
					padding="5px"
					gap="10px"
					alignItems="center"
					width="full"
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
					<Text isTruncated color="whiteAlpha.700" fontSize={13}>
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
								removeImg(1, () => {
									setFileName1("");
									setSelectedFile1("");
								})
							}
						>
							Remove
						</Button>
					)}
				</Flex>
				<Text
					textAlign="left"
					width="full"
					fontSize="14px"
					lineHeight="14px"
					fontWeight="bold"
				>
					Attach files for SINHALA
				</Text>
				<Flex
					background="#2A3038"
					padding="5px"
					gap="10px"
					alignItems="center"
					width="full"
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
					<Text isTruncated color="whiteAlpha.700" fontSize={13}>
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
								removeImg(2, () => {
									setFileName2("");
									setSelectedFile2("");
								})
							}
						>
							Remove
						</Button>
					)}
				</Flex>
				<Text
					textAlign="left"
					width="full"
					fontSize="14px"
					lineHeight="14px"
					fontWeight="bold"
				>
					Attach files for TAMIL
				</Text>
				<Flex
					background="#2A3038"
					padding="5px"
					gap="10px"
					alignItems="center"
					width="full"
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
					<Text isTruncated color="whiteAlpha.700" fontSize={13}>
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
								removeImg(3, () => {
									setFileName3("");
									setSelectedFile3("");
								})
							}
						>
							Remove
						</Button>
					)}
				</Flex>
				{/* <Flex justifyContent="start" width="100%" gap="20px">
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
							{1 == 1 ? (
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
										width="100%"
										variant="solid"
										onClick={() => imgRef1.current.click()}
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
									<Button
										width="100px"
										h="30px"
										fontSize="13px"
										variant="solid"
										onClick={() => imgRef1.current.click()}
									>
										Select File
									</Button>

									<Text fontSize={10} mt={1} color="gray.400">
										Maximum upload file size: 10 MB
									</Text>
								</>
							)}
							<input
								ref={imgRef1}
								style={{
									position: "absolute",
									opacity: 0,
									pointerEvents: "none",
								}}
								type="file"
								accept="image/*"
								onChange={() => {}}
							/>
						</Flex>
					</Flex>
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
							{1 == 1 ? (
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
										width="100%"
										variant="solid"
										onClick={() => imgRef1.current.click()}
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
									<Button
										width="100px"
										h="30px"
										fontSize="13px"
										variant="solid"
										onClick={() => imgRef1.current.click()}
									>
										Select File
									</Button>

									<Text fontSize={10} mt={1} color="gray.400">
										Maximum upload file size: 10 MB
									</Text>
								</>
							)}
							<input
								ref={imgRef1}
								style={{
									position: "absolute",
									opacity: 0,
									pointerEvents: "none",
								}}
								type="file"
								accept="image/*"
								onChange={() => {}}
							/>
						</Flex>
					</Flex>
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
							{1 == 1 ? (
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
										width="100%"
										variant="solid"
										onClick={() => imgRef1.current.click()}
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
									<Button
										width="100px"
										h="30px"
										fontSize="13px"
										variant="solid"
										onClick={() => imgRef1.current.click()}
									>
										Select File
									</Button>

									<Text fontSize={10} mt={1} color="gray.400">
										Maximum upload file size: 10 MB
									</Text>
								</>
							)}
							<input
								ref={imgRef1}
								style={{
									position: "absolute",
									opacity: 0,
									pointerEvents: "none",
								}}
								type="file"
								accept="image/*"
								onChange={() => {}}
							/>
						</Flex>
					</Flex>
				</Flex> */}

				<Divider orientation="horizontal" marginY="30px" />

				<Flex width="100%" gap="20px">
					<FormSelect
						sx={{ width: "100%" }}
						label="age range"
						required
						onChange={(e) => {
							setAge(e.target.value);
						}}
						value={age}
					>
						<option selected>Select Age Range</option>
						<option value={1}>4 - 9 years</option>
						<option value={2}>10 - 18 years</option>
						<option value={3}>18 plus</option>
						<option value={4}>9 Above - ALL</option>
					</FormSelect>
					<FormSelect
						sx={{ width: "100%" }}
						label="Course Type"
						required
						onChange={(e) => {
							setType(e.target.value);
						}}
						value={type}
					>
						<option selected>Select Type</option>
						<option value={1}>Paid</option>
						<option value={2}>Free</option>
					</FormSelect>
				</Flex>
				<Divider orientation="horizontal" marginY="30px" />
				<HStack w="full" pt="10px">
					<FormButton onClick={submit}>Submit</FormButton>
					<FormButton dark>Cancel</FormButton>
				</HStack>
			</VStack>
		</Container>
	);
};

export default Edit;
