import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { sidebarItems } from "../data/sidebar";
import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

function getTitleByPath(path, list) {
	for (let i = 0; i < list.length; i++) {
		if (list[i].path === path) {
			return list[i].title;
		}
	}
	return null; // return null if no matching object is found
}
function getHiddenByPath(path, list) {
	for (let i = 0; i < list.length; i++) {
		if (list[i].path === path) {
			return list[i].hidden;
		}
	}
	return false; // return null if no matching object is found
}
function titled(str) {
	if (str === undefined) return;
	return str.charAt(0).toUpperCase() + str.slice(1);
}
const RootLayout = (prop) => {
	var currentPath = useLocation().pathname.split("/")[1];
	useEffect(() => {
		document.title =
			"CPanel - " +
			titled(getTitleByPath(currentPath || "dashboard", sidebarItems));
	}, [currentPath]);

	return (
		<div style={{ display: "flex" }}>
			<div style={{ flex: "fixed", width: "244px" }}>
				<Sidebar parentId={prop.parentId} />
			</div>
			<div style={{ flex: "auto", background: "#0F1015" }}>
				<Navbar />
				<Box
					h="calc(100vh - 70px)"
					overflowY="scroll"
					css={{
						"&::-webkit-scrollbar": {
							width: "8px",
							backgroundColor: "#2D3748", // use a darker background color
						},
						"&::-webkit-scrollbar-thumb": {
							background:
								"linear-gradient(to bottom, #4A5568, #2D3748)", // use a gradient thumb color
							borderRadius: "full",
						},
						"&::-webkit-scrollbar-thumb:hover": {
							background:
								"linear-gradient(to bottom, #718096, #4A5568)", // use a slightly lighter hover color
						},
						"&::-webkit-scrollbar-track": {
							backgroundColor: "#2D3748",
							borderRadius: "full",
						},
					}}
				>
					{getHiddenByPath(
						currentPath || "dashboard",
						sidebarItems
					) ? (
						<BreadCrumb
							title={getTitleByPath(
								currentPath || "dashboard",
								sidebarItems
							)}
						/>
					) : (
						<BreadCrumb
							title={getTitleByPath(
								currentPath || "dashboard",
								sidebarItems
							)}
							back
						/>
					)}

					<Outlet />
					{currentPath === "" && <Dashboard />}
				</Box>
			</div>
		</div>
	);
};

export default RootLayout;
