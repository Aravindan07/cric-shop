import { createContext, useContext, useReducer } from "react";
import { mainReducer } from "../reducers/mainReducer";
import * as Actions from "../constants";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const initialState = {
	user: {},
	products: [],
	wishList: [],
	cartList: [],
	categories: [],
	includeOutOfStock: true,
	showFastDeliveryOnly: false,
	sortBy: "",
	searchText: "",
	isLoading: false,
	message: null,
	isAuthenticated: false,
	isPaid: false,
	showFilters: false,
};

const { REACT_APP_BACKEND_URL } = process.env;

export const TokenConfig = () => {
	//Get token from localStorage
	const token = localStorage.getItem("token");

	//Headers
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};

	//If token add to headers
	if (token) {
		config.headers["Authorization"] = `Bearer ${token}`;
	}

	return config;
};

export const ECommerceContext = createContext();

export default function ECommerceContextProvider({ children }) {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	let history = useHistory();

	const loadEssentials = async () => {
		try {
			dispatch({ type: Actions.SET__LOADING, payload: true });
			const { data: productData } = await axios.get(`${REACT_APP_BACKEND_URL}/products`);
			const { data: categoriesData } = await axios.get(`${REACT_APP_BACKEND_URL}/categories`);
			dispatch({ type: Actions.LOAD__PRODUCTS, payload: productData.products });
			dispatch({ type: Actions.LOAD__CATEGORIES, payload: categoriesData.categories });
			return dispatch({ type: Actions.SET__LOADING, payload: false });
		} catch (error) {
			console.error(error);
			dispatch({ type: Actions.SET__LOADING, payload: false });
		}
	};

	const loadUser = async () => {
		try {
			dispatch({ type: Actions.SET__LOADING, payload: true });
			const { data } = await axios.get(`${REACT_APP_BACKEND_URL}/users`, TokenConfig());
			dispatch({ type: Actions.LOAD__USER, payload: data });
			dispatch({ type: Actions.SET__LOADING, payload: false });
		} catch (error) {
			dispatch({ type: Actions.SET__LOADING, payload: true });
			toast.error(error.response.data.message, {
				style: { backgroundColor: "var(--complementary-color)", letterSpacing: "0.8px" },
				autoClose: 2000,
				hideProgressBar: true,
			});
			localStorage.removeItem("isAuthenticated");
			dispatch({ type: Actions.SET__LOADING, payload: false });
		}
	};

	const registerUser = async (name, email, password) => {
		try {
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/users/register`, {
				name,
				email,
				password,
			});
			dispatch({ type: Actions.SET__SIGNUP, payload: data });
			toast.success("User Registered Successfully", {
				style: { backgroundColor: "##15b996" },
				autoClose: 2000,
				hideProgressBar: true,
			});
			return history.goBack();
		} catch (error) {
			console.error(error);
		}
	};

	const logInUser = async (email, password) => {
		try {
			const { data } = await axios.post(`${REACT_APP_BACKEND_URL}/users/login`, {
				email,
				password,
			});
			dispatch({ type: Actions.SET__LOGIN, payload: data });
			toast.success("Logged in successfully", {
				autoClose: 2000,
				hideProgressBar: true,
			});
			return history.goBack();
		} catch (error) {
			console.error(error);
			console.log(error.response);
			return toast.error(error.response.data.message, {
				style: { backgroundColor: "#b91538" },
				autoClose: 2000,
				hideProgressBar: true,
			});
		}
	};

	const addOrRemoveItemFromWishlist = async (userId, itemId, operation) => {
		try {
			toast.info(`Updating Wishlist...`, { hideProgressBar: true, autoClose: 2000 });
			const { data } =
				operation === "add"
					? await axios.post(
							`${REACT_APP_BACKEND_URL}/users/${userId}/wishlist`,
							{
								userId,
								product: itemId,
							},
							TokenConfig()
					  )
					: await axios.put(
							`${REACT_APP_BACKEND_URL}/users/${userId}/wishlist/remove`,
							{
								userId,
								productId: itemId,
							},
							TokenConfig()
					  );

			dispatch({ type: Actions.ADD__OR__REMOVE__ITEM__FROM__WISHLIST, payload: data.item });
			return toast.success(data.message, {
				style: {
					backgroundColor: operation === "add" ? "#15b996" : "#dcdcdc",
					color: operation === "add" ? "var(--background-color)" : "var(--font-color)",
				},
				autoClose: 1500,
				hideProgressBar: true,
			});
		} catch (error) {
			console.error(error);
		}
	};

	const addOrRemoveItemFromCartlist = async (userId, itemId, operation) => {
		try {
			toast.info(`Updating Cartlist...`, { hideProgressBar: true, autoClose: 1500 });
			const { data } =
				operation === "add"
					? await axios.post(
							`${REACT_APP_BACKEND_URL}/users/${userId}/cartlist`,
							{
								userId,
								product: itemId,
							},
							TokenConfig()
					  )
					: await axios.put(
							`${REACT_APP_BACKEND_URL}/users/${userId}/cartlist/remove`,
							{
								userId,
								productsId: itemId,
							},
							TokenConfig()
					  );

			dispatch({ type: Actions.ADD__OR__REMOVE__ITEM__FROM__CART, payload: data.item });
			return toast.success(data.message, {
				style: {
					backgroundColor: operation === "add" ? "#15b996" : "#dcdcdc",
					color: operation === "add" ? "var(--background-color)" : "var(--font-color)",
				},
				autoClose: 1500,
				hideProgressBar: true,
			});
		} catch (error) {
			console.error(error);
		}
	};

	const incOrDecQuantity = async (userId, cartId, itemId, operation) => {
		try {
			toast.info("Updating Quantity...", { hideProgressBar: true, autoClose: 1500 });
			const { data } = await axios.put(
				`${REACT_APP_BACKEND_URL}/users/${userId}/cartlist/${cartId}/quantity?type=${operation}`,
				{
					cartId,
					productsId: itemId,
				},
				TokenConfig()
			);
			dispatch({ type: Actions.INCREMENT__OR__DECREMENT__QUANTITY, payload: data });
			toast.success(data.message, {
				style: { backgroundColor: "#15b996" },
				autoClose: 1500,
				hideProgressBar: true,
			});
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
				addOrRemoveItemFromWishlist,
				addOrRemoveItemFromCartlist,
				incOrDecQuantity,
				registerUser,
				loadUser,
				logInUser,
			}}
		>
			{children}
		</ECommerceContext.Provider>
	);
}

export const useECommerceContext = () => {
	return useContext(ECommerceContext);
};
