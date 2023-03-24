import React from "react";
import { Flex, FormLabel, Select, Text } from "@chakra-ui/react";

const FormSelect = (prop) => {
	function titled(str) {
		if (str === undefined) return;
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	return (
		<FormLabel sx={prop.sx} color="white" fontWeight="bold" fontSize="14px" w="full" margin={0}>
			<Flex>
				{titled(prop.label)}{" "}
				{prop.required&&<Text paddingLeft={1} color="red.400">
					*
				</Text>}
			</Flex>
			<Select
				placeholder={titled(prop.placeholder)}
                onChange={prop.onChange}
                value={prop.value}
				fontSize="15px"
				focusBorderColor="#6c7293"
				outline="none"
				color="white"
				borderRadius="2px"
				bg="brand.600"
				h="38px"
				border="none"
				mt={titled(prop.label) && "5px"}
			>{prop.children}</Select>
		</FormLabel>
	);
};

export default FormSelect;
