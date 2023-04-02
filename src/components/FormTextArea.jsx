import React, { useEffect, useRef } from "react";
import {
	Button,
	Flex,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	Textarea,
} from "@chakra-ui/react";

const FormTextArea = (prop) => {
	function titled(str) {
		if (str === undefined) return;
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	const textAreaRef = useRef(null);
	useEffect(() => {
		if (textAreaRef.current) {
			textAreaRef.current.style.height = "auto";
			textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
		}
	}, [prop.value]);

	function handleChange(e) {
		if (textAreaRef.current) {
			textAreaRef.current.style.height = "auto";
			textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
		}
		if (prop.onChange) prop.onChange(e);
	}
	return (
		<FormLabel
			color="white"
			fontWeight="bold"
			fontSize="14px"
			w="full"
			margin={0}
			sx={prop.sx}
		>
			<Flex>
				{titled(prop.label)}{" "}
				{prop.required && (
					<Text paddingLeft={1} color="red.400">
						*
					</Text>
				)}
			</Flex>
			<InputGroup>
				<Textarea
					placeholder={titled(prop.placeholder || prop.placeHolder)}
					onChange={prop.onChange}
					value={prop.value}
					type={prop.type || "text"}
					fontSize="15px"
					focusBorderColor="#6c7293"
					outline="none"
					color="white"
					borderRadius="2px"
					bg="brand.600"
					p="10px"
					h="38px"
					border="none"
					_placeholder={{ color: "#6c7293" }}
					mt={titled(prop.label) && "5px"}
					sx={prop.areaSx}
					ref={textAreaRef}
				></Textarea>
				{prop.rightElement && (
					<InputRightElement>{prop.rightElement}</InputRightElement>
				)}
			</InputGroup>
		</FormLabel>
	);
};

export default FormTextArea;
