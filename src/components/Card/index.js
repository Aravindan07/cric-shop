import { useWishList } from "../../context/wishlistContext";
import { ReactComponent as WishListIcon } from "../../icons/card-wish-icon.svg";
import { ADD__OR__REMOVE__ITEM__FROM__WISHLIST } from "../../constants";
import "./styles.css";
import { useHistory } from "react-router";

function Card({ item }) {
	const history = useHistory();

	const { addItemToWishList } = useWishList();
	const setWishListed = (event) => {
		event.stopPropagation();
		addItemToWishList(
			{ ...item, wishListed: !item.wishListed },
			ADD__OR__REMOVE__ITEM__FROM__WISHLIST
		);
	};

	const gotoProduct = (event) => {
		event.stopPropagation();
		if (item.inStock) {
			return history.push(`/products/${item.id}`);
		}
		return null;
	};

	return (
		<>
			<div className={`card mt-16 mb-16 c-pointer`} onClick={(e) => gotoProduct(e)}>
				{item.inStock === "Out of Stock" && (
					<div className="out-of-stock-card">
						<div className="badge badge--error ls-1">Out of stock</div>
					</div>
				)}
				<div className="image-container">
					<img src={item.image} alt="Card Header" />
				</div>
				<div className="card__body">
					<div className="wishlist-icon-container">
						<WishListIcon
							fill={item.wishListed ? "var(--complementary-color)" : "#9b9999"}
							onClick={(e) => setWishListed(e)}
						/>
					</div>
					<div className="product__desc">
						<p className="ls-1 product__name mb-5">{item.name}</p>
					</div>
					<div className="price__tag c-pointer mt-8 fw-600">
						<span className="highlighted__price ls-1">Rs. {item.price}</span>
						<span className="price ml-16 ls-1 color-red fw-600">{item.offer}</span>
					</div>
					{item.inStock === "In Stock" && (
						<p className="color-success fw-600">In Stock</p>
					)}
					{item.inStock === "Only few left" && (
						<p className="color-warning fw-600">Only few left</p>
					)}
					<div className="rating">
						{item.rating}/5
						<img src="https://polish-ui.netlify.app/icons/star.svg" alt="Ratings" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
