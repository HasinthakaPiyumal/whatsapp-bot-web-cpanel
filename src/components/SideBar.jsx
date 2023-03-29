import {
	AddIcon,
	ArrowDownIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	HamburgerIcon,
} from "@chakra-ui/icons";
import {
	Avatar,
	AvatarBadge,
	Box,
	Collapse,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { sidebarItems } from "../data/sidebar";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar = (prop) => {
	const sideBarContainerStyle = {
		bg: "brand.800",
		h: "100vh",
		flexDirection: "column",
		w: 244,
	};
	const headBoxStyle = {
		w: "100%",
		h: "70px",
		mH: "70px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		p: 4,
	};
	const profileBoxStyle = {
		w: "100%",
		h: "60px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		px: 4,
	};
	var paths = useLocation().pathname.split("/");
	// var currentPath = paths[1] + (paths[2] ? "/"+paths[2] : "");
	var currentPath = paths[1];
	console.log(currentPath);
	if (currentPath === "") {
		currentPath = "dashboard";
	}

	const colorPack = ["#8f5fe8", "#ffab00", "#fc424a", "#0090e7", "#00d25b"];
	const shuffled = colorPack.sort(() => Math.random() - 0.5);
	function pickRandomColor(count) {
		return shuffled[count % 5];
	}

	const [openedSideBarItem, setOpenedSideBarItem] = useState(currentPath);
	const navigate = useNavigate();
	useEffect(() => {
		setOpenedSideBarItem(currentPath);
	}, [currentPath]);

	return (
		<Flex sx={sideBarContainerStyle}>
			<Box sx={headBoxStyle}>
				<Heading as="h4" size="md" color="white" cursor="pointer">
					Admin panel
				</Heading>
				<HamburgerIcon boxSize={5} color="white" cursor="pointer" />
			</Box>
			<Box
					h="calc(100vh - 70px)"
					overflowY="auto"
					css={{
                        "&::-webkit-scrollbar": {
                          width: "8px",
                          backgroundColor: "#2D3748", // use a darker background color
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "linear-gradient(to bottom, #4A5568, #2D3748)", // use a gradient thumb color
                          borderRadius: "full",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                          background: "linear-gradient(to bottom, #718096, #4A5568)", // use a slightly lighter hover color
                        },
                        "&::-webkit-scrollbar-track": {
                          backgroundColor: "#2D3748",
                          borderRadius: "full",
                        },
                      }}
                      
				>
				<Box sx={profileBoxStyle}>
					<Flex>
						<Avatar
							h="35px"
							w="35px"
							name="Kent Dodds"
							src="https://bit.ly/kent-c-dodds"
						>
							<AvatarBadge
								border="2px solid"
								borderColor="brand.800"
								bg="green"
								boxSize="0.55em"
								m={0.4}
							/>
						</Avatar>
						<Flex
							flexDirection={"column"}
							justifyContent={"center"}
							marginLeft={4}
						>
							<Text size="xs" lineHeight="19px" color="brand.50">
								Kent Dodds
							</Text>
							<Text as="h6" fontSize="12px" color="brand.100">
								Super Admin
							</Text>
						</Flex>
					</Flex>
					<MdOutlineMoreVert color="#6c7293" size={22} />
				</Box>
				<Heading
					as="h4"
					color="brand.100"
					fontSize="14px"
					letterSpacing="0.5px"
					lineHeight="54px"
					paddingLeft="20px"
				>
					Navigation
				</Heading>
				{sidebarItems.map((item, id) => {
					const iconColor = pickRandomColor(id);
					if (item.back) return "";
					console.log(item);
					return (
						<React.Fragment key={id}>
							<div
								onClick={(event) => {
									event.stopPropagation();
									!item.children
										? navigate(item.path)
										: setOpenedSideBarItem(
												item.path === openedSideBarItem
													? ""
													: item.path
										  );
								}}
							>
								<Box
									key={id}
									h="46px"
									w="224px"
									borderRightRadius="100"
									display="flex"
									alignItems="center"
									border="4px solid"
									borderBottom="hidden"
									borderRight="hidden"
									borderTop="hidden"
									borderLeft={
										currentPath === item.path
											? `4px solid ${iconColor}`
											: "4px solid transparent"
									}
									cursor={"pointer"}
									bg={
										currentPath === item.path
											? "brand.900"
											: ""
									}
									sx={{
										":hover": { bg: "brand.900" },
										position: "relative",
									}}
								>
									<Box
										display={"flex"}
										marginLeft={4}
										justifyContent={"center"}
										alignItems={"center"}
										bg={"brand.700"}
										borderRadius={60}
										w="31px"
										h="31px"
									>
										{(item.icon && (
											<item.icon
												color={iconColor}
												size={14}
											/>
										)) || <AddIcon color={"green"} />}
									</Box>
									<Text
										color={
											currentPath === item.path
												? "white"
												: "brand.100"
										}
										textTransform={"capitalize"}
										marginLeft={"10px"}
										fontWeight={
											currentPath === item.path
												? "bold"
												: "thin"
										}
										fontSize={"15px"}
									>
										{item.title}
									</Text>
									{item.children &&
										item.children.length > 0 && (
											<ChevronDownIcon
												position="absolute"
												right={3}
												color={"#6c7293"}
											/>
										)}
								</Box>
							</div>
							{item.children && item.children.length > 0 && (
								<Collapse
									in={openedSideBarItem === item.path}
									animateOpacity
								>
									{item.children.map((child, index) => (
										<Box
											key={index}
											onClick={() =>
												navigate(
													item.path + "/" + child.path
												)
											}
											textTransform={"capitalize"}
											marginLeft={"60px"}
											color={
												paths[2] === child.path
													? "white"
													: "#6c7293"
											}
											_hover={{ color: "white" }}
											fontSize={"13.68px"}
											lineHeight="13.68px"
											py="8px"
											cursor="pointer"
										>
											{child.title}
										</Box>
									))}
								</Collapse>
							)}
						</React.Fragment>
					);
				})}
			</Box>
		</Flex>
	);
};

export default SideBar;
