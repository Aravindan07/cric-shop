import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				setLoading(true);
				const response = await axios.get(url);

				console.log(response);
				if (isMounted) {
					setData(response.data.products);
					setLoading(false);
				}
			} catch (error) {
				setLoading(false);
				setError(error);
			}
		})();
		return () => {
			isMounted = false;
		};
	}, [url]);
	return [data, setData, loading, error];
};
