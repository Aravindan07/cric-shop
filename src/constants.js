export const initialState = {
	products: [],
	wishList: [],
	cartList: [],
	includeOutOfStock: false,
	showFastDeliveryOnly: false,
	sortBy: "",
};

export const LOAD__PRODUCTS = "LOAD__PRODUCTS";
export const ADD__OR__REMOVE__ITEM__FROM__WISHLIST = "ADD__OR__REMOVE__ITEM__FROM__WISHLIST";
export const ADD__ITEM__TO__CART = "ADD__ITEM__TO__CART";
export const REMOVE__ITEM__FROM__CART = "REMOVE__ITEM__FROM__CART";
export const INCREMENT__QUANTITY = "INCREMENT__QUANTITY";
export const DECREMENT__QUANTITY = "DECREMENT__QUANTITY";
export const PRICE__LOW__TO__HIGH = "PRICE__LOW__TO__HIGH";
export const PRICE__HIGH__TO__LOW = "PRICE__HIGH__TO__LOW";
export const INCLUDE__OUT__OF__STOCK = "INCLUDE__OUT__OF__STOCK";
export const INCLUDE__FAST__DELIVERY = "INCLUDE__FAST__DELIVERY";
export const CLEAR__FILTERS = "CLEAR__FILTERS";
