import * as Actions from "../constants";

export function mainReducer(state, { type, payload }) {
	switch (type) {
		case Actions.LOAD__PRODUCTS:
			return {
				...state,
				products: payload,
			};
		case Actions.LOAD__CATEGORIES:
			return {
				...state,
				categories: payload,
			};
		case Actions.SET__LOADING:
			return {
				...state,
				isLoading: payload,
			};

		case Actions.ADD__OR__REMOVE__ITEM__FROM__WISHLIST:
			return {
				...state,
				wishList: payload,
			};

		case Actions.ADD__OR__REMOVE__ITEM__FROM__CART:
			return {
				...state,
				cartList: payload,
			};

		case Actions.INCREMENT__OR__DECREMENT__QUANTITY:
			return {
				...state,
				cartList: payload.item,
			};

		case Actions.INCLUDE__OUT__OF__STOCK:
			return {
				...state,
				includeOutOfStock: !state.includeOutOfStock,
			};

		case Actions.INCLUDE__FAST__DELIVERY:
			return {
				...state,
				showFastDeliveryOnly: !state.showFastDeliveryOnly,
			};

		case Actions.PRICE__HIGH__TO__LOW:
			return {
				...state,
				sortBy: type,
			};

		case Actions.PRICE__LOW__TO__HIGH:
			return {
				...state,
				sortBy: type,
			};

		case Actions.CLEAR__FILTERS:
			return {
				...state,
				includeOutOfStock: false,
				showFastDeliveryOnly: false,
				sortBy: null,
			};

		case Actions.SET__SIGNUP:
			localStorage.setItem("token", payload.token);
			localStorage.setItem("isAuthenticated", true);
			return {
				...state,
				isAuthenticated: true,
				user: payload.user,
			};

		case Actions.SET__LOGIN:
			localStorage.setItem("token", payload.token);
			localStorage.setItem("isAuthenticated", true);
			return {
				...state,
				isAuthenticated: true,
				user: payload.user,
				cartList: payload.user.cart,
				wishList: payload.user.wishList,
			};

		case Actions.LOAD__USER:
			return {
				...state,
				isAuthenticated: true,
				user: payload.user,
				cartList: payload.user.cart,
				wishList: payload.user.wishList,
			};

		case Actions.SET__LOGOUT:
			localStorage.removeItem("token");
			localStorage.removeItem("isAuthenticated");
			return {
				...state,
				isAuthenticated: false,
				user: null,
				wishList: [],
				cartList: [],
			};

		case Actions.SET__SEARCH__TEXT:
			return {
				...state,
				searchText: payload,
			};

		case Actions.SET_PAID:
			return {
				...state,
				isPaid: payload.paid,
				cartList: [],
			};

		case Actions.SHOW_FILTERS:
			return {
				...state,
				showFilters: !state.showFilters,
			};

		default:
			return state;
	}
}
