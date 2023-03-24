import React, { useEffect, useState } from "react";
import Qr from "./Qr";
import socketIO from "socket.io-client";
import Profile from "./Profile";
import Initialize from "./Initialize";

const Index = () => {
	const [qr, setQr] = useState("");
	const [state, setState] = useState();
	useEffect(() => {
		const socket = socketIO.connect(process.env.REACT_APP_SOCKET_CONNECTION);
		socket.on("connect", () => {
			socket.emit("web state", "getState");
			socket.on("web state", (st) => {
				setState(st);
			});
			socket.on("qr", (qrCode) => {
				setQr(qrCode);
			});
		});

		return () => {
			socket.disconnect();
		};
	}, []);
	

	if (state) {
		if (state.connected) {
			return (
				<Profile
					profilePic={state.profilePic}
					about={state.about.status}
					clientInfo={state.clientInformation}
                    isBusiness={state.isBusiness}
				/>
			);
		} else if (qr) {
			return <Qr qr={qr} />;
		}
	}
	return <Initialize />;
};

export default Index;
