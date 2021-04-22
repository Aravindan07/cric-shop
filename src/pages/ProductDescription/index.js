import { useParams } from "react-router-dom";
import { useMainContext } from "../../context/main-context";
import ProductDescriptionCard from "../../components/ProductDescriptionCard";
import "./styles.css";

function ProductDescription() {
	const { state } = useMainContext();
	const { productId } = useParams();
	const productToShow = state.products.find((el) => el._id === productId);

	return (
		<div>
			<ProductDescriptionCard productToShow={productToShow} />
		</div>
	);
}

export default ProductDescription;
