import { useWishList } from "../../context/wishlistContext";
import ProductDescriptionCard from "../../components/ProductDescriptionCard";
import "./styles.css";
import { REMOVE__ITEM__FROM__CART } from "../../constants";

export default function Cart() {
	const { state, removeItemFromCartList } = useWishList();

	const removeFromCartHandler = (item) => {
		return removeItemFromCartList({ ...item, cartListed: false }, REMOVE__ITEM__FROM__CART);
	};

	const total = (accumulator, currentValue) => accumulator + Number(currentValue.price);

	return (
		<div className="padding-l24 padding-r24 padding-t24 padding-b24">
			{state.cartList.length > 0 ? (
				<div className="text-center mb-32 cart-details-card padding-l8 padding-r8 padding-t8 padding-b8">
					<p>
						Items: <span className="fw-600">{state.cartList.length}</span>
					</p>
					<p>
						Quantity: <span className="fw-600">{state.cartList.length}</span>
					</p>
					<p>
						Total Price:{" "}
						<span className="fw-600"> Rs.{state.cartList.reduce(total, 0)}</span>
					</p>
					<button className="button button--primary">Place Order</button>
				</div>
			) : (
				<p className="text-center">Your cart is empty!</p>
			)}

			{state.cartList.map((item) => (
				<div className="mb-16">
					<ProductDescriptionCard key={item.id} productToShow={item} />
					<button
						className="button button--error centered--button"
						onClick={() => removeFromCartHandler(item)}
					>
						Remove from Cart
					</button>
					<hr />
				</div>
			))}
		</div>
	);
}
