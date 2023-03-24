/* eslint-disable import/no-anonymous-default-export */
import { toast } from "react-toastify";

const success = (msg) => {
    console.log(msg);
	return toast.success(msg, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
	});
};

const error = (msg) => {
	return toast.error(msg, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
	});
};

export default { success, error };
