import React from "react";
import Card from "../components/Card";
import { useWishList } from "../context/wishlistContext";

function Wishlist() {
	const { state } = useWishList();
	console.log(state.wishList.length);
	return (
		<div className="padding-t8 padding-b8 padding-l8 padding-r8">
			{state.wishList.length > 0 && <h2 className="text-center">My Wishlist</h2>}
			{state.wishList.length > 0 ? (
				<p className="text-center mt-8">
					Wishlist contains{" "}
					<span className="fw-600">{state.wishList && state.wishList.length}</span> items.{" "}
				</p>
			) : (
				<p className="text-center">Your wishlist is empty!</p>
			)}
			{state.wishList.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</div>
	);
}

export default Wishlist;
