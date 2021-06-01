import { useECommerceContext } from "../../context";
import ProductDescriptionCard from "../../components/ProductDescriptionCard";
import PlaceOrder from "../../components/PlaceOrder";
import "./cart.css";
import { useDocumentTitle } from "../../utils/useDocumentTitle";

export default function Cart() {
	const { state } = useECommerceContext();
	useDocumentTitle("Cart | CricShop");

	return (
		<div className="padding-l24 padding-r24 padding-t24 padding-b24">
			{state.cartList?.products?.length > 0 ? (
				<PlaceOrder />
			) : (
				<p className="text-center">Your cart is empty!</p>
			)}

			{state.cartList?.products?.map((item) => {
				return (
					<div key={item._id} className="mb-16">
						<ProductDescriptionCard key={item._id} productToShow={item} />
						<hr />
					</div>
				);
			})}
		</div>
	);
}
