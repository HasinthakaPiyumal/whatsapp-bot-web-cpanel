import Cookies from "js-cookie";
import axios from "axios";
// Get the value of the access_token cookie
const accessToken = Cookies.get("access_token");

const get = async (path = "", headers={}, body) => {
	const url = process.env.REACT_APP_SOCKET_CONNECTION + path;
	let res = { status: false, message: "Something went wrong" };
    headers["authorization"] = "Bearer " + accessToken;
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
    headers["authorization"] = "Bearer " + accessToken;
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
