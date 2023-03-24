import { Avatar, Flex, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillBell, AiFillMail } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
const Navbar = () => {
	const navBarContainerStyles = {
		bg: "brand.800",
		h: "70px",
		display: "flex",
		alignItems: "center",
		px: 8,
		color: "brand.100",
	};
	return (
		<Flex
			sx={navBarContainerStyles}
			justifyContent="space-between"
			gap="100px"
		>
			<Input
				maxW="400px"
				_placeholder={{ color: "#6c7293" }}
				placeholder="Search User"
				fontSize="14px"
				focusBorderColor="none"
				h="38px"
				border="1px solid #2A2D3A"
				outline="none"
				_focus={{
					_hover: { border: "1px solid" },
					border: "1px solid",
				}}
				_hover={{ border: "1px solid #2A2D3A" }}
			/>

			<Flex alignItems="center" gap="32px">
				<RxDashboard fontSize={18} color="white" />
				<AiFillMail fontSize={18} color="white" />
				<AiFillBell fontSize={18} color="white" />
				<HStack>
					<Avatar
						h="35px"
						w="35px"
						name="Kent Dodds"
						src="https://bit.ly/kent-c-dodds"
					/>
					<Text color="white" fontSize="14px" ml="16px">
						Kent Dodds
					</Text>
				</HStack>
			</Flex>
		</Flex>
	);
};

export default Navbar;
