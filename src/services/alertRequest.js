import requests from "../util/requests";
import alert from "./alert";
import { toast } from "react-toastify";

const get = async (
	path,
	body,
	callback = () => {},
	headers = {},
	isJSON = true
) => {
	const id = toast.loading("Please wait...", { type: "info" });
	if (isJSON) headers["content-type"] = "application/json";
	const result = await requests.get(path, headers, body);
	toast.dismiss(id);
	if (result.status) {
		callback(result.data);
		alert.success(result.message);
	} else {
		alert.error(result.message);
	}
};
const post = async (
	path,
	body,
	callback = () => {},
	headers = {},
	isJSON = true
) => {
	const id = toast.loading("Please wait...", { type: "info" });
	if (isJSON) {
		headers["content-type"] = "application/json";
	} else {
		headers["content-type"] = "multipart/form-data";
	}
	const result = await requests.post(path, headers, body);
	toast.dismiss(id);
	if (result.status) {
		alert.success(result.message);
		callback(result.data);
	} else {
		alert.error(result.message);
	}
};

export default { get, post };
