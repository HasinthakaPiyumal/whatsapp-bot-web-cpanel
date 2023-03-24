import { Button } from "@chakra-ui/react";
import React from "react";

const FormButton = (prop) => {
	return (
		<Button
			bg={prop.dark ? "brand.900" : "#0090e7"}
			h="28.6px"
			color="white"
			fontSize="15px"
			fontWeight={"thin"}
            borderRadius="2px"
            sx={prop.sx}
			_hover={{ bg: prop.dark ? "brand.600" : "#0050c7" }}
            onClick={prop.onClick}
		>
			{prop.children}
		</Button>
	);
};

export default FormButton;
