import { sidebarItems } from "./data/sidebar";
import RootLayout from "./layouts/RootLayout";
import LoginPage from "./routes/Login";
import { redirect } from "react-router-dom";

const router = [
	{
		path: "login",
		element: <LoginPage />,
	},
	{
		path: "/",
		element: <RootLayout />,
		loader: async () => {
            const isAuthenticated = await fetch(process.env.REACT_APP_SOCKET_CONNECTION+"/authenticate",{'credentials':'include'});
            const auth = await isAuthenticated.json();
            console.log(auth);
            if(auth.status){
                return <RootLayout />;
            }
			return redirect("/login");
		},
		children: sidebarItems.map((item) => ({
			path: item.path,
			element: item.page && <item.page />,
		})),
	},
];
export default router;
