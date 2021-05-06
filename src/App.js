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
import AccountPage from "./pages/AccountPage";
import { toast, ToastContainer } from "react-toastify";
import { PrivateRoute } from "./privateRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const { loadEssentials, state } = useMainContext();

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			loadEssentials();
		}
		return () => {
			isMounted = false;
		};
	}, []);

	toast.configure();

	return (
		<div className="flex-col">
			{state.isLoading && <Loader />}
			<Navbar />
			<ToastContainer />
			<div className="main-container w100 padding-t8 padding-b8">
				<Switch>
					<Route path="/" exact component={Products} />
					<PrivateRoute exact path="/cart" component={Cart} />
					<PrivateRoute exact path="/wishlist" component={Wishlist} />
					<Route path="/products/:productId" component={ProductDescription} />
					<Route path="/categories/:categoryName" component={ProductsByCategory} />
					<Route path="/my-account" component={AccountPage} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
