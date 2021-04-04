import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { initialState } from "../constants";
import { cartListReducer } from "../reducers/cartListReducer";

export const CartContext = createContext();

export default function CartListProvider({ children }) {
	// const [state, dispatch] = useReducer(cartListReducer, initialState);

	// const addItemToCartList = async (item, type) => {
	// 	console.log(item, type);
	// 	const { data: cartItems } = await axios.post("/api/cartlists", { cartlist: item });
	// 	console.log(cartItems);
	// 	return dispatch({ type: type, payload: cartItems });
	// };
	return <CartContext.Provider value={{ items: 10 }}>{children}</CartContext.Provider>;
}

export const useCart = () => {
	return useContext(CartContext);
};
