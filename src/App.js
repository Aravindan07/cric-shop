import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useWishList } from "./context/wishlistContext";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import ProductDescription from "./pages/ProductDescription/index";
import Cart from "./pages/Cart";

function App() {
	const { loadProducts } = useWishList();
	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			console.log("Inside app use effect!");
			loadProducts();
		}
		return () => {
			isMounted = false;
		};
	}, []);
	return (
		<div className="flex-col">
			<Navbar />
			<div className="main-container w100 padding-t8 padding-b8">
				<Switch>
					<Route path="/" exact component={Products} />
					<Route path="/cart" component={Cart} />
					<Route path="/wishlist" component={Wishlist} />
					<Route path="/products/:productId" component={ProductDescription} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
