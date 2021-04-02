import { useCart } from "./context/cartContext";

function Cart() {
	const { items } = useCart();
	return (
		<div>
			<h2>This is the cart page.</h2>
			<p>Contains {items} items.</p>
		</div>
	);
}

export default Cart;
