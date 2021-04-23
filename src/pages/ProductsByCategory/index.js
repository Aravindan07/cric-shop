import React, { useEffect, useState } from "react";
import { useMainContext } from "../../context/main-context";
import Card from "../../components/Card";
import { useParams } from "react-router";

export default function ProductsByCategory() {
	const { state, loadCategories } = useMainContext();
	const [test, setTest] = useState(null);
	const { categoryName } = useParams();
	useEffect(() => {
		let isMounted = true;
		let productsInCategory = state.categories.find(
			(item) => item.categoryName === categoryName
		);
		if (isMounted) {
			setTest(productsInCategory);
		}
		return () => {
			isMounted = false;
		};
	}, [categoryName, state.categories]);
	console.log("categoryName", categoryName);
	console.log("state", state);
	console.log("productsInCategory", test);
	return (
		<>
			{test && (
				<div className="padding-r8 padding-l8 mt-16 flex-row-center">
					{test && test.products.map((item) => <Card key={item._id} item={item} />)}
				</div>
			)}
		</>
	);
}
