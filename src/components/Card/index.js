import { useECommerceContext } from "../../context";
import { ReactComponent as WishListIcon } from "../../icons/card-wish-icon.svg";
import { ADD__ITEM__TO__WISHLIST, REMOVE__ITEM__FROM__WISHLIST } from "../../constants";
import "./card.css";
import { useHistory } from "react-router";

function Card({ item }) {
	const history = useHistory();
	const {
		state: { isAuthenticated, wishList },
		removeItemFromWishlist,
		addItemToWishlist,
	} = useECommerceContext();

	const wishlistItems = wishList.filter((el) => el.product._id === item._id);
	const checkWishlist = (itemId) => wishList.find((el) => el.product._id === itemId);
	const extractId = (itemId) => {
		let finded = wishList.find((el) => el.product._id === itemId);
		return finded._id;
	};
	const fillColorAssigner = () => {
		let color = "#9b9999";
		wishlistItems.forEach((el) => {
			if (el.product._id === item._id) {
				color = "var(--complementary-color)";
			} else {
				color = "#9b9999";
			}
		});
		return color;
	};

	const setWishListed = (event) => {
		event.stopPropagation();
		if (isAuthenticated && !checkWishlist(item._id)) {
			return addItemToWishlist(item._id, ADD__ITEM__TO__WISHLIST);
		}
		if (isAuthenticated && checkWishlist(item._id)) {
			return removeItemFromWishlist(extractId(item._id), REMOVE__ITEM__FROM__WISHLIST);
		}
		return history.push("/my-account");
	};

	const gotoProduct = (event) => {
		event.stopPropagation();
		if (item.inStock) {
			return history.push(`/products/${item._id}`);
		}
	};

	return (
		<>
			<div className="card mt-16 mb-16 c-pointer" onClick={(e) => gotoProduct(e)}>
				{!item.inStock && (
					<div className="out-of-stock-card">
						<div className="badge badge--error ls-1">Out of stock</div>
					</div>
				)}
				<div className="image-container">
					<img src={item.imageUrl} alt="Card Header" />
				</div>
				<div className="card__body">
					<div className="wishlist-icon-container">
						<WishListIcon
							fill={isAuthenticated ? fillColorAssigner() : "#9b9999"}
							onClick={(e) => setWishListed(e)}
						/>
					</div>
					<div className="product__desc">
						<p className="ls-1 product__name mb-5">{item.brand}</p>
						<small className="ls-1 mb-5">{item.name}</small>
					</div>
					<div className="price__tag c-pointer mt-8 fw-600">
						<span className="highlighted__price ls-1">Rs. {item.price}</span>
						<span className="price ml-16 ls-1 color-red fw-600">
							{item.offer} offer
						</span>
					</div>
					{item.inStock ? (
						<p className="color-success fw-600">In Stock</p>
					) : (
						<p className="color-error fw-600">Out of Stock</p>
					)}
					<div className="rating">
						{item.ratings}/5
						<img src="https://polish-ui.netlify.app/icons/star.svg" alt="Ratings" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
