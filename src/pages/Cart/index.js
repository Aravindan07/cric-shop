import { useMainContext } from "../../context/main-context";
import ProductDescriptionCard from "../../components/ProductDescriptionCard";
import PlaceOrder from "../../components/PlaceOrder";
import "./styles.css";

export default function Cart() {
	const { state } = useMainContext();

	return (
		<div className="padding-l24 padding-r24 padding-t24 padding-b24">
			{state.cartList.length > 0 ? (
				<PlaceOrder />
			) : (
				<p className="text-center">Your cart is empty!</p>
			)}

			{state.cartList.map((item) => {
				return (
					<div key={item.id} className="mb-16">
						<ProductDescriptionCard key={item.id} productToShow={item} />
						<hr />
					</div>
				);
			})}
		</div>
	);
}
