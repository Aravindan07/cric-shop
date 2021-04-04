import React, { useEffect } from "react";
import {
	ADD__OR__REMOVE__ITEM__FROM__WISHLIST,
	DECREMENT__QUANTITY,
	INCREMENT__QUANTITY,
} from "../../constants";
import { useWishList } from "../../context/wishlistContext";
import { ReactComponent as WishListIcon } from "../../icons/card-wish-icon.svg";
import "./styles.css";

function ProductDescriptionCard({ productToShow }) {
	const { addItemToWishList, incOrDecQuantity, loadProducts } = useWishList();
	useEffect(() => {
		loadProducts();
	}, []);

	console.log("productToShow", productToShow);

	const setWishListed = (event) => {
		event.stopPropagation();
		addItemToWishList(
			{ ...productToShow, wishListed: !productToShow.wishListed },
			ADD__OR__REMOVE__ITEM__FROM__WISHLIST
		);
	};

	const incOrDecQuantityHandler = (item, operation) => {
		if (item.quantity === 1 && operation === "dec") {
			return null;
		}
		if (operation === "inc") {
			return incOrDecQuantity({ ...item, quantity: item.quantity + 1 }, INCREMENT__QUANTITY);
		}
		if (operation === "dec") {
			return incOrDecQuantity({ ...item, quantity: item.quantity - 1 }, DECREMENT__QUANTITY);
		}
	};

	return (
		<div className="product-container">
			<div className="image-wishlist-icon-container">
				<WishListIcon
					fill={productToShow.wishListed ? "var(--complementary-color)" : "#9b9999"}
					onClick={(e) => setWishListed(e)}
				/>
			</div>
			<img className="br-10" src={productToShow.image} alt="product" />
			{productToShow.cartListed && <p className="ls-1 product__name">{productToShow.name}</p>}
			<div className="price__tag c-pointer mt-8 fw-600">
				<span className="highlighted__price ls-1">Rs. {productToShow.price}</span>
				<span className="price ml-16 ls-1 color-red fw-600">{productToShow.offer}</span>
			</div>
			{productToShow.inStock ? (
				<p className="color-green fw-600">In Stock</p>
			) : (
				<p className="color-gray fw-600">Out of Stock</p>
			)}
			<div className="rating product-desc-rating">
				{productToShow.rating}/5
				<img src="https://polish-ui.netlify.app/icons/star.svg" alt="Ratings" />
			</div>
			{productToShow.cartListed && (
				<div className="inc-dec-container">
					<button
						className="button button--error mr-16"
						onClick={() => incOrDecQuantityHandler(productToShow, "dec")}
					>
						-
					</button>
					<p className="text-center mb-5">{productToShow.quantity}</p>
					<button
						className="button button--primary ml-16"
						onClick={() => incOrDecQuantityHandler(productToShow, "inc")}
					>
						+
					</button>
				</div>
			)}
		</div>
	);
}

export default ProductDescriptionCard;
