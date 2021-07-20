import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./privateRoutes";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import ProductDescription from "./pages/ProductDescription/index";
import Cart from "./pages/Cart";
import ProductsByCategory from "./pages/ProductsByCategory";
import AccountPage from "./pages/AccountPage";
import RegisterPage from "./pages/RegisterPage";

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Products} />
			<PrivateRoute exact path="/user/:userId/cart" component={Cart} />
			<PrivateRoute exact path="/user/:userId/wishlist" component={Wishlist} />
			<Route path="/products/:productId" component={ProductDescription} />
			<Route path="/categories/:categoryName" component={ProductsByCategory} />
			<Route path="/my-account" component={AccountPage} />
			<Route path="/register" component={RegisterPage} />
			<Route render={() => <h2>This page is not found</h2>} />
		</Switch>
	);
}

export default Routes;
