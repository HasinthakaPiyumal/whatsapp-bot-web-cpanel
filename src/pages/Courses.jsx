import React, { useState } from "react";
import FormInput from "../components/FormInput";
import Container from "../components/Container";
import {
	Button,
	Divider,
	Flex,
	FormLabel,
	HStack,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	VStack,
} from "@chakra-ui/react";
import FormSelect from "../components/FormSelect";
import FormButton from "../components/FormButton";
import FormTextArea from "../components/FormTextArea";
import { useRef } from "react";
import alertRequest from "../services/alertRequest";

const Courses = () => {
	const [title1, setTitle1] = useState();
	const [title2, setTitle2] = useState();
	const [title3, setTitle3] = useState();
	const [type, setType] = useState();
	const [age, setAge] = useState();
	const [image1, setImage1] = useState();
	const [image2, setImage2] = useState();
	const [image3, setImage3] = useState();
	const [description1, setDescription1] = useState();
	const [description2, setDescription2] = useState();
	const [description3, setDescription3] = useState();

	const imgRef1 = useRef();

	function submit() {
		const data = {
			title1: title1,
			title2: title2,
			title3: title3,
			type: type,
			age: age,
			image1: image1,
			image2: image2,
			image3: image3,
			description1: description1,
			description2: description2,
			description3: description3,
		};
		alertRequest.post("/course/add", data);
	}

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
				<Flex justifyContent="start" width="100%" gap="20px">
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
				</Flex>
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
					</FormSelect>
					<FormSelect
						sx={{ width: "100%" }}
						label="age range"
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

export default Courses;
