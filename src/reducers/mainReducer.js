import {
	LOAD__PRODUCTS,
	ADD__OR__REMOVE__ITEM__FROM__WISHLIST,
	ADD__ITEM__TO__CART,
	REMOVE__ITEM__FROM__CART,
	INCREMENT__QUANTITY,
	DECREMENT__QUANTITY,
	PRICE__HIGH__TO__LOW,
	PRICE__LOW__TO__HIGH,
	INCLUDE__FAST__DELIVERY,
	INCLUDE__OUT__OF__STOCK,
	CLEAR__FILTERS,
	LOAD__WISHLIST,
	LOAD__CARTLIST,
	SET__LOADING,
	LOAD__CATEGORIES,
	SHOW__MESSAGE,
	REMOVE__MESSAGE,
	SET__LOGIN,
	SET__LOGOUT,
} from "../constants";

export function mainReducer(state, action) {
	const checkItemExists = (id, list) => {
		return list.find((el) => el._id === id);
	};
	switch (action.type) {
		case LOAD__PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case LOAD__WISHLIST:
			return {
				...state,
				wishList: action.payload,
			};
		case LOAD__CARTLIST:
			return {
				...state,
				cartList: action.payload,
			};
		case LOAD__CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		case SET__LOADING:
			return {
				...state,
				isLoading: !state.isLoading,
			};
		case ADD__OR__REMOVE__ITEM__FROM__WISHLIST:
			if (checkItemExists(action.payload._id, state.wishList)) {
				return {
					...state,
					wishList: state.wishList.filter((el) => el._id !== action.payload._id),
					cartList: state.cartList.map((item) =>
						item._id === action.payload._id ? { ...item, wishListed: false } : item
					),
					products: state.products.map((item) =>
						item._id === action.payload._id ? { ...item, wishListed: false } : item
					),
					categories: state.categories.map((item) => {
						return {
							...item,
							products: item.products.map((el) =>
								el._id === action.payload._id ? { ...el, wishListed: false } : el
							),
						};
					}),
				};
			}
			return {
				...state,
				wishList: state.wishList.concat(action.payload),
				cartList: state.cartList.map((item) =>
					item._id === action.payload._id ? { ...item, wishListed: true } : item
				),
				products: state.products.map((item) =>
					item._id === action.payload._id ? { ...item, wishListed: true } : item
				),
				categories: state.categories.map((item) => {
					return {
						...item,
						products: item.products.map((el) =>
							el._id === action.payload._id ? { ...el, wishListed: true } : el
						),
					};
				}),
			};

		case ADD__ITEM__TO__CART:
			return {
				...state,
				cartList: state.cartList.concat(action.payload),
				products: state.products.map((item) =>
					item._id === action.payload._id ? { ...item, cartListed: true } : item
				),
			};

		case REMOVE__ITEM__FROM__CART:
			return {
				...state,
				cartList: state.cartList.filter((el) => el._id !== action.payload._id),
				products: state.products.map((item) =>
					item._id === action.payload._id ? { ...item, cartListed: false } : item
				),
			};

		case INCREMENT__QUANTITY:
			return {
				...state,
				cartList: state.cartList.map((item) =>
					item._id === action.payload._id
						? { ...item, quantityAddedToCart: item.quantityAddedToCart + 1 }
						: item
				),
				products: state.products.map((item) =>
					item._id === action.payload._id
						? { ...item, quantityAddedToCart: item.quantityAddedToCart + 1 }
						: item
				),
			};

		case DECREMENT__QUANTITY:
			return {
				...state,
				cartList: state.cartList.map((item) =>
					item._id === action.payload._id
						? { ...item, quantityAddedToCart: item.quantityAddedToCart - 1 }
						: item
				),
				products: state.products.map((item) =>
					item._id === action.payload._id
						? { ...item, quantityAddedToCart: item.quantityAddedToCart - 1 }
						: item
				),
			};

		case INCLUDE__OUT__OF__STOCK:
			return {
				...state,
				includeOutOfStock: !state.includeOutOfStock,
			};

		case INCLUDE__FAST__DELIVERY:
			return {
				...state,
				showFastDeliveryOnly: !state.showFastDeliveryOnly,
			};

		case PRICE__HIGH__TO__LOW:
			return {
				...state,
				sortBy: action.type,
			};

		case PRICE__LOW__TO__HIGH:
			return {
				...state,
				sortBy: action.type,
			};

		case CLEAR__FILTERS:
			return {
				...state,
				includeOutOfStock: true,
				showFastDeliveryOnly: false,
				sortBy: null,
			};
		case SHOW__MESSAGE:
			return {
				...state,
				message: action.payload,
			};
		case REMOVE__MESSAGE:
			return {
				...state,
				message: null,
			};

		case SET__LOGIN:
			return {
				...state,
				isAuthenticated: true,
			};

		case SET__LOGOUT:
			return {
				...state,
				isAuthenticated: false,
			};

		default:
			return state;
	}
}
