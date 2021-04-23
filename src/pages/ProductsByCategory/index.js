import React from "react";
import { useMainContext } from "../../context/main-context";
import Card from "../../components/Card";
import { useLocation } from "react-router";

export default function ProductsByCategory() {
	const { state } = useMainContext();
	const location = useLocation();
	console.log("location", location);
	console.log("state", state);
	return (
		<>
			<div className="padding-r8 padding-l8 mt-16 flex-row-center">
				{location.state.category.products.map((item) => (
					<Card key={item._id} item={item} />
				))}
			</div>
		</>
	);
}
