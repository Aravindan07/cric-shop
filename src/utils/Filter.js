import { PRICE__HIGH__TO__LOW, PRICE__LOW__TO__HIGH } from "../constants";

export const getSortedData = (products, sortBy) => {
	if (sortBy === PRICE__LOW__TO__HIGH) {
		return [...products].sort((a, b) => a.price - b.price);
	}
	if (sortBy === PRICE__HIGH__TO__LOW) {
		return [...products].sort((a, b) => b.price - a.price);
	}
	return products;
};

export const getFilteredData = (showOutOfStock, showFastDeliveryOnly, products) => {
	return products
		.filter(({ inStock }) => (showOutOfStock ? true : inStock))
		.filter(({ delivery }) => {
			return showFastDeliveryOnly ? (delivery === "Fast" ? true : false) : true;
		});
};
