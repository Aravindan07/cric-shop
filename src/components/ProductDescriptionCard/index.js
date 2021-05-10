import { useHistory, useParams } from "react-router";
import {
	DECREMENT__QUANTITY,
	INCREMENT__QUANTITY,
	ADD__ITEM__TO__CART,
	REMOVE__ITEM__FROM__CART,
	ADD__ITEM__TO__WISHLIST,
	REMOVE__ITEM__FROM__WISHLIST,
} from "../../constants";
import { useECommerceContext } from "../../context";
import { ReactComponent as WishListIcon } from "../../icons/card-wish-icon.svg";
import "./productDescriptionCard.css";

function ProductDescriptionCard({ productToShow }) {
	const history = useHistory();
	const { productId } = useParams();

	const {
		state: { isAuthenticated, wishList, cartList },
		incOrDecQuantity,
		addItemToCartlist,
		removeItemFromCartlist,
		addItemToWishlist,
		removeItemFromWishlist,
	} = useECommerceContext();

	const extractId = () => {
		let finded = wishList.find((el) =>
			el.product._id === productToShow.product ? productToShow.product._id : productToShow._id
		);
		return finded._id;
	};
	const wishListed = (item) => wishList.filter((el) => el.product._id === item._id);
	const fillColorAssigner = (item) => {
		if (wishListed(item).length > 0) {
			return "var(--complementary-color)";
		}
		return "#9b9999";
	};

	const setWishListed = (event, item) => {
		event.stopPropagation();
		if (isAuthenticated && wishListed(item).length === 0) {
			return addItemToWishlist(
				productToShow.product ? productToShow.product._id : productToShow._id,
				ADD__ITEM__TO__WISHLIST
			);
		}
		if (isAuthenticated && wishListed(item).length > 0) {
			return removeItemFromWishlist(extractId(), REMOVE__ITEM__FROM__WISHLIST);
		}
		return history.push("/my-account");
	};

	const cartItems = (item) =>
		cartList.length > 0 && cartList.filter((el) => el.product._id === item._id);

	const incOrDecQuantityHandler = (item, operation) => {
		switch (operation) {
			case "decrement":
				if (cartItems(item)[0].quantity === 1) {
					return null;
				}
				return incOrDecQuantity(cartItems(item)[0]._id, DECREMENT__QUANTITY, operation);
			case "increment":
				return incOrDecQuantity(cartItems(item)[0]._id, INCREMENT__QUANTITY, operation);

			default:
				return null;
		}
	};

	const addItemToCart = (item) => {
		if (isAuthenticated && cartItems(item).length > 0) {
			return history.push("/cart");
		}
		if (
			(isAuthenticated && cartItems(item).length === 0) ||
			(isAuthenticated && cartItems(item) === false)
		) {
			return addItemToCartlist(
				productToShow.product ? productToShow.product._id : productToShow._id,
				ADD__ITEM__TO__CART
			);
		}
		return history.push("/my-account");
	};

	const removeFromCartHandler = (item) => {
		return removeItemFromCartlist(item._id, REMOVE__ITEM__FROM__CART);
	};

	const checkDelivery = () => {
		if (productToShow.product) {
			return productToShow.product.delivery === "Fast";
		}
		return productToShow.delivery === "Fast";
	};

	return (
		<>
			{productToShow && (
				<div className="product-container">
					<div className="image-wishlist-icon-container">
						<WishListIcon
							fill={
								isAuthenticated
									? fillColorAssigner(
											productToShow.product
												? productToShow.product
												: productToShow
									  )
									: "#9b9999"
							}
							onClick={(e) =>
								setWishListed(
									e,
									productToShow.product ? productToShow.product : productToShow
								)
							}
						/>
					</div>
					<img
						className="br-10 product-container-img"
						src={
							productToShow.product
								? productToShow.product.imageUrl
								: productToShow.imageUrl
						}
						alt="product"
					/>

					<div className="product-description-body">
						<p className="ls-1 product__name">
							{productToShow.product
								? productToShow.product.name
								: productToShow.name}
						</p>
						<p className="mt-16 mb-16">
							<strong>Model No: </strong>
							<span className="color-success fw-600 ml-5">
								{productToShow.product
									? productToShow.product.modelNo
									: productToShow.modelNo}
							</span>
						</p>
						<p className="mt-16 mb-16">
							{productToShow.product
								? productToShow.product.description
								: productToShow.description}
						</p>
						<div className="price__tag c-pointer mt-8 fw-600 mb-16">
							<span className="highlighted__price ls-1 mb-16">
								Rs.{" "}
								{productToShow.product
									? productToShow.product.price
									: productToShow.price}
							</span>
							<span className="price ml-16 ls-1 color-red fw-600 mb-16">
								{productToShow.product
									? productToShow.product.offer
									: productToShow.offer}
								offer
							</span>
						</div>
						<p className="mb-16">
							<strong>Stock Details: </strong>
							{productToShow.product ? (
								productToShow.product.inStock
							) : productToShow.inStock ? (
								<span className="color-success fw-600 ml-5">In Stock</span>
							) : (
								<span className="color-error fw-600 ml-5">Out of Stock</span>
							)}
						</p>
						<p>
							<strong>Delivery: </strong>
							{checkDelivery() ? (
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
							{productToShow.product
								? productToShow.product.ratings
								: productToShow.ratings}
							/5
							<img src="https://polish-ui.netlify.app/icons/star.svg" alt="Ratings" />
						</div>
						<div className="buttons-div mb-32">
							{!productId && (
								<div className="inc-dec-container">
									<button
										className="button button--error mr-16"
										onClick={() =>
											incOrDecQuantityHandler(
												productToShow.product
													? productToShow.product
													: productToShow,
												"decrement"
											)
										}
									>
										-
									</button>
									<p className="text-center mb-5">
										{
											cartItems(
												productToShow.product
													? productToShow.product
													: productToShow
											)[0].quantity
										}
									</p>
									<button
										className="button button--primary ml-16"
										onClick={() =>
											incOrDecQuantityHandler(
												productToShow.product
													? productToShow.product
													: productToShow,
												"increment"
											)
										}
									>
										+
									</button>
								</div>
							)}
							{productId && (
								<button
									className="button button--primary text-center centered--button mt-16 mb-16"
									onClick={() =>
										addItemToCart(
											productToShow.product
												? productToShow.product
												: productToShow
										)
									}
								>
									{isAuthenticated &&
									cartItems(
										productToShow.product
											? productToShow.product
											: productToShow
									).length > 0
										? "Go to Cart"
										: "Add to Cart"}
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
