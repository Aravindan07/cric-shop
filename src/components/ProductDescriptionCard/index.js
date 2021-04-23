import React from "react";
import { useHistory, useParams } from "react-router";
import {
	ADD__OR__REMOVE__ITEM__FROM__WISHLIST,
	DECREMENT__QUANTITY,
	INCREMENT__QUANTITY,
	ADD__ITEM__TO__CART,
	REMOVE__ITEM__FROM__CART,
} from "../../constants";
import { useMainContext } from "../../context/main-context";
import { ReactComponent as WishListIcon } from "../../icons/card-wish-icon.svg";
import "./styles.css";

function ProductDescriptionCard({ productToShow }) {
	const history = useHistory();
	const { productId } = useParams();

	const {
		addOrRemoveItemFromWishList,
		incOrDecQuantity,
		addOrRemoveItemFromCartList,
	} = useMainContext();

	const setWishListed = (event) => {
		event.stopPropagation();
		addOrRemoveItemFromWishList(productToShow._id, ADD__OR__REMOVE__ITEM__FROM__WISHLIST);
	};

	const incOrDecQuantityHandler = (item, operation) => {
		if (item.quantity === 1 && operation === "dec") {
			return null;
		}
		if (operation === "increment") {
			return incOrDecQuantity(item._id, INCREMENT__QUANTITY, operation);
		}
		if (operation === "decrement") {
			return incOrDecQuantity(item._id, DECREMENT__QUANTITY, operation);
		}
	};

	const addItemToCart = () => {
		if (productToShow.cartListed) {
			return history.push("/cart");
		}
		return addOrRemoveItemFromCartList(productToShow._id, ADD__ITEM__TO__CART, "add");
	};

	const removeFromCartHandler = (item) => {
		return addOrRemoveItemFromCartList(item._id, REMOVE__ITEM__FROM__CART, "remove");
	};

	return (
		<>
			{productToShow && (
				<div className="product-container">
					<div className="image-wishlist-icon-container">
						<WishListIcon
							fill={
								productToShow.wishListed ? "var(--complementary-color)" : "#9b9999"
							}
							onClick={(e) => setWishListed(e)}
						/>
					</div>
					<img
						className="br-10 product-container-img"
						src={productToShow.imageUrl}
						alt="product"
					/>

					<div className="product-description-body">
						<p className="ls-1 product__name">{productToShow.name}</p>
						<p className="mt-16 mb-16">
							<strong>Model No: </strong>
							<span className="color-success fw-600 ml-5">
								{productToShow.modelNo}
							</span>
						</p>
						<p className="mt-16 mb-16">{productToShow.description}</p>
						<div className="price__tag c-pointer mt-8 fw-600 mb-16">
							<span className="highlighted__price ls-1 mb-16">
								Rs. {productToShow.price}
							</span>
							<span className="price ml-16 ls-1 color-red fw-600 mb-16">
								{productToShow.offer} offer
							</span>
						</div>
						<p className="mb-16">
							<strong>Stock Details: </strong>
							{productToShow.inStock ? (
								<span className="color-success fw-600 ml-5">In Stock</span>
							) : (
								<span className="color-error fw-600 ml-5">Out of Stock</span>
							)}
						</p>
						<p>
							<strong>Delivery: </strong>
							{productToShow.delivery === "Fast" ||
							productToShow.delivery === "fast" ? (
								<span className="color-success ml-5">
									Fast delivery is available.
								</span>
							) : (
								<span className="color-red ml-5">
									Fast delivery is not available right now.
								</span>
							)}
						</p>
						<div className="rating product-desc-rating mb-16">
							{productToShow.ratings}/5
							<img src="https://polish-ui.netlify.app/icons/star.svg" alt="Ratings" />
						</div>
						<div className="buttons-div mb-32">
							{productToShow.cartListed && !productId && (
								<div className="inc-dec-container">
									<button
										className="button button--error mr-16"
										onClick={() =>
											incOrDecQuantityHandler(productToShow, "decrement")
										}
									>
										-
									</button>
									<p className="text-center mb-5">
										{productToShow.quantityAddedToCart}
									</p>
									<button
										className="button button--primary ml-16"
										onClick={() =>
											incOrDecQuantityHandler(productToShow, "increment")
										}
									>
										+
									</button>
								</div>
							)}
							{productId && (
								<button
									className="button button--primary text-center centered--button mt-16 mb-16"
									onClick={() => addItemToCart()}
								>
									{productToShow.cartListed ? "Go to Cart" : "Add to Cart"}
								</button>
							)}
							{!productId && (
								<button
									className="button button--error"
									onClick={() => removeFromCartHandler(productToShow)}
								>
									Remove
								</button>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ProductDescriptionCard;
