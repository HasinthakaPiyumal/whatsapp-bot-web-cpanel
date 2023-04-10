import { sidebarItems } from "./data/sidebar";
import RootLayout from "./layouts/RootLayout";
import LoginPage from "./routes/Login";
import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
// Get the value of the access_token cookie
const accessToken = Cookies.get("access_token");
const router = [
	{
		path: "login",
		element: <LoginPage />,
        loader: async () => {
			try {
				const isAuthenticated = await axios.post(
					process.env.REACT_APP_SOCKET_CONNECTION + "/authenticate",
					{ accessToken: accessToken }
				);
				const auth = isAuthenticated.data;
				if (auth.status) {
					return redirect("/dashboard");
				}
			} catch (e) {}
			return <LoginPage />;
		},
	},
	{
		path: "/",
		element: <RootLayout />,
		loader: async () => {
			try {
				const isAuthenticated = await axios.post(
					process.env.REACT_APP_SOCKET_CONNECTION + "/authenticate",
					{ accessToken: accessToken }
				);
				const auth = isAuthenticated.data;
				if (auth.status) {
					return <RootLayout />;
				}
			} catch (e) {}
			return redirect("/login");
		},
		children: sidebarItems.map((item) => ({
			path: item.path,
			element: item.page && <item.page />,
			children:
				item.children &&
				item.children.map((item) => ({
					path: item.path,
					element: item.page && <item.page />,
				})),
		})),
	},
];
export default router;
