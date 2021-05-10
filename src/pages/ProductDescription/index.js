import { useParams } from "react-router-dom";
import { useECommerceContext } from "../../context";
import ProductDescriptionCard from "../../components/ProductDescriptionCard";
import "./productDescription.css";
import { useDocumentTitle } from "../../utils/useDocumentTitle";

function ProductDescription() {
	const { state } = useECommerceContext();
	const { productId } = useParams();
	const productToShow = state.products.find((el) => el._id === productId);
	useDocumentTitle(`${productToShow && productToShow.name} | CricShop`);

	return (
		<div>
			<ProductDescriptionCard productToShow={productToShow} />
		</div>
	);
}

export default ProductDescription;
