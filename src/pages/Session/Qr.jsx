import React from "react";
import Container from "../../components/Container";
import { Box, Heading } from "@chakra-ui/react";
import QRCode from "react-qr-code";
const Qr = (prop) => {
	return (
		<Container>
			<Heading as="h2" fontSize="20" color="white">
				Instruction
			</Heading>
			<Box borderWidth="2px" p="4" w={300} h={300} bg="white">
				{prop.qr ? (
					<QRCode
						size={256}
						value={prop.qr}
						viewBox={`0 0 256 256`}
					/>
				) : (
					<>Loading qr</>
				)}
			</Box>
		</Container>
	);
};

export default Qr;
