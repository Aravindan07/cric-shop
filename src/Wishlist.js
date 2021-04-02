import React from "react";
import Card from "./components/Card";
import { useWishList } from "./context/wishlistContext";

function Wishlist() {
	const { items } = useWishList();
	return (
		<div className="padding-t8 padding-b8 padding-l8 padding-r8">
			<h2 className="text-center">My Wishlist</h2>
			<p>Wishlist Contains {items} items. </p>
			<Card />
		</div>
	);
}

export default Wishlist;
