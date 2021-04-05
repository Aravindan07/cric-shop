import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import setupMockServer from "./server/mock.server.js";
import MainContextProvider from "./context/main-context";

setupMockServer();

console.log("Checking Index is Running");

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<MainContextProvider>
				<App />
			</MainContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
