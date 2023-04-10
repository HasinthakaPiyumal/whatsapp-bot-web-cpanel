import { Avatar, Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import AlertBox from "./AlertBox";
import Cookies from "js-cookie";

function logout() {
	Cookies.remove("access_token");
	window.location.reload();
}
const Navbar = () => {
	const navBarContainerStyles = {
		bg: "brand.800",
		h: "70px",
		display: "flex",
		alignItems: "center",
		px: 8,
		color: "brand.100",
	};
	const navigation = useNavigate();
	return (
		<Flex
			sx={navBarContainerStyles}
			justifyContent="space-between"
			gap="100px"
		>
			<FormButton onClick={() => navigation("/special-keywords/add")}>
				Add New Keyword
			</FormButton>

			<Flex alignItems="center" gap="20px">
				<RxDashboard
					fontSize={18}
					color="white"
					onClick={() => {
						navigation("/dashboard");
					}}
					cursor="pointer"
				/>
				<AlertBox
					button={{
						sx: {
							flex: 1,
							fontSize: "sm",
							size: "sm",
							h: "32px",
							color: "white",
							bg: "red.700",
							_hover: {
								bg: "red.800",
							},
						},
						body: "Logout",
					}}
					title="Logout session"
					description="Do you want to log out of this session? This action is irreversible."
					onSuccess={logout}
				/>
				<HStack>
					<Avatar
						h="35px"
						w="35px"
						name="Super Admin"
						background="brand.900"
						src="https://bit.ly/kent-c-doddsa"
					/>
					<Text color="white" fontSize="14px" ml="16px">
						Super Admin
					</Text>
				</HStack>
			</Flex>
		</Flex>
	);
};

export default Navbar;
