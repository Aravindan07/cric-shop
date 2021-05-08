import React from "react";
import { useECommerceContext } from "../../context";
import Card from "../../components/Card";
import { useParams } from "react-router";
import { useDocumentTitle } from "../../utils/useDocumentTitle";

export default function ProductsByCategory() {
	const { state } = useECommerceContext();
	const { categoryName } = useParams();
	const foundCategory = state.categories.find((el) => el.categoryName === categoryName);
	useDocumentTitle(`${categoryName} | CricShop`);
	return (
		<>
			<div className="padding-r8 padding-l8 mt-16 flex-row-center">
				{foundCategory &&
					foundCategory.products.map((item) => <Card key={item._id} item={item} />)}
			</div>
		</>
	);
}
