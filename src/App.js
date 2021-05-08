import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useECommerceContext } from "./context";
import Loader from "./components/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDocumentTitle } from "./utils/useDocumentTitle";
import Routes from "./routes";

function App() {
	const { loadEssentials, state } = useECommerceContext();
	useDocumentTitle("Home | CricShop");

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			loadEssentials();
		}
		return () => {
			isMounted = false;
		};
	}, [state.isAuthenticated]);

	toast.configure();

	return (
		<div className="flex-col">
			{state.isLoading && <Loader />}
			<Navbar />
			<ToastContainer />
			<div className="main-container w100 padding-t8 padding-b8">
				<Routes />
			</div>
		</div>
	);
}

export default App;
