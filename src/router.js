import { sidebarItems } from "./data/sidebar";
import RootLayout from "./layouts/RootLayout";
import LoginPage from "./routes/Login";

const router = [
	{
		path: "login",
		element: <LoginPage />,
	},
	{
		path: "/",
		element: <RootLayout />,
        redirectTo:"/dashboard",
		children: sidebarItems.map((item) => ({
            path: item.path,
            element: item.page && <item.page/>,
        })),
	},
];
export default router;
