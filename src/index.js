import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CustomThemeProvider from "./theme/CustomThemeProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<CustomThemeProvider>
			<CssBaseline />
			<App />
		</CustomThemeProvider>
	</BrowserRouter>,
	document.querySelector("#root")
);
