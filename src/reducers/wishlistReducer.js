import { LOAD__PRODUCTS, ADD__OR__REMOVE__ITEM__FROM__WISHLIST } from "../constants";

export function wishListReducer(state, action) {
	console.log(state, action);
	const checkItemExists = (id) => {
		console.log(id);
		return state.wishList.find((el) => el.id === id);
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

			if (checkItemExists(action.payload.wishlist.id)) {
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

		default:
			break;
	}
}
