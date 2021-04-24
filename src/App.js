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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

	toast.configure();
	// const notify = () => toast.success(state.message);

	return (
		<div className="flex-col">
			{state.isLoading && <Loader />}
			<Navbar />
			<ToastContainer />
			{/* {state.message && notify()} */}
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
