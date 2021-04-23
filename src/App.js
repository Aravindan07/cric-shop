import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useMainContext } from "./context/main-context";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import ProductDescription from "./pages/ProductDescription/index";
import Cart from "./pages/Cart";
import Loader from "./components/Loader";
import ProductsByCategory from "./pages/ProductsByCategory";

function App() {
	const { loadProducts, loadWishList, loadCartList, loadCategories, state } = useMainContext();

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			loadProducts();
			loadWishList();
			loadCartList();
			loadCategories();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="flex-col">
			{state.isLoading && <Loader />}
			<Navbar />
			<div className="main-container w100 padding-t8 padding-b8">
				<Switch>
					<Route path="/" exact component={Products} />
					<Route path="/cart" component={Cart} />
					<Route path="/wishlist" component={Wishlist} />
					<Route path="/products/:productId" component={ProductDescription} />
					<Route path="/categories/:categoryName" component={ProductsByCategory} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
