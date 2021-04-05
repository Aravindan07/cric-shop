// import { useAxios } from "./useAxios";
import { useMainContext } from "../context/wishlistContext";
import axios from "axios";

export const FetchData = async () => {
	const { data } = await axios.get("/api/products/");
	const { dispatch } = useMainContext();
	return dispatch({ type: "LOAD__PRODUCTS", payload: data });
};
