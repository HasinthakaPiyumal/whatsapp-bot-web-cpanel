import React, { useState } from "react";

// chakra-ui components
import {
	Checkbox,
	Flex,
	HStack,
	Heading,
	Link,
	VStack,
} from "@chakra-ui/react";

// Login style sheet
import "../styles/login.css";

// Custom components
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

// import alert
import alert from "../services/alert";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(email, password);
		alert.success("asdas");
	};

	return (
		<div className="container">
			<Flex
				color="white"
				bg="#191C24fc"
				p={12}
				py={16}
				borderRadius="4px"
				flexDirection="column"
				w="lg"
				backdropFilter="blur(100px)"
			>
				<Heading
					as="h2"
					fontSize="22px"
					borderBottom="3px solid #ffffff33"
					paddingBottom="5px"
				>
					LOGIN
				</Heading>

				<VStack spacing={2} mt="50px">
					<FormInput
						label="Email Or Username"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						required
					/>
					<FormInput
						label="Password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						required
					/>
				</VStack>
				<HStack mt="25px" justifyContent="space-between">
					<Checkbox colorScheme="cyan" color="brand.100" gap="10px">
						Remember me
					</Checkbox>
					<Link color="brand.200">Forgot Password?</Link>
				</HStack>
				<FormButton
					sx={{ h: 9, fontSize: 16, mt: "50px" }}
					onClick={handleSubmit}
				>
					Login
				</FormButton>
			</Flex>
		</div>
	);
}

export default LoginPage;
