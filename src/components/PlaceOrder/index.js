import { useMainContext } from "../../context/main-context";

export default function PlaceOrder() {
	const {
		state: { cartList },
	} = useMainContext();

	const totalPrice = (accumulator, currentValue) =>
		accumulator + currentValue.quantityAddedToCart * currentValue.price;
	const totalQuantity = (accumulator, currentValue) =>
		accumulator + Number(currentValue.quantityAddedToCart);

	return (
		<div className="text-center mb-32 cart-details-card padding-l16 padding-r16 padding-t16 padding-b16">
			<p className="mb-8">
				Items: <span className="fw-600">{cartList.length}</span>
			</p>
			<p className="mb-8">
				Quantity: <span className="fw-600">{cartList.reduce(totalQuantity, 0)}</span>
			</p>
			<p className="mb-8">
				Total Price: <span className="fw-600"> Rs.{cartList.reduce(totalPrice, 0)}</span>
			</p>
			<button className="button button--primary">Place Order</button>
		</div>
	);
}
