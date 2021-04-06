import { useHistory, useParams } from "react-router-dom";
import { useMainContext } from "../../context/main-context";
import { ADD__ITEM__TO__CART } from "../../constants";
import ProductDescriptionCard from "../../components/ProductDescriptionCard";
import "./styles.css";

function ProductDescription() {
	const history = useHistory();
	const { state, addItemToCartList } = useMainContext();
	const { productId } = useParams();
	const productToShow = state.products.find((el) => el.id === productId);

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
