import { Flex } from "@chakra-ui/react";
import React from "react";

const Container = (prop) => {
	return (
		<Flex
			color="white"
			sx={prop.sx}
			bg="brand.800"
			mx={8}
			my={4}
			p={7}
			borderRadius="4px"
			flexDirection="column"
		>
			{prop.children}
		</Flex>
	);
};

export default Container;
