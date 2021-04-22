import { createContext, useContext, useReducer } from "react";
import { mainReducer } from "../reducers/mainReducer";
import { LOAD__PRODUCTS, initialState, LOAD__WISHLIST, LOAD__CARTLIST } from "../constants";
import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;

const MainContext = createContext();

export default function MainContextProvider({ children }) {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	const loadProducts = async () => {
		try {
			const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/products`);
			console.log("main data", data.products);
			return dispatch({ type: LOAD__PRODUCTS, payload: data.products });
		} catch (error) {
			console.error(error);
		}
	};

	const loadWishList = async () => {
		try {
			const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/wishlist`);
			console.log("wish data", data);
			return dispatch({ type: LOAD__WISHLIST, payload: data.items });
		} catch (error) {
			console.error(error);
		}
	};

	const loadCartList = async () => {
		try {
			const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/cartlist`);
			console.log("cart listed data", data);
			return dispatch({ type: LOAD__CARTLIST, payload: data.items });
		} catch (error) {
			console.error(error);
		}
	};

	const addItemToWishList = async (item, type) => {
		try {
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/wishlist/${item._id}`, {
				productId: item._id,
			});
			dispatch({ type: type, payload: data });
		} catch (error) {
			console.error(error);
		}
	};

	const addItemToCartList = async (itemId, type) => {
		console.log("Item in cartlist", itemId);
		try {
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/cartlist/${itemId}`, {
				productId: itemId,
			});
			dispatch({ type: type, payload: data });
		} catch (error) {
			console.error(error);
		}
	};

	const removeItemFromCartList = async (itemId, type) => {
		try {
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/cartlist/${itemId}`, {
				productId: itemId,
			});
			dispatch({ type: type, payload: data });
		} catch (error) {
			console.error(error);
		}
	};

	const incOrDecQuantity = async (item, type) => {
		try {
			const { data } = await axios.put(`/api/cartlists/${item.id}`, { cartlist: item });
			dispatch({ type: type, payload: data });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<MainContext.Provider
			value={{
				state,
				dispatch,
				loadProducts,
				loadWishList,
				loadCartList,
				addItemToWishList,
				addItemToCartList,
				removeItemFromCartList,
				incOrDecQuantity,
			}}
		>
			{children}
		</MainContext.Provider>
	);
}

export const useMainContext = () => {
	return useContext(MainContext);
};
