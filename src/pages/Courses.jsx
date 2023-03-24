import React, { useState } from "react";
import FormInput from "../components/FormInput";
import Container from "../components/Container";
import {
	FormLabel,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	VStack,
} from "@chakra-ui/react";
import FormSelect from "../components/FormSelect";
import FormButton from "../components/FormButton";

const Courses = () => {
	const [name, setName] = useState();
	const [duration, setDuration] = useState();

	return (
		<Container>
			<VStack spacing="10px">
				<FormInput
					placeholder="course name"
					label="course name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					required
				/>

				<HStack w="100%">
					<FormSelect
						sx={{ w: "130px" }}
						label="course duration"
						required
					>
						<option>Years</option>
						<option>Month</option>
						<option>Weeks</option>
						<option>Days</option>
					</FormSelect>
					<FormInput
						placeholder="course duration"
						value={duration}
						onChange={(e) => {
							setDuration(e.target.value);
						}}
						sx={{ pt: "26px" }}
					/>
				</HStack>
				<FormSelect label="age range" required>
					<option selected disabled>Age range</option>
					<option>9 years above</option>
					<option>9 years below</option>
				</FormSelect>
				<FormLabel
					w="full"
					color="white"
					fontWeight="bold"
					fontSize="14px"
				>
					Admission fee
					<InputGroup mt="5px">
						<InputLeftElement
							pointerEvents="none"
							color="gray.300"
							fontSize="1em"
							children="Rs."
						></InputLeftElement>
						<Input
							placeholder={"Admission fee"}
							fontSize="15px"
							focusBorderColor="#6c7293"
							outline="none"
							color="white"
							borderRadius="2px"
							bg="brand.600"
							// p="10px"
							h="38px"
							border="none"
                            _placeholder={{color:"#6c7293"}}
						></Input>
					</InputGroup>
				</FormLabel>
				<FormLabel
					w="full"
					color="white"
					fontWeight="bold"
					fontSize="14px"
				>
					Monthly fee
					<InputGroup mt="5px">
						<InputLeftElement
							pointerEvents="none"
							color="gray.300"
							fontSize="1em"
							children="Rs."
						></InputLeftElement>
						<Input
							placeholder={"Monthly fee"}
							fontSize="15px"
							focusBorderColor="#6c7293"
							outline="none"
							color="white"
							borderRadius="2px"
							bg="brand.600"
							// p="10px"
							h="38px"
							border="none"
                            _placeholder={{color:"#6c7293"}}
						></Input>
					</InputGroup>
				</FormLabel>
				<HStack w="full" pt="10px">
					<FormButton>Submit</FormButton>
					<FormButton dark>Cancel</FormButton>
				</HStack>
			</VStack>
		</Container>
	);
};

export default Courses;
