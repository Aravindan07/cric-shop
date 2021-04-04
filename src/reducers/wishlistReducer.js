import {
	LOAD__PRODUCTS,
	ADD__OR__REMOVE__ITEM__FROM__WISHLIST,
	ADD__ITEM__TO__CART,
	REMOVE__ITEM__FROM__CART,
} from "../constants";

export function wishListReducer(state, action) {
	console.log(state, action);
	const checkItemExists = (id, list) => {
		console.log(id);
		return list.find((el) => el.id === id);
	};
	switch (action.type) {
		case LOAD__PRODUCTS:
			console.log("Inside Load Products");
			return {
				...state,
				products: action.payload,
			};
		case ADD__OR__REMOVE__ITEM__FROM__WISHLIST:
			console.log("wishlist", action.payload);

			if (checkItemExists(action.payload.wishlist.id, state.wishList)) {
				console.log("state.wishList", state.wishList);
				return {
					...state,
					wishList: state.wishList.filter((el) => el.id !== action.payload.wishlist.id),
					products: state.products.map((item) =>
						item.id === action.payload.wishlist.id
							? { ...item, wishListed: false }
							: item
					),
				};
			}
			return {
				...state,
				wishList: state.wishList.concat(action.payload.wishlist),
				products: state.products.map((item) =>
					item.id === action.payload.wishlist.id ? { ...item, wishListed: true } : item
				),
			};

		case ADD__ITEM__TO__CART:
			console.log("cartList", action.payload);
			return {
				...state,
				cartList: state.cartList.concat(action.payload.cartlist),
				products: state.products.map((item) =>
					item.id === action.payload.cartlist.id ? { ...item, cartListed: true } : item
				),
			};

		case REMOVE__ITEM__FROM__CART:
			return {
				...state,
				cartList: state.cartList.filter((el) => el.id !== action.payload.cartlist.id),
				products: state.products.map((item) =>
					item.id === action.payload.cartlist.id ? { ...item, cartListed: false } : item
				),
			};

		default:
			break;
	}
}
