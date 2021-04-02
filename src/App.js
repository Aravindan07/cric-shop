import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Navbar from "./components/Navbar";
import { useWishList } from "./context/wishlistContext";
import Products from "./Products";
import Wishlist from "./Wishlist";

function App() {
	const { loadProducts } = useWishList();
	useEffect(() => {
		console.log("Inside app use effect!");
		loadProducts();
	}, []);
	return (
		<div className="flex-col">
			<Navbar />
			<div className="main-container w100 padding-t8 padding-b8">
				<Switch>
					<Route path="/" exact component={Products} />
					<Route path="/cart" component={Cart} />
					<Route path="/wishlist" component={Wishlist} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
