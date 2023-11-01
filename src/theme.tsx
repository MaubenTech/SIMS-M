import React, { createContext, useState, useMemo } from "react";
import { Theme, createTheme } from "@mui/material/styles";

type Mode = "dark" | "light";

type ColorShades = {
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
};

type TokenType = { black: ColorShades; yellow: ColorShades };

export const tokens = (mode: Mode): TokenType => {
	return {
		black: {
			100: "#cccccc",
			200: "#999999",
			300: "#666666",
			400: "#333333",
			500: "#000000",
			600: "#000000",
			700: "#000000",
			800: "#000000",
			900: "#000000",
		},
		yellow: {
			100: "#f8f1e5",
			200: "#f1e2cb",
			300: "#e9d4b1",
			400: "#e2c597",
			500: "#dbb77d",
			600: "#af9264",
			700: "#836e4b",
			800: "#584932",
			900: "#2c2519",
		},
	};
};

export const themeSettings = (mode: Mode) => {
	const colors = tokens(mode);

	return {
		palette: {
			mode: mode,
			...(mode === "dark"
				? {
						black: {
							main: colors.black[500],
						},
				  }
				: { yellow: { main: colors.yellow[500] } }),
		},
		typography: {
			fontFamily: ['"Roboto", sans-serif'].join(","),
		},
	};
};

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = (): [
	Theme,
	{
		toggleColorMode: () => void;
	}
] => {
	const [mode, setMode] = React.useState<Mode>("light");

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === "dark" ? "light" : "dark")),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return [theme, colorMode];
};
