import React from "react";
import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";

const FormInput = (prop) => {
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
			<Input
				placeholder={titled(prop.placeholder)}
				onChange={prop.onChange}
				value={prop.value}
				fontSize="15px"
				focusBorderColor="#6c7293"
				outline="none"
				color="white"
				borderRadius="2px"
				bg="brand.600"
				p="10px"
				h="38px"
				border="none"
                _placeholder={{color:"#6c7293"}}
				mt={titled(prop.label) && "5px"}
			></Input>
		</FormLabel>
	);
};

export default FormInput;
