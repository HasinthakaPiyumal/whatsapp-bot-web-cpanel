import React from "react";
import Container from "../components/Container";
import {
  Box,
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiUsers, FiMessageSquare, FiActivity } from "react-icons/fi";

const Dashboard = () => {
  const userCount = 500; // Replace with your actual data
  const totalConversations = 1000; // Replace with your actual data
  const revenue = "$10,000"; // Replace with your actual data

  const cardBgColor = useColorModeValue("white", "gray.800");
  const cardIconColor = useColorModeValue("gray.700", "gray.100");
  const textColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      mx={8}
      my={4}
      alignItems="center"
    >
      <StatCard
        title="Today's User Count"
        icon={<FiUsers size={24} color={cardIconColor} />}
        stat={userCount}
        cardBgColor="#0077B6"
        textColor="white"
      />
      <StatCard
        title="Total Conversations"
        icon={<FiMessageSquare size={24} color={cardIconColor} />}
        stat={totalConversations}
        cardBgColor="#0096C7"
        textColor="white"
      />
      <StatCard
        title="Total Revenue"
        icon={<FiActivity size={24} color={cardIconColor} />}
        stat={revenue}
        cardBgColor="#00B4D8"
        textColor="white"
      />
    </Flex>
  );
};

const StatCard = ({ title, icon, stat, cardBgColor, textColor }) => (
  <Box
    bg={cardBgColor}
    p={4}
    borderRadius="md"
    boxShadow="md"
    mb={4}
    w={{ base: "100%", sm: "45%", md: "30%" }}
  >
    <Flex alignItems="center" mb={2}>
      <Box
        bg="white"
        color={cardBgColor}
        borderRadius="full"
        p={2}
        mr={2}
      >
        {icon}
      </Box>
      <Heading size="md" color={textColor}>
        {title}
      </Heading>
    </Flex>
    <Text fontSize="3xl" fontWeight="bold" color={textColor}>
      {stat}
    </Text>
  </Box>
);

export default Dashboard;
