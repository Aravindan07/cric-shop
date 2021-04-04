import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWishList } from "../../context/wishlistContext";
import { ReactComponent as WishListIcon } from "../../icons/card-wish-icon.svg";
import { ADD__OR__REMOVE__ITEM__FROM__WISHLIST, ADD__ITEM__TO__CART } from "../../constants";
import "./styles.css";

function ProductDescription() {
	const { state, addItemToWishList, addItemToCartList } = useWishList();
	const { productId } = useParams();

	console.log(productId);
	console.log("state", state);
	const productToShow = state.products.find((el) => el.id === productId);
	console.log("Product to Show", productToShow);
	const setWishListed = (event) => {
		event.stopPropagation();
		addItemToWishList(
			{ ...productToShow, wishListed: !productToShow.wishListed },
			ADD__OR__REMOVE__ITEM__FROM__WISHLIST
		);
	};

	const addItemToCart = () => {
		if (productToShow.cartListed) {
			return null;
		}
		return addItemToCartList(
			{ ...productToShow, cartListed: !productToShow.cartListed },
			ADD__ITEM__TO__CART
		);
	};
	return (
		<div>
			<h3 className="text-center mb-16">{productToShow.name}</h3>
			<div className="product-container">
				<div className="image-wishlist-icon-container">
					<WishListIcon
						fill={productToShow.wishListed ? "var(--complementary-color)" : "#9b9999"}
						onClick={(e) => setWishListed(e)}
					/>
				</div>
				<img className="br-10" src={productToShow.image} alt="product" />
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
			</div>
			<button
				className="button button--primary text-center mt-16 mb-16"
				onClick={() => addItemToCart()}
			>
				{productToShow.cartListed ? "Go to Cart" : "Add to Cart"}
			</button>
		</div>
	);
}

export default ProductDescription;
