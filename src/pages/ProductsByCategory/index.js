import React from "react";
import { useMainContext } from "../../context/main-context";
import Card from "../../components/Card";
import { useParams } from "react-router";

export default function ProductsByCategory() {
	const { state } = useMainContext();
	const { categoryName } = useParams();
	console.log("categoryName", categoryName);
	const foundCategory = state.categories.find((el) => el.categoryName === categoryName);
	console.log("foundCategory", foundCategory);
	console.log("state", state);
	return (
		<>
			<div className="padding-r8 padding-l8 mt-16 flex-row-center">
				{foundCategory &&
					foundCategory.products.map((item) => <Card key={item._id} item={item} />)}
			</div>
		</>
	);
}
