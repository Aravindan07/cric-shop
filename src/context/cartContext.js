import { createContext, useContext } from "react";

export const CartContext = createContext();

export default function CartListProvider({ children }) {
	return <CartContext.Provider value={{ items: 10 }}>{children}</CartContext.Provider>;
}

export const useCart = () => {
	return useContext(CartContext);
};
