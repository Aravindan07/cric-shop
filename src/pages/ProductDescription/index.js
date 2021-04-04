import { useHistory, useParams } from "react-router-dom";
import { useWishList } from "../../context/wishlistContext";
import { ADD__ITEM__TO__CART } from "../../constants";
import ProductDescriptionCard from "../../components/ProductDescriptionCard";
import "./styles.css";

function ProductDescription() {
	const history = useHistory();
	const { state, addItemToCartList } = useWishList();
	const { productId } = useParams();

	console.log(productId);
	console.log("state", state);
	const productToShow = state.products.find((el) => el.id === productId);
	console.log("Product to Show", productToShow);

	const addItemToCart = () => {
		if (productToShow.cartListed) {
			return history.push("/cart");
		}
		return addItemToCartList(
			{ ...productToShow, cartListed: !productToShow.cartListed },
			ADD__ITEM__TO__CART
		);
	};
	return (
		<div>
			<h3 className="text-center mb-16">{productToShow.name}</h3>
			<ProductDescriptionCard productToShow={productToShow} />
			<button
				className="button button--primary centered--button text-center mt-16 mb-16"
				onClick={() => addItemToCart()}
			>
				{productToShow.cartListed ? "Go to Cart" : "Add to Cart"}
			</button>
		</div>
	);
}

export default ProductDescription;
