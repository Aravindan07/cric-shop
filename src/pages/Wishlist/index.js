import React from "react";
import Card from "../../components/Card";
import { useECommerceContext } from "../../context";
import { useScrollToTop } from "../../utils/scrollToTop";
import { useDocumentTitle } from "../../utils/useDocumentTitle";

function Wishlist() {
	const { state } = useECommerceContext();

	useDocumentTitle("WishList | CricShop");

	useScrollToTop();

	return (
		<>
			<div className="padding-t8 padding-b8 padding-l8 padding-r8">
				{state.wishList?.products?.length > 0 && (
					<h2 className="text-center">My Wishlist</h2>
				)}
				{state.wishList?.products?.length > 0 ? (
					<p className="text-center mt-8">
						Wishlist contains
						<span className="fw-600 mr-5 ml-5">{state.wishList?.products?.length}</span>
						items.
					</p>
				) : (
					<p className="text-center">Your wishlist is empty!</p>
				)}

				<div className="flex-row-center">
					{state.wishList?.products?.map((product) => (
						<Card key={product._id} item={product} />
					))}
				</div>
			</div>
		</>
	);
}

export default Wishlist;
