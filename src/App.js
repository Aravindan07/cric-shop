import "./App.css";
import Cart from "./Cart";
import Navbar from "./components/Navbar";
import Products from "./Products";
import Wishlist from "./Wishlist";

function App() {
	return (
		<div className="flex-col">
			<Navbar />
			<div className="main-container w100 padding-t8 padding-b8">
				<Products />
				<Cart />
				<Wishlist />
			</div>
		</div>
	);
}

export default App;
