import { ADD__OR__REMOVE__ITEM__FROM__CART } from "../constants";

export const cartListReducer = (state, action) => {
	console.log(state, action);
	const checkItemExists = (id) => {
		console.log(id);
		return state.cartList.find((el) => el.id === id);
	};
	switch (action.type) {
		case ADD__OR__REMOVE__ITEM__FROM__CART:
			console.log("cartList", action.payload);
			if (checkItemExists(action.payload.cartlist.id)) {
				console.log("state.cartList", state.cartList);
				return {
					...state,
					cartList: state.cartList.filter((el) => el.id !== action.payload.wishlist.id),
					products: state.products.map((item) =>
						item.id === action.payload.wishlist.id
							? { ...item, cartListed: false }
							: item
					),
				};
			}
			return {
				...state,
				cartList: state.cartList.concat(action.payload.cartlist),
				products: state.products.map((item) =>
					item.id === action.payload.cartlist.id ? { ...item, cartListed: true } : item
				),
			};
		default:
			return state;
	}
};
