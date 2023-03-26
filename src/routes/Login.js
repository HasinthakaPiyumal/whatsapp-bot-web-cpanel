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

// import alertRequest
import alertRequest from "../services/alertRequest";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function setAccessTokenCookie(accessToken, expiration=60*60*24) {
	const date = new Date();
	date.setTime(date.getTime() + expiration * 1000); // Convert expiration from seconds to milliseconds
	Cookies.set("access_token", accessToken, { expires: date });
}

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passState, setPassState] = useState(true);
    const navigate = useNavigate()
    function onLogged(data) {
        setAccessTokenCookie(data.accessToken)
        navigate('/dashboard');
    }
    
	const handleSubmit = (event) => {
		event.preventDefault();
		alertRequest.post("/panel/login", { email, password }, {}, onLogged);
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
						type={passState ? "password" : "text"}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						required
						rightElement={
							passState ? (
								<ViewIcon
									cursor="pointer"
									height={38}
									marginTop={2.5}
									onClick={() => setPassState(false)}
								/>
							) : (
								<ViewOffIcon
									cursor="pointer"
									height={38}
									marginTop={2.5}
									onClick={() => setPassState(true)}
								/>
							)
						}
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
