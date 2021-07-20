import { useECommerceContext } from "../../context";
import axios from "axios";
import { SET_PAID } from "../../constants";
import "./placeOrder.css";
import { toast } from "react-toastify";

async function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}

export default function PlaceOrder() {
	const {
		state: { cartList },
		dispatch,
	} = useECommerceContext();

	const totalPrice = (accumulator, currentValue) =>
		accumulator + currentValue.quantity * currentValue.product.price;

	const totalQuantity = (accumulator, currentValue) =>
		accumulator + Number(currentValue.quantity);

	async function displayRazorPay() {
		const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

		if (!res) {
			alert("RazorPay payment gateway failed to load!");
			return;
		}

		const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/payment`, {
			amount: cartList.products.reduce(totalPrice, 0),
			currency: "INR",
		});

		const options = {
			key: "rzp_test_qhqsq3DEcMOno7",
			currency: data.data.currency,
			amount: data.data.amount.toString(),
			order_id: data.data.id,
			name: "Cric Shop",
			description: "Thank you for purchasing!",
			image: "https://cric-shop.netlify.app/cricket-logo.svg",
			handler: function (response) {
				dispatch({ type: SET_PAID, payload: { paid: true } });
				toast.success("Payment Done Successfully", {
					style: {
						letterSpacing: "0.8px",
					},
					autoClose: 2000,
					hideProgressBar: true,
				});
				// alert(response.razorpay_payment_id);
				// alert(response.razorpay_order_id);
				// alert(response.razorpay_signature);
			},
			prefill: {
				name: "User",
				email: "user@example.com",
				contact: "9999999999",
			},
			notes: {
				address: "Razorpay Corporate Office",
			},
			theme: {
				color: "#3399cc",
			},
		};
		var rzp1 = new window.Razorpay(options);
		rzp1.open();
	}

	return (
		<div className="text-center mb-32 cart-details-card padding-l16 padding-r16 padding-t16 padding-b16">
			<p className="mb-8">
				Items: <span className="fw-600">{cartList.products.length}</span>
			</p>
			<p className="mb-8">
				Quantity:{" "}
				<span className="fw-600">{cartList.products.reduce(totalQuantity, 0)}</span>
			</p>
			<p className="mb-8">
				Total Price:{" "}
				<span className="fw-600"> Rs.{cartList.products.reduce(totalPrice, 0)}</span>
			</p>
			<button className="button button--primary" onClick={displayRazorPay}>
				Place Order
			</button>
		</div>
	);
}
