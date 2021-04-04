import { useWishList } from "./context/wishlistContext";

function Cart() {
	const { state } = useWishList();
	return (
		<div>
			<h2>Cart contains {state.cartList.length} items!</h2>
		</div>
	);
}

export default Cart;
