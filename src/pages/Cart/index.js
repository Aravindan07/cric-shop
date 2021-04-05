import { useMainContext } from "../../context/main-context";
import ProductDescriptionCard from "../../components/ProductDescriptionCard";
import "./styles.css";
import { REMOVE__ITEM__FROM__CART } from "../../constants";

export default function Cart() {
	const { state, removeItemFromCartList } = useMainContext();

	const removeFromCartHandler = (item) => {
		return removeItemFromCartList({ ...item, cartListed: false }, REMOVE__ITEM__FROM__CART);
	};

	const total = (accumulator, currentValue) => accumulator + Number(currentValue.price);
	console.log("State in cart component", state);

	const totalQuantity = (accumulator, currentValue) =>
		accumulator + Number(currentValue.quantity);

	return (
		<div className="padding-l24 padding-r24 padding-t24 padding-b24">
			{state.cartList.length > 0 ? (
				<div className="text-center mb-32 cart-details-card padding-l16 padding-r16 padding-t16 padding-b16">
					<p className="mb-8">
						Items: <span className="fw-600">{state.cartList.length}</span>
					</p>
					<p className="mb-8">
						Quantity:{" "}
						<span className="fw-600">{state.cartList.reduce(totalQuantity, 0)}</span>
					</p>
					<p className="mb-8">
						Total Price:{" "}
						<span className="fw-600"> Rs.{state.cartList.reduce(total, 0)}</span>
					</p>
					<button className="button button--primary">Place Order</button>
				</div>
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
							Remove from Cart
						</button>
						<hr />
					</div>
				);
			})}
		</div>
	);
}
