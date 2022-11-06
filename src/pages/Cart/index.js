import { Link } from "react-router-dom";
import { useECommerceContext } from "../../context";
import ProductDescriptionCard from "../../components/ProductDescriptionCard";
import PlaceOrder from "../../components/PlaceOrder";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import { useScrollToTop } from "../../utils/scrollToTop";
import "./cart.css";

export default function Cart() {
	const { state } = useECommerceContext();
	useDocumentTitle("Cart | CricShop");
	useScrollToTop();

	return (
		<>
			{state.cartList?.products?.length > 0 && state.isPaid === false ? (
				<PlaceOrder />
			) : (
				<>
					<p className="text-center">Your cart is empty!</p>
					<p className="text-center mt-16">
						<Link to="/" className="color-success fw-600 link">
							Buy More
						</Link>
					</p>
				</>
			)}

			{!state.isPaid && (
				<>
					{state.cartList?.products?.map((item) => {
						return (
							<div key={item._id} className="mb-16">
								<ProductDescriptionCard key={item._id} productToShow={item} />
								<hr />
							</div>
						);
					})}
				</>
			)}
		</>
	);
}
