// import { useAxios } from "./useAxios";
import { useWishList } from "../context/wishlistContext";
import axios from "axios";

export const FetchData = async () => {
	const { data } = await axios.get("/api/products/");
	const { dispatch } = useWishList();
	return dispatch({ type: "LOAD__PRODUCTS", payload: data });
};
