import { createContext, useContext, useReducer } from "react";
import { mainReducer } from "../reducers/mainReducer";
import {
	LOAD__PRODUCTS,
	initialState,
	LOAD__WISHLIST,
	LOAD__CARTLIST,
	SET__LOADING,
	LOAD__CATEGORIES,
} from "../constants";
import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;

const MainContext = createContext();

export default function MainContextProvider({ children }) {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	const loadProducts = async () => {
		try {
			dispatch({ type: SET__LOADING });
			const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/products`);
			dispatch({ type: LOAD__PRODUCTS, payload: data.products });
			return dispatch({ type: SET__LOADING });
		} catch (error) {
			console.error(error);
			dispatch({ type: SET__LOADING });
		}
	};

	const loadWishList = async () => {
		try {
			dispatch({ type: SET__LOADING });
			const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/wishlist`);
			dispatch({ type: LOAD__WISHLIST, payload: data.items });
			return dispatch({ type: SET__LOADING });
		} catch (error) {
			console.error(error);
			dispatch({ type: SET__LOADING });
		}
	};

	const loadCartList = async () => {
		try {
			dispatch({ type: SET__LOADING });
			const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/cartlist`);
			dispatch({ type: LOAD__CARTLIST, payload: data.items });
			return dispatch({ type: SET__LOADING });
		} catch (error) {
			console.error(error);
			dispatch({ type: SET__LOADING });
		}
	};

	const loadCategories = async () => {
		try {
			dispatch({ type: SET__LOADING });
			const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/categories`);
			console.log(data);
			dispatch({ type: LOAD__CATEGORIES, payload: data.categories });
			return dispatch({ type: SET__LOADING });
		} catch (error) {
			console.error(error);
			dispatch({ type: SET__LOADING });
		}
	};

	const addOrRemoveItemFromWishList = async (itemId, type) => {
		try {
			dispatch({ type: SET__LOADING });
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/wishlist/${itemId}`, {
				productId: itemId,
			});
			dispatch({ type: type, payload: data });
			return dispatch({ type: SET__LOADING });
		} catch (error) {
			console.error(error);
			dispatch({ type: SET__LOADING });
		}
	};

	const addOrRemoveItemFromCartList = async (itemId, type) => {
		try {
			dispatch({ type: SET__LOADING });
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/cartlist/${itemId}`, {
				productId: itemId,
			});
			dispatch({ type: type, payload: data });
			return dispatch({ type: SET__LOADING });
		} catch (error) {
			console.error(error);
			dispatch({ type: SET__LOADING });
		}
	};

	const incOrDecQuantity = async (itemId, type, operation) => {
		try {
			dispatch({ type: SET__LOADING });
			const { data } = await axios.put(
				`${REACT_APP_BACKEND_URL}/cartlist/${itemId}/quantity?type=${operation}`,
				{
					productId: itemId,
				}
			);
			dispatch({ type: type, payload: data.item });
			return dispatch({ type: SET__LOADING });
		} catch (error) {
			console.error(error);
			dispatch({ type: SET__LOADING });
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
				loadCategories,
				addOrRemoveItemFromWishList,
				addOrRemoveItemFromCartList,
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
