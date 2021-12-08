import React, { useContext } from "react";
import { CustomThemeContext } from "./theme/CustomThemeProvider";
import { makeStyles } from "@material-ui/core";
import "./App.css";
import Navigation from "./navigation";

export default function App() {
	const { currentTheme, setTheme } = useContext(CustomThemeContext);
	const isDark = Boolean(currentTheme === "dark");

	const handleThemeChange = (event) => {
		const { checked } = event.target;
		if (checked) {
			setTheme("dark");
		} else {
			setTheme("normal");
		}
	};

	return (
		<>
			<Navigation />
		</>
	);
}
