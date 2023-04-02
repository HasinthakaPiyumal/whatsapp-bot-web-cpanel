import { Button } from "@chakra-ui/react";
import React from "react";

const FormButton = (prop) => {
	return (
		<Button
			bg={prop.background ? prop.background : prop.dark ? "brand.900" : "#0090e7"}
			h="28.6px"
			color={prop.color || "white"}
			fontSize="15px"
			fontWeight={"thin"}
			borderRadius="2px"
			sx={prop.sx}
			as={prop.as}
			htmlFor={prop.htmlFor}
			_hover={{ bg: prop.background ?prop.background:prop.dark ? "brand.600" : "#0050c7" }}
			onClick={prop.onClick}
		>
			{prop.children}
		</Button>
	);
};

export default FormButton;
