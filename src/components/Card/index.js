import { useWishList } from "../../context/wishlistContext";
import { ReactComponent as WishListIcon } from "../../icons/card-wish-icon.svg";
import { ADD__OR__REMOVE__ITEM__FROM__WISHLIST } from "../../constants";
import "./styles.css";

function Card() {
	console.log("Inside Card Component");
	const { state, addItemToWishList } = useWishList();
	console.log("state", state);
	const setWishListed = (item) => {
		addItemToWishList(
			{ ...item, wishListed: !item.wishListed },
			ADD__OR__REMOVE__ITEM__FROM__WISHLIST
		);
	};

	return (
		<>
			{state.products &&
				state.products.map((el) => (
					<div key={el.id} className={`card mt-16 mb-16`}>
						{!el.inStock && (
							<div className="out-of-stock-card">
								<div className="badge badge--error ls-1">Out of stock</div>
							</div>
						)}
						<div className="image-container">
							<img src={el.image} alt="Card Header" />
						</div>
						<div className="card__body">
							<div className="wishlist-icon-container">
								<WishListIcon
									fill={el.wishListed ? "red" : "#9b9999"}
									onClick={() => setWishListed(el)}
								/>
							</div>
							<div className="product__desc">
								<p className="ls-1 product__name mb-5">{el.name}</p>
							</div>
							<div className="price__tag c-pointer mt-8 fw-600">
								<span className="highlighted__price ls-1">Rs. {el.price}</span>
								<span className="price ml-16 ls-1 color-red fw-600">
									{el.offer}
								</span>
							</div>
							{el.inStock ? (
								<p className="color-green fw-600">In Stock</p>
							) : (
								<p className="color-gray fw-600">Out of Stock</p>
							)}
							<div className="rating">
								{el.rating}/5
								<img
									src="https://polish-ui.netlify.app/icons/star.svg"
									alt="Ratings"
								/>
							</div>
						</div>
					</div>
				))}
		</>
	);
}

export default Card;
