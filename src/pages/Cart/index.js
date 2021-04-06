import { useMainContext } from "../../context/main-context";
import ProductDescriptionCard from "../../components/ProductDescriptionCard";
import { REMOVE__ITEM__FROM__CART } from "../../constants";
import PlaceOrder from "../../components/PlaceOrder";
import "./styles.css";

export default function Cart() {
	const { state, removeItemFromCartList } = useMainContext();

	const removeFromCartHandler = (item) => {
		return removeItemFromCartList({ ...item, cartListed: false }, REMOVE__ITEM__FROM__CART);
	};

	return (
		<div className="padding-l24 padding-r24 padding-t24 padding-b24">
			{state.cartList.length > 0 ? (
				<PlaceOrder />
			) : (
				<p className="text-center">Your cart is empty!</p>
			)}

			{state.cartList.map((item) => {
				console.log("Item before sent to product description card", item);
				return (
					<div key={item.id} className="mb-16">
						<ProductDescriptionCard key={item.id} productToShow={item} />
						<button
							className="button button--error centered--button"
							onClick={() => removeFromCartHandler(item)}
						>
							Remove
						</button>
						<hr />
					</div>
				);
			})}
		</div>
	);
}
