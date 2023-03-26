import axios from "axios";

const get = async (path = "", headers, body) => {
	const url = process.env.REACT_APP_SOCKET_CONNECTION + path;
	let res = { status: false, message: "Something went wrong" };
	try {
		const tRes = await axios.get(url, {
			headers,
			body,
			withCredentials: true,
		});
		res = res = tRes.data;
	} catch (e) {
		const { message } = e.response.data;
		if (message) {
			res = e.response.data;
		}
	}
	return res;
};
const post = async (path, headers, body) => {
	const url = process.env.REACT_APP_SOCKET_CONNECTION + path;
	let res = { status: false, message: "Something went wrong" };
	try {
		const tRes = await axios.post(url, body, {
			headers,
			withCredentials: true,
		});
		res = res = tRes.data;
	} catch (e) {
		const { message } = e.response.data;
		if (message) {
			res = e.response.data;
		}
	}
	return res;
};

export default { get, post };
