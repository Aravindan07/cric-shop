import React from "react";
import { useCart } from "../context/cartContext";

function CartList() {
	const { state } = useCart();
	console.log(state);
	return (
		<div>
			<h2>Cart List</h2>
		</div>
	);
}

export default CartList;
