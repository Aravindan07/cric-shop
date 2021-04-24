import { createContext, useContext, useReducer } from "react";
import { mainReducer } from "../reducers/mainReducer";
import {
	LOAD__PRODUCTS,
	initialState,
	LOAD__WISHLIST,
	LOAD__CARTLIST,
	SET__LOADING,
	LOAD__CATEGORIES,
	SHOW__MESSAGE,
	REMOVE__MESSAGE,
} from "../constants";
import axios from "axios";
import { toast } from "react-toastify";

const { REACT_APP_BACKEND_URL } = process.env;

const MainContext = createContext();

export default function MainContextProvider({ children }) {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	const loadEssentials = async () => {
		try {
			dispatch({ type: SET__LOADING });
			const { data: productData } = await axios.get(`${REACT_APP_BACKEND_URL}/products`);
			const { data: categoriesData } = await axios.get(`${REACT_APP_BACKEND_URL}/categories`);
			const { data: wishListData } = await axios.get(`${REACT_APP_BACKEND_URL}/wishlist`);
			const { data: cartListData } = await axios.get(`${REACT_APP_BACKEND_URL}/cartlist`);
			dispatch({ type: LOAD__PRODUCTS, payload: productData.products });
			dispatch({ type: LOAD__CATEGORIES, payload: categoriesData.categories });
			dispatch({ type: LOAD__WISHLIST, payload: wishListData.items });
			dispatch({ type: LOAD__CARTLIST, payload: cartListData.items });
			return dispatch({ type: SET__LOADING });
		} catch (error) {
			console.error(error);
			dispatch({ type: SET__LOADING });
		}
	};

	const addOrRemoveItemFromWishList = async (itemId, type) => {
		try {
			dispatch(
				{ type: SHOW__MESSAGE },
				toast.info("Updating Wishlist...", { hideProgressBar: true, autoClose: 2000 })
			);
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/wishlist/${itemId}`, {
				productId: itemId,
			});
			dispatch({ type: type, payload: data.item });
			dispatch({ type: REMOVE__MESSAGE });
			dispatch(
				{ type: SHOW__MESSAGE, payload: data.message },
				data.message.split(" ")[1].toLowerCase() === "removed"
					? toast.info(data.message, {
							style: { backgroundColor: "#dcdcdc", color: "var(--font-color)" },
							autoClose: 2000,
							hideProgressBar: true,
					  })
					: toast.success(data.message, {
							style: { backgroundColor: "#15b996" },
							autoClose: 2000,
							hideProgressBar: true,
					  })
			);
			return dispatch({ type: REMOVE__MESSAGE });
		} catch (error) {
			console.error(error);
		}
	};

	const addOrRemoveItemFromCartList = async (itemId, type) => {
		try {
			dispatch(
				{ type: SHOW__MESSAGE },
				toast.info("Updating Cartlist...", { hideProgressBar: true, autoClose: 2000 })
			);
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/cartlist/${itemId}`, {
				productId: itemId,
			});
			dispatch({ type: type, payload: data.item });
			dispatch({ type: REMOVE__MESSAGE });
			dispatch(
				{ type: SHOW__MESSAGE, payload: data.message },
				data.message.split(" ")[1].toLowerCase() === "removed"
					? toast.info(data.message, {
							style: { backgroundColor: "#dcdcdc", color: "var(--font-color)" },
							autoClose: 2000,
							hideProgressBar: true,
					  })
					: toast.success(data.message, {
							style: { backgroundColor: "#15b996" },
							autoClose: 2000,
							hideProgressBar: true,
					  })
			);
			return dispatch({ type: REMOVE__MESSAGE });
		} catch (error) {
			console.error(error);
		}
	};

	const incOrDecQuantity = async (itemId, type, operation) => {
		try {
			dispatch(
				{ type: SHOW__MESSAGE },
				toast.info("Updating Quantity...", { hideProgressBar: true, autoClose: 2000 })
			);
			const { data } = await axios.put(
				`${REACT_APP_BACKEND_URL}/cartlist/${itemId}/quantity?type=${operation}`,
				{
					productId: itemId,
				}
			);
			dispatch({ type: type, payload: data.item });
			dispatch({ type: REMOVE__MESSAGE });
			dispatch(
				{ type: SHOW__MESSAGE, payload: data.message },
				toast.success("Quantity Updated!", {
					style: { backgroundColor: "#15b996" },
					autoClose: 2000,
					hideProgressBar: true,
				})
			);
			return dispatch({ type: REMOVE__MESSAGE });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<MainContext.Provider
			value={{
				state,
				dispatch,
				loadEssentials,
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
