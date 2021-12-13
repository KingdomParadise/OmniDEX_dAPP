import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.querySelector("#root")
);
