import { useMainContext } from "../../context/main-context";
import { toast } from "react-toastify";

export default function PlaceOrder() {
	const {
		state: { cartList },
	} = useMainContext();

	const totalPrice = (accumulator, currentValue) =>
		accumulator + currentValue.quantityAddedToCart * currentValue.price;
	const totalQuantity = (accumulator, currentValue) =>
		accumulator + Number(currentValue.quantityAddedToCart);

	const notify = () =>
		toast.success("Order placed Successfully!", {
			hideProgressBar: true,
			autoClose: 3000,
			style: {
				backgroundColor: "var(--background-color)",
				border: "2px solid var(--primary-color)",
				borderRadius: "5px",
				color: "var(--primary-color)",
				fontSize: "18px",
				letterSpacing: "1px",
			},
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
