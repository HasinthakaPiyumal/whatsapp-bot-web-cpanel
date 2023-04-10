import { Flex, HStack, Heading, Text, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaHome } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { useLocation, Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const BreadCrumb = (prop) => {
	const pathnames = useLocation()
		.pathname.split("/")
		.filter((path) => path !== "");
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};
	return (
		<HStack justifyContent="space-between" color="white" px={8} pt={8}>
			<Heading as="h3" textTransform="capitalize" fontSize={22}>
				{prop.title}
			</Heading>
			{prop.back ? (
				<Flex alignItems="center" gap={2}>
					<Link to="">
						<FaHome color="#0090e7" fontSize={20} />
					</Link>
					{pathnames.map((path, id) => (
						<React.Fragment key={id}>
							<SlArrowRight color="#6c7293" fontSize={12} />
							<Text
								textTransform="capitalize"
								_hover={{ color: "brand.200" }}
							>
								{path}
							</Text>
						</React.Fragment>
					))}
				</Flex>
			) : (
				<IconButton
					variant="ghost"
					colorScheme="white"
					aria-label="Call Sage"
					_hover={{ background: "#ffffff11" }}
					fontSize="25px"
					padding={2}
					rounded={"full"}
					icon={<BsArrowLeft />}
					onClick={goBack}
				/>
			)}
		</HStack>
	);
};

export default BreadCrumb;
