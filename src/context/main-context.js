import { createContext, useContext, useReducer } from "react";
import { mainReducer } from "../reducers/mainReducer";
import { LOAD__PRODUCTS, initialState } from "../constants";
import axios from "axios";
import { getSortedData } from "../utils/Filter";

const MainContext = createContext();

export default function MainContextProvider({ children }) {
	const [state, dispatch] = useReducer(mainReducer, initialState);

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
			const { data } = await axios.put(`/api/cartlists/${item.id}`, { cartlist: item });
			dispatch({ type: type, payload: data });
		} catch (error) {
			console.error(error);
		}
	};

	const incOrDecQuantity = async (item, type) => {
		console.log("inside context function", item);
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
