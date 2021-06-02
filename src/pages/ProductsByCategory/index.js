import React from "react";
import { useECommerceContext } from "../../context";
import Card from "../../components/Card";
import { useParams, Link } from "react-router-dom";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import { ReactComponent as BackIcon } from "../../icons/back-icon.svg";
import { useScrollToTop } from "../../utils/scrollToTop";

const iconStyle = {
	width: "20px",
	height: "20px",
};

export default function ProductsByCategory() {
	const { state } = useECommerceContext();
	const { categoryName } = useParams();
	const foundCategory = state.categories.find((el) => el.categoryName === categoryName);
	useDocumentTitle(`${categoryName} | CricShop`);
	useScrollToTop();
	return (
		<>
			<div className="flex-row-center product__name ls-half-px mb-32">
				<Link
					to="/"
					className="color-success ls-1 fw-600 ml-5 mr-5 link-text flex-row-center font-16"
				>
					<BackIcon style={iconStyle} className="mr-5" />
					Go Back
				</Link>
			</div>
			<div className="padding-r8 padding-l8 mt-16 flex-row-center">
				{foundCategory &&
					foundCategory.products.map((item) => <Card key={item._id} item={item} />)}
			</div>
		</>
	);
}
