import React, { useState } from "react";
import Container from "../components/Container";
import FormTextArea from "../components/FormTextArea";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import FormSelect from "../components/FormSelect";
import FormButton from "../components/FormButton";
import { useEffect } from "react";
import requests from "../util/requests";
import alertRequest from "../services/alertRequest";

const Settings = () => {
	const [languageMessage, setLanguageMessage] = useState();
	const [welcomeMessage, setWelcomeMessage] = useState();
	const [securityMode, setSecurityMode] = useState();
	const [replyMode, setReplyMode] = useState();
	async function load() {
		const data = await requests.get("/setting");
		setLanguageMessage(data.data.language_msg);
		setWelcomeMessage(data.data.welcome_msg);
		setSecurityMode(data.data.mode.s_mode);
		setReplyMode(data.data.mode.r_mode);
	}
	function submit() {
		const data = {
			welcome: welcomeMessage,
			lang: languageMessage,
			rMode: replyMode,
			sMode: securityMode,
		};
		alertRequest.post("/setting/update", data);
	}
	useEffect(() => {
		load();
	}, []);
	return (
		<Container>
			<FormTextArea
				label="Welcome Message"
				placeholder="Welcome Message"
				value={welcomeMessage}
				onChange={(e) => {
					setWelcomeMessage(e.target.value);
				}}
				sx={{ h: "auto" }}
				required
			/>
			<Text fontSize={11} color="whiteAlpha.800" mt={1}>
				<b>* {"{Name}"}</b> will automatically be replaced with the
				current WhatsApp name of the user
			</Text>
			<FormTextArea
				label="Language Selection Message"
				placeholder="Language Message"
				value={languageMessage}
				onChange={(e) => {
					setLanguageMessage(e.target.value);
					e.target.style.height = "auto";
					e.target.style.height = `${e.target.scrollHeight}px`;
				}}
				sx={{ h: "auto", mt: 2 }}
				required
			/>
			<Flex gap="20px">
				<Flex flexDirection="column" width="100%">
					<FormSelect
						sx={{ width: "100%", mt: 2 }}
						label="message security"
						required
						onChange={(e) => {
							setSecurityMode(e.target.value);
						}}
						value={securityMode}
					>
						<option value={1}>Whitelist Mode</option>
						<option value={2}>Blacklist Mode</option>
					</FormSelect>
					<Text fontSize={11} color="whiteAlpha.800" mt={1}>
						<b>* Whitelist Mode:</b> Only Allow Messages from
						Approved
						<br />
						<b>* Contacts Blacklist Mode:</b> Block Messages from
						Specific Contacts
					</Text>
				</Flex>
				<Flex flexDirection="column" width="100%">
					<FormSelect
						sx={{ width: "100%", mt: 2 }}
						label="reply type"
						required
						onChange={(e) => {
							setReplyMode(e.target.value);
						}}
						value={replyMode}
					>
						<option value={1}>With Reading Chat</option>
						<option value={2}>Without Reading Chat</option>
					</FormSelect>
					<Text fontSize={11} color="whiteAlpha.800" mt={1}>
						<b>* With Reading Chat:</b> Preview Chat before Sending
						Reply <br />
						<b>* Without Reading Chat:</b> Send Reply without
						Reading Chat
					</Text>
				</Flex>
			</Flex>
			<HStack mt={4}>
				<FormButton onClick={submit}>Apply Settings</FormButton>
			</HStack>
		</Container>
	);
};

export default Settings;
