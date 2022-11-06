import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ECommerceContextProvider from "./context/eCommerceContext";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ECommerceContextProvider>
				<App />
			</ECommerceContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
