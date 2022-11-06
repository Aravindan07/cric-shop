import { useParams } from "react-router-dom";
import { useECommerceContext } from "../../context";
import ProductDescriptionCard from "../../components/ProductDescriptionCard";
import "./productDescription.css";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import { useScrollToTop } from "../../utils/scrollToTop";

function ProductDescription() {
	const { state } = useECommerceContext();
	const { productId } = useParams();
	const productToShow = state.products.find((el) => el._id === productId);
	useDocumentTitle(`${productToShow && productToShow.name} | CricShop`);
	useScrollToTop();

	return (
		<div>
			<ProductDescriptionCard productToShow={productToShow} />
		</div>
	);
}

export default ProductDescription;
