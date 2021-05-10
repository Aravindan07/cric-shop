import { createContext, useContext, useReducer } from "react";
import { mainReducer } from "../reducers/mainReducer";
import * as Actions from "../constants";
import axios from "axios";
import { toast } from "react-toastify";

export const initialState = {
	products: [],
	wishList: [],
	cartList: [],
	categories: [],
	includeOutOfStock: true,
	showFastDeliveryOnly: false,
	sortBy: "",
	isLoading: false,
	message: null,
	isAuthenticated: false,
};

const { REACT_APP_BACKEND_URL } = process.env;

export const ECommerceContext = createContext();

export default function ECommerceContextProvider({ children }) {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	const loadEssentials = async () => {
		try {
			if (!state.isAuthenticated) {
				dispatch({ type: Actions.SET__LOADING });
				const { data: productData } = await axios.get(`${REACT_APP_BACKEND_URL}/products`);
				const { data: categoriesData } = await axios.get(
					`${REACT_APP_BACKEND_URL}/categories`
				);
				dispatch({ type: Actions.LOAD__PRODUCTS, payload: productData.products });
				dispatch({ type: Actions.LOAD__CATEGORIES, payload: categoriesData.categories });
				dispatch({ type: Actions.LOAD__WISHLIST, payload: [] });
				dispatch({ type: Actions.LOAD__CARTLIST, payload: [] });
				return dispatch({ type: Actions.SET__LOADING });
			}

			if (state.isAuthenticated) {
				dispatch({ type: Actions.SET__LOADING });
				const { data: wishListData } = await axios.get(`${REACT_APP_BACKEND_URL}/wishlist`);
				const { data: cartListData } = await axios.get(`${REACT_APP_BACKEND_URL}/cartlist`);
				dispatch({ type: Actions.LOAD__WISHLIST, payload: wishListData.items });
				dispatch({ type: Actions.LOAD__CARTLIST, payload: cartListData.items });
				return dispatch({ type: Actions.SET__LOADING });
			}
		} catch (error) {
			console.error(error);
			dispatch({ type: Actions.SET__LOADING });
		}
	};

	const addItemToWishlist = async (itemId, type) => {
		try {
			dispatch(
				{ type: Actions.SHOW__MESSAGE },
				toast.info(`Updating Wishlist...`, { hideProgressBar: true, autoClose: 2000 })
			);
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/wishlist/${itemId}`, {
				product: itemId,
			});
			dispatch({ type: type, payload: data.item });
			dispatch({ type: Actions.REMOVE__MESSAGE });
			dispatch(
				{ type: Actions.SHOW__MESSAGE, payload: data.message },
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
			return dispatch({ type: Actions.REMOVE__MESSAGE });
		} catch (error) {
			console.error(error);
		}
	};

	const removeItemFromWishlist = async (itemId, type) => {
		try {
			dispatch(
				{ type: Actions.SHOW__MESSAGE },
				toast.info(`Updating Wishlist...`, { hideProgressBar: true, autoClose: 2000 })
			);
			const { data } = await axios.put(
				`${REACT_APP_BACKEND_URL}/${"wishlist"}/${itemId}/remove`,
				{
					id: itemId,
				}
			);
			dispatch({ type: type, payload: data.item });
			dispatch({ type: Actions.REMOVE__MESSAGE });
			dispatch(
				{ type: Actions.SHOW__MESSAGE, payload: data.message },
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
			return dispatch({ type: Actions.REMOVE__MESSAGE });
		} catch (error) {
			console.error(error);
		}
	};

	const addItemToCartlist = async (itemId, type) => {
		try {
			dispatch(
				{ type: Actions.SHOW__MESSAGE },
				toast.info(`Updating Cartlist...`, { hideProgressBar: true, autoClose: 2000 })
			);
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/cartlist/${itemId}`, {
				product: itemId,
			});
			dispatch({ type: type, payload: data.item });
			dispatch({ type: Actions.REMOVE__MESSAGE });
			dispatch(
				{ type: Actions.SHOW__MESSAGE, payload: data.message },
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
			return dispatch({ type: Actions.REMOVE__MESSAGE });
		} catch (error) {
			console.error(error);
		}
	};

	const removeItemFromCartlist = async (itemId, type) => {
		try {
			dispatch(
				{ type: Actions.SHOW__MESSAGE },
				toast.info(`Updating Cartlist...`, { hideProgressBar: true, autoClose: 2000 })
			);
			const { data } = await axios.put(`${REACT_APP_BACKEND_URL}/cartlist/${itemId}/remove`, {
				id: itemId,
			});
			dispatch({ type: type, payload: data.item });
			dispatch({ type: Actions.REMOVE__MESSAGE });
			dispatch(
				{ type: Actions.SHOW__MESSAGE, payload: data.message },
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
			return dispatch({ type: Actions.REMOVE__MESSAGE });
		} catch (error) {
			console.error(error);
		}
	};

	const incOrDecQuantity = async (itemId, type, operation) => {
		try {
			dispatch(
				{ type: Actions.SHOW__MESSAGE },
				toast.info("Updating Quantity...", { hideProgressBar: true, autoClose: 2000 })
			);
			const { data } = await axios.put(
				`${REACT_APP_BACKEND_URL}/cartlist/${itemId}/quantity?type=${operation}`,
				{
					id: itemId,
				}
			);
			dispatch({ type: type, payload: data });
			dispatch({ type: Actions.REMOVE__MESSAGE });
			dispatch(
				{ type: Actions.SHOW__MESSAGE, payload: data.message },
				toast.success("Quantity Updated!", {
					style: { backgroundColor: "#15b996" },
					autoClose: 2000,
					hideProgressBar: true,
				})
			);
			return dispatch({ type: Actions.REMOVE__MESSAGE });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<ECommerceContext.Provider
			value={{
				state,
				dispatch,
				loadEssentials,
				addItemToWishlist,
				removeItemFromWishlist,
				addItemToCartlist,
				removeItemFromCartlist,
				incOrDecQuantity,
			}}
		>
			{children}
		</ECommerceContext.Provider>
	);
}

export const useECommerceContext = () => {
	return useContext(ECommerceContext);
};
