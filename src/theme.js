import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	config: {
		initialColorMode: "dark",
	},
	colors: {
		brand: {
			50: "#FFFFFF",
			100: "#6c7293",
			200: "#0090E7",
			// 300: "#2A2D3A",
			// 400: "#F96324",
			// 500: "#F96324",
			600: "#2a3038",
			700: "#2A2D3A",
			800: "#191C24",
			900: "#0F1015",
		},
	},
});
