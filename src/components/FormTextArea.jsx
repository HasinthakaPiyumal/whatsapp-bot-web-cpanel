import React from "react";
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
				></Textarea>
				{prop.rightElement && (
					<InputRightElement>
						{prop.rightElement}
					</InputRightElement>
				)}
			</InputGroup>
		</FormLabel>
	);
};

export default FormTextArea;
