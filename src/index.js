import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import setupMockServer from "./api/mock.server.js";
import WishListProvider from "./context/wishlistContext";
import CartListProvider from "./context/cartContext.js";

setupMockServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<WishListProvider>
				<CartListProvider>
					<App />
				</CartListProvider>
			</WishListProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
