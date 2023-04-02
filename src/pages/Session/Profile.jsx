import React from "react";
import Container from "../../components/Container";
import {
	Heading,
	Avatar,
	Box,
	Text,
	Stack,
	Button,
	Badge,
	HStack,
	Tooltip,
	Grid,
	GridItem,
	Skeleton,
	Flex,
} from "@chakra-ui/react";
import AlertBox from "../../components/AlertBox";
import socketIO from "socket.io-client";

import { FiClock, FiUsers, FiShoppingCart, FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function getTimeDifference(start, end) {
	if (!(start && end)) {
		return false;
	}
	const diffInMs = end - start;

	const diffInSeconds = Math.floor(diffInMs / 1000);
	const days = Math.floor(diffInSeconds / 86400);
	const hours = Math.floor((diffInSeconds % 86400) / 3600);
	const minutes = Math.floor((diffInSeconds % 3600) / 60);
	const seconds = diffInSeconds % 60;

	return `${days<10?"0":""}${days}:${hours<10?"0":""}${hours}:${minutes<10?"0":""}${minutes}:${seconds<10?"0":""}${seconds}`;
}

const Profile = (prop) => {
	const [startTime, setStartTime] = React.useState();
	const [now, setNow] = React.useState();
	React.useEffect(() => {
		const socket = socketIO.connect(
			process.env.REACT_APP_SOCKET_CONNECTION
		);
		socket.on("connect", () => {
			socket.emit("time", "getStartTime");
			socket.on("startTime", (st) => {
				setStartTime(st);
			});
		});
		const timerId = setInterval(() => {
			const now = Date.now();
			setNow(now);
		}, 1000);

		return () => {
			socket.disconnect();
			clearInterval(timerId);
		};
	}, []);
    const navigation = useNavigate();
	return (
		<HStack
			m={8}
			my="16px"
			display="flex"
			alignItems="normal"
			color="white"
			spacing="32px"
		>
			<Box
				maxW={"320px"}
				w={"full"}
				bg="brand.800"
				boxShadow={"2xl"}
				borderRadius="4px"
				p={6}
				textAlign={"center"}
			>
				<Avatar
					size={"xl"}
					src={prop.profilePic}
					alt={"Avatar Alt"}
					mb={4}
					pos={"relative"}
					_after={{
						content: '""',
						w: 4,
						h: 4,
						bg: "green.300",
						border: "2px solid white",
						rounded: "full",
						pos: "absolute",
						bottom: 0,
						right: 3,
					}}
				/>
				<Heading fontSize={"2xl"} fontFamily={"body"}>
					{prop.clientInfo.pushname}
				</Heading>
				<Text fontWeight={600} color={"gray.500"} mb={4}>
					@{prop.clientInfo.user}
				</Text>
				<Text textAlign={"center"} color="gray.400" px={3}>
					{prop.about}
				</Text>

				<Stack
					align={"center"}
					justify={"center"}
					direction={"row"}
					mt={6}
				>
					<Tooltip
						label="The WhatsApp platform on your mobile device"
						placement="top"
					>
						<Badge px={2} py={1} bg="brand.700" fontWeight={"400"}>
							#{prop.clientInfo.platform}
						</Badge>
					</Tooltip>
					<Tooltip
						label="The type of account you have on WhatsApp"
						placement="top"
					>
						<Badge px={2} py={1} bg="brand.700" fontWeight={"400"}>
							#
							{prop.isBusiness
								? "business account"
								: "normal account"}
						</Badge>
					</Tooltip>
				</Stack>

				<Stack mt={8} direction={"row"} spacing={4}>
					<AlertBox
						button={{
							sx: {
								flex: 1,
								fontSize: "sm",
								rounded: "full",
								bg: "brand.700",
								_hover: {
									bg: "gray.700",
								},
							},
							body: "Logout",
						}}
						title="Logout session"
						description="Do you want to log out of this session? This action is irreversible."
					/>
					<Button
						flex={1}
						fontSize={"sm"}
						rounded={"full"}
						bg={"blue.400"}
						color={"white"}
						boxShadow={
							"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
						}
						_hover={{
							bg: "blue.500",
						}}
                        onClick={()=>navigation("/form-submissions/unread")}
					>
						Submissions
					</Button>
				</Stack>
			</Box>
			<Container sx={{ w: "full" }}>
				<Grid templateColumns="repeat(2, 1fr)" gap={6} h="100%">
					<Skeleton
						borderRadius="4px"
						w="100%"
						isLoaded={getTimeDifference(startTime, now)}
					>
						<Box
							bgGradient="linear(to-r, #7928CA, #FF0080)"
							color="white"
							borderRadius="lg"
							boxShadow="md"
							w="100%"
							h="100%"
							display="inline-flex"
							alignItems="center"
							justifyContent="center"
							transition="background 0.5s ease"
							animation="changeGradient 5s ease infinite alternate"
							position="relative"
						>
							<Text fontSize="xl">
								{getTimeDifference(startTime, now)
									? getTimeDifference(startTime, now)
									: "D:H:M:S"}
							</Text>
							<Flex position="absolute" bottom="20px" alignItems="center">
								<Box as={FiClock} fontSize="2xl" mr={1} />
								<Text fontSize="sm" ml={2}>
									Running Time D:H:M:S
								</Text>
							</Flex>
						</Box>
					</Skeleton>
					<Box
						bgGradient="linear(to-r, #ED213A, #93291E)"
						color="white"
						borderRadius="lg"
						boxShadow="md"
						w="100%"
						h="100%"
						display="inline-flex"
						alignItems="center"
						justifyContent="center"
						transition="background 0.5s ease"
						backgroundSize="300% 300%"
					>
						<Box as={FiUsers} fontSize="2xl" mr={2} />
						<Text fontSize="xl">1000</Text>
						<Text fontSize="sm" ml={2}>
							Users
						</Text>
					</Box>
					<Box
						bgGradient="linear(to-r, #00F260, #0575E6)"
						color="white"
						borderRadius="lg"
						boxShadow="md"
						w="100%"
						h="100%"
						display="inline-flex"
						alignItems="center"
						justifyContent="center"
						transition="background 0.5s ease"
						backgroundSize="300% 300%"
					>
						<Box as={FiShoppingCart} fontSize="2xl" mr={2} />
						<Text fontSize="xl">$10,000</Text>
						<Text fontSize="sm" ml={2}>
							Sales
						</Text>
					</Box>
					<Box
						bgGradient="linear(to-r, #FC354C, #0ABFBC)"
						color="white"
						borderRadius="lg"
						boxShadow="md"
						w="100%"
						h="100%"
						display="inline-flex"
						alignItems="center"
						justifyContent="center"
						transition="background 0.5s ease"
						backgroundSize="300% 300%"
					>
						<Box as={FiMail} fontSize="2xl" mr={2} />
						<Text fontSize="xl">5000</Text>
						<Text fontSize="sm" ml={2}>
							Emails
						</Text>
					</Box>
				</Grid>
			</Container>
		</HStack>
	);
};

export default Profile;
