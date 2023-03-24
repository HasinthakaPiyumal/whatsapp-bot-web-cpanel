import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, Input } from "@chakra-ui/react";
import router from "./router";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";

import "./styles/index.css";
import 'react-toastify/dist/ReactToastify.css';

const routes = createBrowserRouter(router);
createRoot(document.getElementById("root")).render(
	<ChakraProvider theme={theme}>
		<div data-theme="dark">
            <ToastContainer/>
			<RouterProvider router={routes} />
		</div>
	</ChakraProvider>
);
