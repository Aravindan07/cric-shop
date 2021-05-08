import * as Actions from "../constants";

export function mainReducer(state, { type, payload }) {
	const checkItemExists = (id, list) => {
		return list.find((el) => el._id === id);
	};
	switch (type) {
		case Actions.LOAD__PRODUCTS:
			return {
				...state,
				products: payload,
			};
		case Actions.LOAD__WISHLIST:
			return {
				...state,
				wishList: payload,
			};
		case Actions.LOAD__CARTLIST:
			return {
				...state,
				cartList: payload,
			};
		case Actions.LOAD__CATEGORIES:
			return {
				...state,
				categories: payload,
			};
		case Actions.SET__LOADING:
			return {
				...state,
				isLoading: !state.isLoading,
			};
		case Actions.ADD__OR__REMOVE__ITEM__FROM__WISHLIST:
			if (checkItemExists(payload._id, state.wishList)) {
				return {
					...state,
					wishList: state.wishList.filter((el) => el._id !== payload._id),
					cartList: state.cartList.map((item) =>
						item._id === payload._id ? { ...item, wishListed: false } : item
					),
					products: state.products.map((item) =>
						item._id === payload._id ? { ...item, wishListed: false } : item
					),
					categories: state.categories.map((item) => {
						return {
							...item,
							products: item.products.map((el) =>
								el._id === payload._id ? { ...el, wishListed: false } : el
							),
						};
					}),
				};
			}
			return {
				...state,
				wishList: state.wishList.concat(payload),
				cartList: state.cartList.map((item) =>
					item._id === payload._id ? { ...item, wishListed: true } : item
				),
				products: state.products.map((item) =>
					item._id === payload._id ? { ...item, wishListed: true } : item
				),
				categories: state.categories.map((item) => {
					return {
						...item,
						products: item.products.map((el) =>
							el._id === payload._id ? { ...el, wishListed: true } : el
						),
					};
				}),
			};

		case Actions.ADD__ITEM__TO__CART:
			return {
				...state,
				cartList: state.cartList.concat(payload),
				products: state.products.map((item) =>
					item._id === payload._id ? { ...item, cartListed: true } : item
				),
			};

		case Actions.REMOVE__ITEM__FROM__CART:
			return {
				...state,
				cartList: state.cartList.filter((el) => el._id !== payload._id),
				products: state.products.map((item) =>
					item._id === payload._id ? { ...item, cartListed: false } : item
				),
			};

		case Actions.INCREMENT__QUANTITY:
			return {
				...state,
				cartList: state.cartList.map((item) =>
					item._id === payload._id
						? { ...item, quantityAddedToCart: item.quantityAddedToCart + 1 }
						: item
				),
				products: state.products.map((item) =>
					item._id === payload._id
						? { ...item, quantityAddedToCart: item.quantityAddedToCart + 1 }
						: item
				),
			};

		case Actions.DECREMENT__QUANTITY:
			return {
				...state,
				cartList: state.cartList.map((item) =>
					item._id === payload._id
						? { ...item, quantityAddedToCart: item.quantityAddedToCart - 1 }
						: item
				),
				products: state.products.map((item) =>
					item._id === payload._id
						? { ...item, quantityAddedToCart: item.quantityAddedToCart - 1 }
						: item
				),
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
				includeOutOfStock: true,
				showFastDeliveryOnly: false,
				sortBy: null,
			};
		case Actions.SHOW__MESSAGE:
			return {
				...state,
				message: payload,
			};
		case Actions.REMOVE__MESSAGE:
			return {
				...state,
				message: null,
			};

		case Actions.SET__LOGIN:
			return {
				...state,
				isAuthenticated: true,
			};

		case Actions.SET__LOGOUT:
			return {
				...state,
				isAuthenticated: false,
			};

		default:
			return state;
	}
}
