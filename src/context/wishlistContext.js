import { createContext, useContext, useReducer } from "react";
import { wishListReducer } from "../reducers/wishlistReducer";
import { LOAD__PRODUCTS, initialState } from "../constants";
import axios from "axios";

const WishListContext = createContext();

export default function WishListProvider({ children }) {
	const [state, dispatch] = useReducer(wishListReducer, initialState);

	const loadProducts = async () => {
		try {
			const { data } = await axios.get("/api/products");
			console.log("In load products", data);
			return dispatch({ type: LOAD__PRODUCTS, payload: data.products });
		} catch (error) {
			console.error(error);
		}
	};

	const addItemToWishList = async (item, type) => {
		console.log("inside context function", item);
		try {
			const { data } = await axios.post("/api/wishlists", { wishlist: item });
			dispatch({ type: type, payload: data });
		} catch (error) {
			console.error(error);
		}
	};

	const addItemToCartList = async (item, type) => {
		console.log("inside context function", item);
		try {
			const { data } = await axios.post("/api/cartlists", { cartlist: item });
			dispatch({ type: type, payload: data });
		} catch (error) {
			console.error(error);
		}
	};

	const removeItemFromCartList = async (item, type) => {
		console.log("inside context function", item);
		try {
			const { data } = await axios.delete("/api/cartlists", { cartlist: item });
			dispatch({ type: type, payload: data });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<WishListContext.Provider
			value={{
				state,
				dispatch,
				loadProducts,
				addItemToWishList,
				addItemToCartList,
				removeItemFromCartList,
			}}
		>
			{children}
		</WishListContext.Provider>
	);
}

export const useWishList = () => {
	return useContext(WishListContext);
};
