import { useECommerceContext } from "../../context";
import { toast } from "react-toastify";
import "./placeOrder.css";

export default function PlaceOrder() {
	const {
		state: { cartList },
	} = useECommerceContext();

	const totalPrice = (accumulator, currentValue) =>
		accumulator + currentValue.quantityAddedToCart * currentValue.price;
	const totalQuantity = (accumulator, currentValue) =>
		accumulator + Number(currentValue.quantityAddedToCart);

	const notify = () =>
		toast.success("Order placed Successfully!", {
			hideProgressBar: true,
			autoClose: 3000,
			className: "toast-div",
		});

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
			<button className="button button--primary" onClick={notify}>
				Place Order
			</button>
		</div>
	);
}
