import { Flex, HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaHome } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { useLocation, Link } from "react-router-dom";

const BreadCrumb = (prop) => {
	const pathnames = useLocation()
		.pathname.split("/")
		.filter((path) => path !== "");
	return (
		<HStack justifyContent="space-between" color="white" px={8} pt={8}>
			<Heading as="h3" textTransform="capitalize" fontSize={22}>
				{prop.title}
			</Heading>
			<Flex alignItems="center" gap={2}>
				<Link to="">
					<FaHome color="#0090e7" fontSize={20} />
				</Link>
				{pathnames.map((path,id) => (
					<React.Fragment key={id}>
						<SlArrowRight color="#6c7293" fontSize={12} />
						<Link to={path}>
							<Text textTransform="capitalize" _hover={{color:"brand.200"}}>{path}</Text>
						</Link>
					</React.Fragment>
				))}
			</Flex>
		</HStack>
	);
};

export default BreadCrumb;
